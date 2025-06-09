import React from 'react';
import { Brain, Heart, Users, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Depression Treatment',
      icon: Heart,
      description: 'Comprehensive treatment for major depressive disorder, persistent depressive disorder, and seasonal affective disorder.',
      treatments: [
        'Cognitive Behavioral Therapy (CBT)',
        'Interpersonal Therapy (IPT)',
        'Antidepressant medication management',
        'Mindfulness-based interventions',
        'Lifestyle counseling'
      ],
      duration: '45-60 minutes',
      frequency: 'Weekly initially, then bi-weekly',
      color: 'from-rose-400 to-rose-600'
    },
    {
      title: 'Anxiety Disorders',
      icon: Brain,
      description: 'Treatment for generalized anxiety disorder, panic disorder, social anxiety, and specific phobias.',
      treatments: [
        'Exposure and Response Prevention',
        'Cognitive restructuring',
        'Relaxation training',
        'Panic management techniques',
        'Anti-anxiety medications'
      ],
      duration: '45-60 minutes',
      frequency: 'Weekly to bi-weekly',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'ADHD Assessment & Treatment',
      icon: Users,
      description: 'Comprehensive ADHD evaluation and ongoing management for adults and older adults.',
      treatments: [
        'Detailed diagnostic assessment',
        'Stimulant and non-stimulant medications',
        'Behavioral interventions',
        'Executive function coaching',
        'Workplace accommodations guidance'
      ],
      duration: '90 minutes (initial), 30 minutes (follow-up)',
      frequency: 'Monthly to quarterly',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Trauma & PTSD',
      icon: Shield,
      description: 'Specialized trauma-informed care for post-traumatic stress disorder and complex trauma.',
      treatments: [
        'Eye Movement Desensitization and Reprocessing (EMDR)',
        'Trauma-focused CBT',
        'Dialectical Behavior Therapy (DBT)',
        'Somatic experiencing',
        'Trauma-informed medication management'
      ],
      duration: '60-90 minutes',
      frequency: 'Weekly initially',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Bipolar Disorder',
      icon: Brain,
      description: 'Comprehensive management of bipolar I, bipolar II, and cyclothymic disorder.',
      treatments: [
        'Mood stabilizer management',
        'Psychoeducation about bipolar disorder',
        'Mood tracking and monitoring',
        'Relapse prevention planning',
        'Family therapy and support'
      ],
      duration: '45-60 minutes',
      frequency: 'Weekly to monthly',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      title: 'Psychotic Disorders',
      icon: Brain,
      description: 'Treatment for schizophrenia, schizoaffective disorder, and other psychotic conditions.',
      treatments: [
        'Antipsychotic medication management',
        'Cognitive behavioral therapy for psychosis',
        'Social skills training',
        'Family education and support',
        'Rehabilitation planning'
      ],
      duration: '45-60 minutes',
      frequency: 'Weekly to bi-weekly',
      color: 'from-teal-400 to-teal-600'
    },
    {
      title: 'Dementia & Cognitive Disorders',
      icon: Users,
      description: 'Specialized care for dementia, mild cognitive impairment, and age-related cognitive changes.',
      treatments: [
        'Comprehensive cognitive assessment',
        'Behavioral and psychological symptom management',
        'Caregiver support and education',
        'Medication optimization',
        'Safety and quality of life planning'
      ],
      duration: '60 minutes',
      frequency: 'Monthly to quarterly',
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Crisis Intervention',
      icon: Clock,
      description: 'Immediate support for mental health crises and emergency situations.',
      treatments: [
        'Crisis assessment and stabilization',
        'Safety planning',
        'Emergency medication management',
        'Referral to appropriate care levels',
        '24/7 crisis support coordination'
      ],
      duration: '30-90 minutes',
      frequency: 'As needed',
      color: 'from-red-400 to-red-600'
    }
  ];

  const therapyTypes = [
    {
      name: 'Cognitive Behavioral Therapy (CBT)',
      description: 'Evidence-based therapy focusing on changing negative thought patterns and behaviors.',
      suitableFor: ['Depression', 'Anxiety', 'PTSD', 'OCD']
    },
    {
      name: 'Eye Movement Desensitization and Reprocessing (EMDR)',
      description: 'Specialized therapy for trauma processing using bilateral stimulation.',
      suitableFor: ['PTSD', 'Trauma', 'Phobias', 'Anxiety']
    },
    {
      name: 'Dialectical Behavior Therapy (DBT)',
      description: 'Skills-based therapy for emotional regulation and interpersonal effectiveness.',
      suitableFor: ['Borderline PD', 'Self-harm', 'Emotional dysregulation']
    },
    {
      name: 'Interpersonal Therapy (IPT)',
      description: 'Focused therapy addressing relationship patterns and social functioning.',
      suitableFor: ['Depression', 'Grief', 'Relationship issues']
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-deep-teal mb-6 animate-slide-up">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Comprehensive mental health services tailored to your unique needs. We provide evidence-based 
            treatments with compassionate care, accessible through secure telehealth technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl flex-shrink-0`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-deep-teal mb-4">{service.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-deep-teal mb-3">Treatment Options:</h4>
                      <ul className="space-y-2">
                        {service.treatments.map((treatment, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{treatment}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-muted-rose/30 rounded-lg p-3">
                        <div className="text-sm font-medium text-deep-teal mb-1">Session Duration</div>
                        <div className="text-sm text-gray-700">{service.duration}</div>
                      </div>
                      <div className="bg-pale-aqua/50 rounded-lg p-3">
                        <div className="text-sm font-medium text-deep-teal mb-1">Frequency</div>
                        <div className="text-sm text-gray-700">{service.frequency}</div>
                      </div>
                    </div>

                    <Link
                      to="/book"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 hover:scale-105"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Evidence-Based Therapy Approaches
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We utilize proven therapeutic methods tailored to your specific condition and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {therapyTypes.map((therapy, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-deep-teal mb-4">{therapy.name}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{therapy.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-deep-teal mb-2">Suitable for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {therapy.suitableFor.map((condition, idx) => (
                      <span
                        key={idx}
                        className="bg-muted-rose px-3 py-1 rounded-full text-sm text-deep-teal"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-700">
              Simple steps to start your mental health journey with TeleHeal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Book Consultation',
                description: 'Schedule your initial consultation online at your convenience.',
                icon: Clock
              },
              {
                step: '02',
                title: 'Initial Assessment',
                description: 'Comprehensive evaluation of your mental health needs and goals.',
                icon: Users
              },
              {
                step: '03',
                title: 'Treatment Plan',
                description: 'Personalized treatment plan developed collaboratively with you.',
                icon: Brain
              },
              {
                step: '04',
                title: 'Ongoing Care',
                description: 'Regular sessions and continuous support for your mental wellness.',
                icon: Heart
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                  {item.step}
                </div>
                <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <item.icon className="h-8 w-8 text-deep-teal mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-deep-teal mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-deep-teal to-teal-600 rounded-3xl p-12 shadow-2xl text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards better mental health with our expert psychiatric care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="bg-white text-deep-teal px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-deep-teal transition-all duration-300 hover:scale-105 text-center"
              >
                Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;