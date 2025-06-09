import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, Users, Star, ArrowRight, CheckCircle, Phone } from 'lucide-react';


const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative px-4 py-20 overflow-hidden sm:px-6 lg:px-8">
        {/* Background Video - ADD YOUR VIDEO URL HERE */}
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/1080.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="mb-6 text-5xl font-bold leading-relaxed text-white md:text-6xl">
                Professional
                <span className="block pb-2 text-transparent md:mb-2 md:mt-2 bg-clip-text bg-gradient-to-r from-rose-400 to-rose-500">
                  Telepsychiatry
                </span>
                Services
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-200">
                Compassionate, evidence-based mental health care accessible anywhere in Australia. 
                Led by experienced Consultant Psychiatrists with multilingual support.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  to="/book"
                  className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 hover:scale-105"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 font-semibold text-center text-white transition-all duration-300 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 hover:scale-105"
                >
                  Our Services
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="p-8 border shadow-2xl bg-white/10 backdrop-blur-md rounded-3xl border-white/20">
                <div className="text-center">
                  <div className="w-20 h-20 p-4 mx-auto mb-6 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 animate-pulse-soft">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white">Available 24/7</h3>
                  <p className="mb-6 text-gray-200">
                    Professional mental health support when you need it most
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-white/20 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-sm text-gray-300">Patients Helped</div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/20 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-sm text-gray-300">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-deep-teal">
              Why Choose TeleHeal?
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-700">
              We provide comprehensive mental health care with the convenience of telehealth technology
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: 'Secure & Private',
                description: 'End-to-end encrypted consultations ensuring complete confidentiality',
                color: 'from-blue-400 to-blue-600'
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                description: 'Book appointments that fit your schedule, including evenings and weekends',
                color: 'from-green-400 to-green-600'
              },
              {
                icon: Users,
                title: 'Expert Psychiatrists',
                description: 'FRANZCP qualified Consultant Psychiatrists with years of experience',
                color: 'from-purple-400 to-purple-600'
              },
              {
                icon: Heart,
                title: 'Compassionate Care',
                description: 'Personalized treatment plans with empathy and cultural sensitivity',
                color: 'from-rose-400 to-rose-600'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-deep-teal">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-deep-teal">
              Comprehensive Mental Health Services
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-700">
              Treatment for adults and older adults with a wide range of mental health conditions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Depression & Anxiety',
                description: 'Evidence-based treatments including CBT and medication management',
                treatments: ['Cognitive Behavioral Therapy', 'Medication Management', 'Mindfulness Techniques']
              },
              {
                title: 'ADHD & Neurodevelopmental',
                description: 'Comprehensive assessment and treatment for attention disorders',
                treatments: ['ADHD Assessment', 'Medication Optimization', 'Behavioral Strategies']
              },
              {
                title: 'Trauma & PTSD',
                description: 'Specialized trauma therapy including EMDR and trauma-focused CBT',
                treatments: ['EMDR Therapy', 'Trauma-Focused CBT', 'Grounding Techniques']
              },
              {
                title: 'Bipolar Disorder',
                description: 'Mood stabilization and comprehensive bipolar disorder management',
                treatments: ['Mood Tracking', 'Medication Management', 'Psychoeducation']
              },
              {
                title: 'Psychotic Disorders',
                description: 'Treatment for schizophrenia and other psychotic conditions',
                treatments: ['Antipsychotic Management', 'Social Skills Training', 'Family Support']
              },
              {
                title: 'Dementia Care',
                description: 'Specialized care for older adults with cognitive decline',
                treatments: ['Cognitive Assessment', 'Behavioral Management', 'Family Counseling']
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 shadow-lg bg-white/70 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="mb-4 text-xl font-bold text-deep-teal">{service.title}</h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.treatments.map((treatment, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="flex-shrink-0 w-4 h-4 text-rose-500" />
                      <span className="text-sm text-gray-700">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-deep-teal to-teal-600 hover:from-teal-600 hover:to-teal-700 hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-deep-teal">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-700">
              Real experiences from people who found healing with TeleHeal
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: 'Sarah M.',
                location: 'Sydney, NSW',
                rating: 5,
                text: 'Dr. Ellepola helped me through my anxiety with such compassion. The online sessions were convenient and I felt completely comfortable sharing my concerns.'
              },
              {
                name: 'James K.',
                location: 'Melbourne, VIC',
                rating: 5,
                text: 'Outstanding service! Dr. Wickrematunga\'s approach to treating my depression was professional yet caring. The cultural sensitivity made all the difference.'
              },
              {
                name: 'Maria L.',
                location: 'Brisbane, QLD',
                rating: 5,
                text: 'The multilingual support was incredible. Being able to communicate in Sinhala during difficult moments made the therapy so much more effective.'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-6 italic text-gray-700">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-deep-teal">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="p-12 text-white shadow-2xl bg-gradient-to-r from-rose-500 to-rose-600 rounded-3xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Start Your Mental Health Journey?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Take the first step towards better mental health with professional, compassionate care
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-8 py-4 space-x-2 font-semibold transition-all duration-300 bg-white rounded-full shadow-lg text-rose-600 hover:bg-gray-100 hover:scale-105"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:1800-TELEHEAL"
                className="inline-flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 border-2 border-white rounded-full hover:bg-white hover:text-rose-600 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;