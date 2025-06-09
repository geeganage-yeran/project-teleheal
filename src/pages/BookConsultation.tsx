import React, { useState } from 'react';
import { Calendar, Clock, User, CreditCard, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookConsultation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    serviceType: '',
    doctorPreference: '',
    appointmentType: '',
    selectedDate: '',
    selectedTime: '',
    patientInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      emergencyContact: '',
      emergencyPhone: ''
    },
    medicalInfo: {
      currentMedications: '',
      allergies: '',
      previousPsychiatricCare: '',
      reasonForVisit: '',
      symptoms: [],
      urgency: 'routine'
    },
    preferences: {
      language: 'english',
      reminderPreference: 'email'
    }
  });

  const services = [
    { id: 'initial-consultation', name: 'Initial Consultation (90 min)', price: '$380' },
    { id: 'follow-up', name: 'Follow-up Consultation (45 min)', price: '$280' },
    { id: 'medication-review', name: 'Medication Review (30 min)', price: '$220' },
    { id: 'crisis-consultation', name: 'Crisis Consultation (60 min)', price: '$320' },
    { id: 'assessment', name: 'Psychiatric Assessment (2 hours)', price: '$580' }
  ];

  const doctors = [
    { id: 'dr-ellepola', name: 'Dr. Anuradha Ellepola', specialties: ['Depression', 'Anxiety', 'ADHD', 'Women\'s Mental Health'] },
    { id: 'dr-wickrematunga', name: 'Dr. Jayani Wickrematunga', specialties: ['Trauma/PTSD', 'Bipolar', 'Psychotic Disorders', 'Crisis Care'] },
    { id: 'no-preference', name: 'No Preference', specialties: ['Any available specialist'] }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const symptoms = [
    'Depression', 'Anxiety', 'Panic Attacks', 'Sleep Issues', 'Concentration Problems',
    'Mood Swings', 'Trauma/PTSD', 'Substance Use', 'Relationship Issues', 'Work Stress'
  ];

  const handleInputChange = (section: string, field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleSymptomToggle = (symptom: string) => {
    setBookingData(prev => ({
      ...prev,
      medicalInfo: {
        ...prev.medicalInfo,
        symptoms: prev.medicalInfo.symptoms.includes(symptom)
          ? prev.medicalInfo.symptoms.filter(s => s !== symptom)
          : [...prev.medicalInfo.symptoms, symptom]
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.serviceType && bookingData.doctorPreference && bookingData.appointmentType;
      case 2:
        return bookingData.selectedDate && bookingData.selectedTime;
      case 3:
        return bookingData.patientInfo.firstName && bookingData.patientInfo.lastName && 
               bookingData.patientInfo.email && bookingData.patientInfo.phone;
      default:
        return true;
    }
  };

  return (
    <div className="animate-fade-in min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-4">
            Book Your Consultation
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Take the first step towards better mental health. Our secure booking process 
            ensures your privacy and convenience.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
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
            <span>Service & Doctor</span>
            <span>Date & Time</span>
            <span>Your Information</span>
            <span>Confirmation</span>
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-rose-500 to-rose-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold text-deep-teal mb-8">Choose Your Service</h2>
              
              <div className="space-y-8">
                {/* Service Type */}
                <div>
                  <label className="block text-lg font-medium text-deep-teal mb-4">
                    Type of Consultation *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => setBookingData(prev => ({ ...prev, serviceType: service.id }))}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                          bookingData.serviceType === service.id
                            ? 'border-rose-500 bg-rose-50'
                            : 'border-gray-200 hover:border-rose-300'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-deep-teal">{service.name}</h3>
                          </div>
                          <div className="text-lg font-bold text-rose-600">{service.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doctor Preference */}
                <div>
                  <label className="block text-lg font-medium text-deep-teal mb-4">
                    Doctor Preference *
                  </label>
                  <div className="space-y-4">
                    {doctors.map((doctor) => (
                      <div
                        key={doctor.id}
                        onClick={() => setBookingData(prev => ({ ...prev, doctorPreference: doctor.id }))}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                          bookingData.doctorPreference === doctor.id
                            ? 'border-rose-500 bg-rose-50'
                            : 'border-gray-200 hover:border-rose-300'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-deep-teal mb-2">{doctor.name}</h3>
                            <div className="flex flex-wrap gap-2">
                              {doctor.specialties.map((specialty, idx) => (
                                <span
                                  key={idx}
                                  className="bg-muted-rose px-2 py-1 rounded-full text-xs text-deep-teal"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Appointment Type */}
                <div>
                  <label className="block text-lg font-medium text-deep-teal mb-4">
                    Appointment Type *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      onClick={() => setBookingData(prev => ({ ...prev, appointmentType: 'video' }))}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        bookingData.appointmentType === 'video'
                          ? 'border-rose-500 bg-rose-50'
                          : 'border-gray-200 hover:border-rose-300'
                      }`}
                    >
                      <h3 className="font-semibold text-deep-teal mb-2">Video Consultation</h3>
                      <p className="text-sm text-gray-600">Secure video call from your home</p>
                    </div>
                    <div
                      onClick={() => setBookingData(prev => ({ ...prev, appointmentType: 'phone' }))}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        bookingData.appointmentType === 'phone'
                          ? 'border-rose-500 bg-rose-50'
                          : 'border-gray-200 hover:border-rose-300'
                      }`}
                    >
                      <h3 className="font-semibold text-deep-teal mb-2">Phone Consultation</h3>
                      <p className="text-sm text-gray-600">Audio-only consultation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && (
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold text-deep-teal mb-8">Select Date & Time</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Date Selection */}
                <div>
                  <label className="block text-lg font-medium text-deep-teal mb-4">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={bookingData.selectedDate}
                    onChange={(e) => setBookingData(prev => ({ ...prev, selectedDate: e.target.value }))}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-lg font-medium text-deep-teal mb-4">
                    Available Times *
                  </label>
                  <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setBookingData(prev => ({ ...prev, selectedTime: time }))}
                        className={`p-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          bookingData.selectedTime === time
                            ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {bookingData.selectedDate && bookingData.selectedTime && (
                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div className="text-green-800 font-medium">
                      Appointment: {new Date(bookingData.selectedDate).toLocaleDateString()} at {bookingData.selectedTime}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Patient Information */}
          {currentStep === 3 && (
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold text-deep-teal mb-8">Your Information</h2>
              
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-deep-teal mb-4">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">First Name *</label>
                      <input
                        type="text"
                        value={bookingData.patientInfo.firstName}
                        onChange={(e) => handleInputChange('patientInfo', 'firstName', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={bookingData.patientInfo.lastName}
                        onChange={(e) => handleInputChange('patientInfo', 'lastName', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">Email *</label>
                      <input
                        type="email"
                        value={bookingData.patientInfo.email}
                        onChange={(e) => handleInputChange('patientInfo', 'email', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">Phone *</label>
                      <input
                        type="tel"
                        value={bookingData.patientInfo.phone}
                        onChange={(e) => handleInputChange('patientInfo', 'phone', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">Date of Birth</label>
                      <input
                        type="date"
                        value={bookingData.patientInfo.dateOfBirth}
                        onChange={(e) => handleInputChange('patientInfo', 'dateOfBirth', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">Gender</label>
                      <select
                        value={bookingData.patientInfo.gender}
                        onChange={(e) => handleInputChange('patientInfo', 'gender', e.target.value)}
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

                {/* Medical Information */}
                <div>
                  <h3 className="text-lg font-semibold text-deep-teal mb-4">Medical Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">
                        What symptoms or concerns would you like to discuss?
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                        {symptoms.map((symptom) => (
                          <label key={symptom} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={bookingData.medicalInfo.symptoms.includes(symptom)}
                              onChange={() => handleSymptomToggle(symptom)}
                              className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                            />
                            <span className="text-sm text-gray-700">{symptom}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">
                        Reason for Visit
                      </label>
                      <textarea
                        value={bookingData.medicalInfo.reasonForVisit}
                        onChange={(e) => handleInputChange('medicalInfo', 'reasonForVisit', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300 resize-none"
                        placeholder="Please describe your main concerns or reason for seeking consultation..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">
                        Current Medications
                      </label>
                      <textarea
                        value={bookingData.medicalInfo.currentMedications}
                        onChange={(e) => handleInputChange('medicalInfo', 'currentMedications', e.target.value)}
                        rows={2}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300 resize-none"
                        placeholder="List any medications you're currently taking (include dosages if known)"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div>
                  <h3 className="text-lg font-semibold text-deep-teal mb-4">Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">Language Preference</label>
                      <select
                        value={bookingData.preferences.language}
                        onChange={(e) => handleInputChange('preferences', 'language', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                      >
                        <option value="english">English</option>
                        <option value="sinhala">Sinhala</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">Reminder Preference</label>
                      <select
                        value={bookingData.preferences.reminderPreference}
                        onChange={(e) => handleInputChange('preferences', 'reminderPreference', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                      >
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                        <option value="both">Both Email & SMS</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="animate-slide-up">
              <h2 className="text-2xl font-bold text-deep-teal mb-8">Confirm Your Booking</h2>
              
              <div className="space-y-6">
                {/* Appointment Summary */}
                <div className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-2xl p-6 border border-rose-200">
                  <h3 className="text-lg font-semibold text-deep-teal mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-rose-500" />
                    Appointment Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-deep-teal">Service:</span>
                      <p className="text-gray-700">
                        {services.find(s => s.id === bookingData.serviceType)?.name}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-deep-teal">Doctor:</span>
                      <p className="text-gray-700">
                        {doctors.find(d => d.id === bookingData.doctorPreference)?.name}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-deep-teal">Date & Time:</span>
                      <p className="text-gray-700">
                        {new Date(bookingData.selectedDate).toLocaleDateString()} at {bookingData.selectedTime}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-deep-teal">Type:</span>
                      <p className="text-gray-700 capitalize">{bookingData.appointmentType} Consultation</p>
                    </div>
                  </div>
                </div>

                {/* Patient Information Summary */}
                <div className="bg-gradient-to-r from-pale-aqua to-cool-grey rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-deep-teal mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-rose-500" />
                    Patient Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-deep-teal">Name:</span>
                      <p className="text-gray-700">
                        {bookingData.patientInfo.firstName} {bookingData.patientInfo.lastName}
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-deep-teal">Email:</span>
                      <p className="text-gray-700">{bookingData.patientInfo.email}</p>
                    </div>
                    <div>
                      <span className="font-medium text-deep-teal">Phone:</span>
                      <p className="text-gray-700">{bookingData.patientInfo.phone}</p>
                    </div>
                    <div>
                      <span className="font-medium text-deep-teal">Language:</span>
                      <p className="text-gray-700 capitalize">{bookingData.preferences.language}</p>
                    </div>
                  </div>
                </div>

                {/* Cost Information */}
                <div className="bg-gradient-to-r from-muted-rose to-rose-100 rounded-2xl p-6 border border-rose-200">
                  <h3 className="text-lg font-semibold text-deep-teal mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-rose-500" />
                    Cost Information
                  </h3>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-700">Consultation Fee:</span>
                    <span className="font-bold text-deep-teal">
                      {services.find(s => s.id === bookingData.serviceType)?.price}
                    </span>
                  </div>
                  <div className="mt-4 p-3 bg-white/50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <AlertCircle className="h-4 w-4 inline mr-1 text-amber-500" />
                      Medicare rebates may apply. Payment is due at the time of service.
                    </p>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-deep-teal mb-4">Terms & Conditions</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input type="checkbox" required className="mt-1 rounded border-gray-300 text-rose-600 focus:ring-rose-500" />
                      <span>I understand the cancellation policy (24 hours notice required)</span>
                    </label>
                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input type="checkbox" required className="mt-1 rounded border-gray-300 text-rose-600 focus:ring-rose-500" />
                      <span>I consent to telehealth consultation and understand the privacy measures</span>
                    </label>
                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input type="checkbox" required className="mt-1 rounded border-gray-300 text-rose-600 focus:ring-rose-500" />
                      <span>I agree to the terms of service and privacy policy</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className="px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <span>Continue</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            ) : (
              <Link
                to="/payment"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>Proceed to Payment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;