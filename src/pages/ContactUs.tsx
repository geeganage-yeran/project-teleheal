import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, AlertCircle } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    urgency: 'routine'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        urgency: 'routine'
      });
    }, 2000);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-deep-teal mb-6 animate-slide-up">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            We're here to help you on your mental health journey. Reach out to us for appointments, 
            questions, or immediate support. Your wellbeing is our priority.
          </p>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Mental Health Emergency</h3>
              <p className="text-red-700 mb-4">
                If you are experiencing a mental health emergency or having thoughts of self-harm, 
                please seek immediate help:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-red-100 p-3 rounded-lg">
                  <div className="font-semibold text-red-800">Emergency Services</div>
                  <div className="text-red-700">Call 000</div>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <div className="font-semibold text-red-800">Lifeline Australia</div>
                  <div className="text-red-700">13 11 14</div>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <div className="font-semibold text-red-800">Beyond Blue</div>
                  <div className="text-red-700">1300 22 4636</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Contact Information */}
        <div className="animate-slide-up">
          <h2 className="text-3xl font-bold text-deep-teal mb-8">Get in Touch</h2>
          
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-rose-400 to-rose-600 p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-teal mb-2">Phone Support</h3>
                <p className="text-gray-700 mb-2">
                  Speak directly with our reception team for appointments and inquiries.
                </p>
                <div className="space-y-1">
                  <div className="font-medium text-deep-teal">1800-TELEHEAL (1800-835-343)</div>
                  <div className="text-sm text-gray-600">Monday to Friday: 8:00 AM - 6:00 PM AEST</div>
                  <div className="text-sm text-gray-600">Emergency support: 24/7</div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-teal mb-2">Email Support</h3>
                <p className="text-gray-700 mb-2">
                  Send us your questions and we'll respond within 24 hours.
                </p>
                <div className="space-y-1">
                  <div className="font-medium text-deep-teal">info@teleheal.com.au</div>
                  <div className="font-medium text-deep-teal">appointments@teleheal.com.au</div>
                  <div className="text-sm text-gray-600">Response time: Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-teal mb-2">Service Areas</h3>
                <p className="text-gray-700 mb-2">
                  Providing telepsychiatry services across Australia.
                </p>
                <div className="text-deep-teal font-medium">Australia-wide Telehealth Services</div>
                <div className="text-sm text-gray-600">All states and territories covered</div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-3 rounded-full">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-deep-teal mb-2">Operating Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday:</span>
                    <span className="font-medium text-deep-teal">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday:</span>
                    <span className="font-medium text-deep-teal">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday:</span>
                    <span className="font-medium text-deep-teal">Emergency Only</span>
                  </div>
                  <div className="text-sm text-gray-600 pt-2">
                    All times are Australian Eastern Standard Time (AEST)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 space-y-4">
            <h3 className="text-xl font-semibold text-deep-teal mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/book"
                className="bg-gradient-to-r from-rose-500 to-rose-600 text-white p-4 rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 hover:scale-105 text-center font-semibold flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href="tel:1800835343"
                className="border-2 border-deep-teal text-deep-teal p-4 rounded-xl hover:bg-deep-teal hover:text-white transition-all duration-300 hover:scale-105 text-center font-semibold flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-slide-up">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-deep-teal mb-8">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 rounded-full p-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-green-800 font-medium">Message sent successfully!</div>
                </div>
                <div className="text-green-700 text-sm mt-1">
                  We'll get back to you within 24 hours.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-deep-teal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deep-teal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-deep-teal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-deep-teal mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="either">Either</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-deep-teal mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="consultation">General Consultation</option>
                    <option value="services">Service Information</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-deep-teal mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="routine">Routine (48-72 hours)</option>
                    <option value="priority">Priority (24 hours)</option>
                    <option value="urgent">Urgent (Same day)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-deep-teal mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Please describe your inquiry or concern in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-rose-600 hover:to-rose-700 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How do I book my first appointment?',
                answer: 'You can book your first appointment through our online booking system, by calling 1800-TELEHEAL, or by sending us a message through this contact form. We recommend booking online for the fastest scheduling.'
              },
              {
                question: 'What do I need for a telehealth session?',
                answer: 'You\'ll need a device with a camera and microphone (smartphone, tablet, or computer), a stable internet connection, and a private, quiet space for your consultation. We\'ll send you a secure link before your appointment.'
              },
              {
                question: 'Do you accept health insurance?',
                answer: 'Yes, we accept most private health insurance plans and Medicare rebates are available for eligible services. Please contact us with your insurance details to verify coverage before your appointment.'
              },
              {
                question: 'What if I need emergency support?',
                answer: 'For mental health emergencies, please call 000 or go to your nearest emergency room. For crisis support, contact Lifeline (13 11 14) or Beyond Blue (1300 22 4636). These services are available 24/7.'
              },
              {
                question: 'Can I get a prescription through telehealth?',
                answer: 'Yes, our psychiatrists can prescribe medications through telehealth consultations. Prescriptions can be sent electronically to your preferred pharmacy or mailed to you if needed.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/70 rounded-2xl p-6 shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-deep-teal mb-3 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-rose-500" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;