import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Shield, Lock, CheckCircle, ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      postcode: '',
      country: 'Australia'
    },
    saveCard: false,
    agreeToTerms: false
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  // Mock booking data - in real app this would come from booking context/state
  const bookingData = {
    service: 'Initial Consultation (90 min)',
    doctor: 'Dr. Anuradha Ellepola',
    date: 'Monday, December 18, 2024',
    time: '2:00 PM',
    type: 'Video Consultation',
    amount: 380,
    gst: 38,
    total: 418
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (name.startsWith('billing.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        billingAddress: {
          ...prev.billingAddress,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setFormData(prev => ({ ...prev, expiryDate: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
    }, 3000);
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-md w-full text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-deep-teal mb-4">Payment Successful!</h1>
            <p className="text-gray-700 mb-6">
              Your consultation has been booked successfully. You'll receive a confirmation email shortly.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-green-800 mb-2">Booking Confirmation</h3>
              <div className="text-sm text-green-700 space-y-1">
                <p><strong>Service:</strong> {bookingData.service}</p>
                <p><strong>Doctor:</strong> {bookingData.doctor}</p>
                <p><strong>Date:</strong> {bookingData.date}</p>
                <p><strong>Time:</strong> {bookingData.time}</p>
                <p><strong>Booking ID:</strong> TH-2024-001234</p>
              </div>
            </div>
            <div className="space-y-3">
              <Link
                to="/"
                className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 hover:scale-105 block"
              >
                Return to Home
              </Link>
              <Link
                to="/book"
                className="w-full border-2 border-deep-teal text-deep-teal py-3 px-6 rounded-lg font-semibold hover:bg-deep-teal hover:text-white transition-all duration-300 hover:scale-105 block"
              >
                Book Another Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-4">
            Secure Payment
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Complete your booking with our secure payment system. Your information is protected 
            with bank-level encryption.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Summary */}
          <div className="animate-slide-up">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-deep-teal mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-rose-500" />
                Booking Summary
              </h2>
              
              <div className="space-y-6">
                {/* Service Details */}
                <div className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-2xl p-6 border border-rose-200">
                  <h3 className="font-semibold text-deep-teal mb-4">Consultation Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Service:</span>
                      <span className="font-medium text-deep-teal">{bookingData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Doctor:</span>
                      <span className="font-medium text-deep-teal">{bookingData.doctor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Date:</span>
                      <span className="font-medium text-deep-teal">{bookingData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Time:</span>
                      <span className="font-medium text-deep-teal">{bookingData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Type:</span>
                      <span className="font-medium text-deep-teal">{bookingData.type}</span>
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="bg-gradient-to-r from-pale-aqua to-cool-grey rounded-2xl p-6">
                  <h3 className="font-semibold text-deep-teal mb-4">Cost Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-700">
                      <span>Consultation Fee:</span>
                      <span>${bookingData.amount}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>GST (10%):</span>
                      <span>${bookingData.gst}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-3">
                      <div className="flex justify-between text-lg font-bold text-deep-teal">
                        <span>Total:</span>
                        <span>${bookingData.total}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Medicare Information */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Medicare Rebate Information</h3>
                  <p className="text-sm text-blue-700">
                    Medicare rebates may apply for eligible services. You can claim rebates through 
                    Medicare after your consultation. We'll provide all necessary documentation.
                  </p>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-green-800 mb-1">Secure Payment</h3>
                      <p className="text-sm text-green-700">
                        Your payment is protected with 256-bit SSL encryption and PCI DSS compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="animate-slide-up">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-deep-teal mb-6 flex items-center">
                <CreditCard className="h-6 w-6 mr-2 text-rose-500" />
                Payment Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Method Selection */}
                <div>
                  <label className="block text-sm font-medium text-deep-teal mb-4">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    <label className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-rose-300 transition-colors duration-300">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-rose-600 focus:ring-rose-500"
                      />
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-700">Credit/Debit Card</span>
                    </label>
                  </div>
                </div>

                {/* Card Information */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardholderName" className="block text-sm font-medium text-deep-teal mb-2">
                        Cardholder Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="cardholderName"
                          name="cardholderName"
                          type="text"
                          required
                          value={formData.cardholderName}
                          onChange={handleInputChange}
                          className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                          placeholder="Name as it appears on card"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-deep-teal mb-2">
                        Card Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CreditCard className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="cardNumber"
                          name="cardNumber"
                          type="text"
                          required
                          value={formData.cardNumber}
                          onChange={handleCardNumberChange}
                          maxLength={19}
                          className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-deep-teal mb-2">
                          Expiry Date *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="expiryDate"
                            name="expiryDate"
                            type="text"
                            required
                            value={formData.expiryDate}
                            onChange={handleExpiryChange}
                            maxLength={5}
                            className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                            placeholder="MM/YY"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-deep-teal mb-2">
                          CVV *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="cvv"
                            name="cvv"
                            type="text"
                            required
                            value={formData.cvv}
                            onChange={handleInputChange}
                            maxLength={4}
                            className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Billing Address */}
                <div>
                  <h3 className="text-lg font-semibold text-deep-teal mb-4">Billing Address</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="billing.street" className="block text-sm font-medium text-deep-teal mb-2">
                        Street Address *
                      </label>
                      <input
                        id="billing.street"
                        name="billing.street"
                        type="text"
                        required
                        value={formData.billingAddress.street}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="billing.city" className="block text-sm font-medium text-deep-teal mb-2">
                          City *
                        </label>
                        <input
                          id="billing.city"
                          name="billing.city"
                          type="text"
                          required
                          value={formData.billingAddress.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                          placeholder="Sydney"
                        />
                      </div>
                      <div>
                        <label htmlFor="billing.state" className="block text-sm font-medium text-deep-teal mb-2">
                          State *
                        </label>
                        <select
                          id="billing.state"
                          name="billing.state"
                          required
                          value={formData.billingAddress.state}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        >
                          <option value="">Select State</option>
                          <option value="NSW">NSW</option>
                          <option value="VIC">VIC</option>
                          <option value="QLD">QLD</option>
                          <option value="WA">WA</option>
                          <option value="SA">SA</option>
                          <option value="TAS">TAS</option>
                          <option value="ACT">ACT</option>
                          <option value="NT">NT</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="billing.postcode" className="block text-sm font-medium text-deep-teal mb-2">
                        Postcode *
                      </label>
                      <input
                        id="billing.postcode"
                        name="billing.postcode"
                        type="text"
                        required
                        value={formData.billingAddress.postcode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="2000"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      name="saveCard"
                      type="checkbox"
                      checked={formData.saveCard}
                      onChange={handleInputChange}
                      className="mt-1 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                    />
                    <span className="text-sm text-gray-700">
                      Save this card for future payments (optional)
                    </span>
                  </label>
                  
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      name="agreeToTerms"
                      type="checkbox"
                      required
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the payment terms and cancellation policy *
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing Payment...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="h-5 w-5" />
                      <span>Pay ${bookingData.total} Securely</span>
                    </>
                  )}
                </button>

                {/* Back to Booking */}
                <Link
                  to="/book"
                  className="w-full border-2 border-gray-300 text-gray-600 py-3 px-6 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-700 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Back to Booking</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;