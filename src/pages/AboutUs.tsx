import React from 'react';
import { Award, Users, Heart, Globe, Star, BookOpen, Shield, Clock } from 'lucide-react';
import Logo from '../assets/logo.png'; 

const AboutUs: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-deep-teal mb-6 animate-slide-up">
            About TeleHeal
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Founded on the principles of compassion, accessibility, and excellence in mental health care, 
            TeleHeal is dedicated to breaking geographical barriers and making quality psychiatric services 
            available to every Australian.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-rose-400 to-rose-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-deep-teal mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To provide personalized, evidence-based mental health care with empathy and respect, 
                utilizing secure telehealth technology to ensure every Australian has access to quality 
                psychiatric services regardless of their location.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="bg-rose-100 p-1 rounded-full">
                    <Shield className="h-4 w-4 text-rose-600" />
                  </div>
                  <span className="text-gray-700">Secure and confidential care</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-rose-100 p-1 rounded-full">
                    <Globe className="h-4 w-4 text-rose-600" />
                  </div>
                  <span className="text-gray-700">Culturally sensitive treatment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-rose-100 p-1 rounded-full">
                    <Clock className="h-4 w-4 text-rose-600" />
                  </div>
                  <span className="text-gray-700">Accessible anytime, anywhere</span>
                </li>
              </ul>
            </div>

            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-deep-teal to-teal-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-deep-teal mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To be Australia's leading telepsychiatry platform, transforming mental health care 
                delivery through innovation, compassion, and clinical excellence, while fostering 
                a society where mental wellness is prioritized and accessible to all.
              </p>
              <div className="bg-white/70 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-deep-teal mb-4">Our Values</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-gray-700">Compassion & Empathy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-gray-700">Clinical Excellence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-gray-700">Cultural Sensitivity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-gray-700">Innovation & Accessibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Meet Our Expert Psychiatrists
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our team of highly qualified Consultant Psychiatrists brings decades of experience 
              and genuine care to every consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dr. Anuradha Ellepola */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-rose-400 to-rose-600 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-teal mb-2">Dr. Anuradha Ellepola</h3>
                <p className="text-rose-600 font-semibold mb-4">Consultant Psychiatrist</p>
                <div className="flex justify-center space-x-2 mb-4">
                  <span className="bg-muted-rose px-3 py-1 rounded-full text-sm font-medium text-deep-teal">MBBS</span>
                  <span className="bg-muted-rose px-3 py-1 rounded-full text-sm font-medium text-deep-teal">MD Psychiatry</span>
                  <span className="bg-muted-rose px-3 py-1 rounded-full text-sm font-medium text-deep-teal">FRANZCP</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-deep-teal mb-3 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-rose-500" />
                    Expertise & Specializations
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Depression and Mood Disorders</li>
                    <li>• Anxiety and Panic Disorders</li>
                    <li>• ADHD Assessment and Management</li>
                    <li>• Women's Mental Health</li>
                    <li>• Geriatric Psychiatry</li>
                    <li>• Cross-cultural Psychiatry</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-deep-teal mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-rose-500" />
                    Professional Background
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    With over 15 years of clinical experience, Dr. Ellepola brings expertise in treating 
                    complex mental health conditions. She is particularly passionate about providing 
                    culturally sensitive care and has extensive experience working with diverse communities 
                    across Australia and internationally.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-deep-teal mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-pale-aqua px-3 py-1 rounded-full text-sm text-deep-teal">English</span>
                    <span className="bg-pale-aqua px-3 py-1 rounded-full text-sm text-deep-teal">Sinhala</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Jayani Wickrematunga */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-deep-teal to-teal-600 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-teal mb-2">Dr. Jayani Wickrematunga</h3>
                <p className="text-rose-600 font-semibold mb-4">Consultant Psychiatrist</p>
                <div className="flex justify-center space-x-2 mb-4">
                  <span className="bg-muted-rose px-3 py-1 rounded-full text-sm font-medium text-deep-teal">MBBS</span>
                  <span className="bg-muted-rose px-3 py-1 rounded-full text-sm font-medium text-deep-teal">MD Psychiatry</span>
                  <span className="bg-muted-rose px-3 py-1 rounded-full text-sm font-medium text-deep-teal">FRANZCP</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-deep-teal mb-3 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-rose-500" />
                    Expertise & Specializations
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Trauma and PTSD Treatment</li>
                    <li>• Bipolar Disorder Management</li>
                    <li>• Psychotic Disorders</li>
                    <li>• Addiction Psychiatry</li>
                    <li>• Personality Disorders</li>
                    <li>• Crisis Intervention</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-deep-teal mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-rose-500" />
                    Professional Background
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Wickrematunga has dedicated her career to treating complex psychiatric conditions 
                    with a special focus on trauma-informed care. Her compassionate approach and expertise 
                    in EMDR and DBT have helped hundreds of patients achieve lasting recovery and improved 
                    quality of life.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-deep-teal mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-pale-aqua px-3 py-1 rounded-full text-sm text-deep-teal">English</span>
                    <span className="bg-pale-aqua px-3 py-1 rounded-full text-sm text-deep-teal">Sinhala</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Our Treatment Approach
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe in holistic, evidence-based care that treats the whole person, 
              not just the symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Patient-Centered Care',
                description: 'Every treatment plan is tailored to your unique needs, preferences, and cultural background.',
                color: 'from-rose-400 to-rose-600'
              },
              {
                icon: BookOpen,
                title: 'Evidence-Based Treatment',
                description: 'We use the latest research and proven therapeutic methods to ensure the best outcomes.',
                color: 'from-blue-400 to-blue-600'
              },
              {
                icon: Globe,
                title: 'Cultural Sensitivity',
                description: 'Our multilingual approach ensures culturally appropriate care for diverse communities.',
                color: 'from-green-400 to-green-600'
              }
            ].map((approach, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${approach.color} p-4 rounded-full w-20 h-20 mx-auto mb-6`}>
                  <approach.icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-teal mb-4">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-deep-teal to-teal-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Patients Helped' },
                { number: '98%', label: 'Satisfaction Rate' },
                { number: '15+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;