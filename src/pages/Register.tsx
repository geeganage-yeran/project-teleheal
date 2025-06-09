import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    
    // Account Security
    password: '',
    confirmPassword: '',
    
    // Medical Information
    emergencyContact: '',
    emergencyPhone: '',
    medicalHistory: '',
    currentMedications: '',
    allergies: '',
    
    // Preferences
    language: 'english',
    communicationPreference: 'email',
    marketingConsent: false,
    
    // Agreements
    termsAccepted: false,
    privacyAccepted: false,
    teleheathConsent: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Check password strength
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0:
      case 1: return { text: 'Weak', color: 'text-red-600' };
      case 2:
      case 3: return { text: 'Medium', color: 'text-yellow-600' };
      case 4:
      case 5: return { text: 'Strong', color: 'text-green-600' };
      default: return { text: 'Weak', color: 'text-red-600' };
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const canProceedStep1 = () => {
    return formData.firstName && formData.lastName && formData.email && 
           formData.phone && formData.dateOfBirth && formData.gender;
  };

  const canProceedStep2 = () => {
    return formData.password && formData.confirmPassword && 
           formData.password === formData.confirmPassword && passwordStrength >= 3;
  };

  const canSubmit = () => {
    return formData.termsAccepted && formData.privacyAccepted && formData.teleheathConsent;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful registration here
      console.log('Registration data:', formData);
    }, 2000);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-rose-400 to-rose-600 p-4 rounded-full">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-deep-teal mb-2">Join TeleHeal</h1>
          <p className="text-gray-700">Create your account for professional mental health care</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold ${
                  step <= currentStep
                    ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step < currentStep ? <CheckCircle className="h-6 w-6" /> : step}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Personal Info</span>
            <span>Account Security</span>
            <span>Medical & Preferences</span>
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-rose-500 to-rose-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-2xl font-bold text-deep-teal mb-6">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-deep-teal mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-deep-teal mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Your last name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-deep-teal mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-deep-teal mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-deep-teal mb-2">
                      Date of Birth *
                    </label>
                    <input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-deep-teal mb-2">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Account Security */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-2xl font-bold text-deep-teal mb-6">Account Security</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-deep-teal mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pl-10 pr-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${
                                passwordStrength <= 2 ? 'bg-red-500' :
                                passwordStrength <= 3 ? 'bg-yellow-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${(passwordStrength / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span className={`text-sm font-medium ${getPasswordStrengthText().color}`}>
                            {getPasswordStrengthText().text}
                          </span>
                        </div>
                        <div className="mt-2 text-xs text-gray-600">
                          Password should contain: uppercase, lowercase, number, special character (8+ chars)
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-deep-teal mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="pl-10 pr-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                    {formData.confirmPassword && (
                      <div className="mt-2">
                        {formData.password === formData.confirmPassword ? (
                          <div className="flex items-center space-x-1 text-green-600 text-sm">
                            <CheckCircle className="h-4 w-4" />
                            <span>Passwords match</span>
                          </div>
                        ) : (
                          <div className="text-red-600 text-sm">Passwords do not match</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Medical Information & Preferences */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-slide-up">
                <h2 className="text-2xl font-bold text-deep-teal mb-6">Medical Information & Preferences</h2>
                
                {/* Emergency Contact */}
                <div>
                  <h3 className="text-lg font-semibold text-deep-teal mb-4">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="emergencyContact" className="block text-sm font-medium text-deep-teal mb-2">
                        Emergency Contact Name
                      </label>
                      <input
                        id="emergencyContact"
                        name="emergencyContact"
                        type="text"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="emergencyPhone" className="block text-sm font-medium text-deep-teal mb-2">
                        Emergency Contact Phone
                      </label>
                      <input
                        id="emergencyPhone"
                        name="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Medical History */}
                <div>
                  <h3 className="text-lg font-semibold text-deep-teal mb-4">Medical Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="currentMedications" className="block text-sm font-medium text-deep-teal mb-2">
                        Current Medications
                      </label>
                      <textarea
                        id="currentMedications"
                        name="currentMedications"
                        rows={3}
                        value={formData.currentMedications}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300 resize-none"
                        placeholder="List any medications you're currently taking..."
                      />
                    </div>
                    <div>
                      <label htmlFor="allergies" className="block text-sm font-medium text-deep-teal mb-2">
                        Allergies
                      </label>
                      <textarea
                        id="allergies"
                        name="allergies"
                        rows={2}
                        value={formData.allergies}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300 resize-none"
                        placeholder="List any known allergies..."
                      />
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div>
                  <h3 className="text-lg font-semibold text-deep-teal mb-4">Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="language" className="block text-sm font-medium text-deep-teal mb-2">
                        Preferred Language
                      </label>
                      <select
                        id="language"
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                      >
                        <option value="english">English</option>
                        <option value="sinhala">Sinhala</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="communicationPreference" className="block text-sm font-medium text-deep-teal mb-2">
                        Communication Preference
                      </label>
                      <select
                        id="communicationPreference"
                        name="communicationPreference"
                        value={formData.communicationPreference}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                      >
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                        <option value="both">Both Email & SMS</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Consent and Agreements */}
                <div>
                  <h3 className="text-lg font-semibold text-deep-teal mb-4">Agreements & Consent</h3>
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        name="termsAccepted"
                        type="checkbox"
                        required
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        className="mt-1 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the{' '}
                        <Link to="/terms" className="text-rose-600 hover:text-rose-700 font-medium">
                          Terms of Service
                        </Link>{' '}
                        and understand the cancellation policy *
                      </span>
                    </label>
                    
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        name="privacyAccepted"
                        type="checkbox"
                        required
                        checked={formData.privacyAccepted}
                        onChange={handleInputChange}
                        className="mt-1 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the{' '}
                        <Link to="/privacy" className="text-rose-600 hover:text-rose-700 font-medium">
                          Privacy Policy
                        </Link>{' '}
                        and consent to data processing *
                      </span>
                    </label>
                    
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        name="teleheathConsent"
                        type="checkbox"
                        required
                        checked={formData.teleheathConsent}
                        onChange={handleInputChange}
                        className="mt-1 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                      />
                      <span className="text-sm text-gray-700">
                        I consent to telehealth consultations and understand the technology requirements and limitations *
                      </span>
                    </label>
                    
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        name="marketingConsent"
                        type="checkbox"
                        checked={formData.marketingConsent}
                        onChange={handleInputChange}
                        className="mt-1 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                      />
                      <span className="text-sm text-gray-700">
                        I would like to receive health tips and updates from TeleHeal (optional)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-700 transition-all duration-300"
                >
                  Previous
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-rose-600 hover:text-rose-700 font-medium transition-colors duration-300"
                >
                  Already have an account?
                </Link>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !canProceedStep1()) ||
                    (currentStep === 2 && !canProceedStep2())
                  }
                  className="px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canSubmit() || isLoading}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Security Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-4 animate-slide-up">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-500 rounded-full p-1 flex-shrink-0">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-blue-800 mb-1">Your Privacy is Protected</h3>
              <p className="text-sm text-blue-700">
                All information is encrypted and stored securely in compliance with Australian healthcare privacy standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;