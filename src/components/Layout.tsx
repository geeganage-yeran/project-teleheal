import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Logo from '../assets/logo.png'; 
import Logo2 from '../assets/logo2.png'; 


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Consultation', href: '/book' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-lavender via-cool-grey to-pale-aqua">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img src={Logo} alt="Logo" className="h-16" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive(item.href)
                      ? 'text-deep-teal bg-muted-rose/30 shadow-sm'
                      : 'text-gray-700 hover:text-deep-teal hover:bg-muted-rose/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Auth Links */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-deep-teal hover:text-rose-600 font-medium transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2 rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 hover:scale-105 shadow-md"
              >
                Register
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-deep-teal hover:bg-muted-rose/20 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-deep-teal bg-muted-rose/30'
                        : 'text-gray-700 hover:text-deep-teal hover:bg-muted-rose/20'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 text-deep-teal hover:text-rose-600 font-medium transition-colors duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="mx-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2 rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 text-center"
                  >
                    Register
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-280px)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-deep-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src={Logo2} alt="Logo" className="h-16" />
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Professional telepsychiatry services providing compassionate, evidence-based mental health care 
                accessible anywhere in Australia. Breaking geographical barriers through secure telehealth services.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-rose-400" />
                  <span className="text-sm">1800-TELEHEAL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-rose-400" />
                  <span className="text-sm">info@teleheal.com.au</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Depression Treatment</li>
                <li>Anxiety Management</li>
                <li>ADHD Assessment</li>
                <li>PTSD Therapy</li>
                <li>Bipolar Disorder</li>
                <li>Dementia Care</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 TeleHeal Tele Health. All rights reserved. | 
              <span className="text-rose-400"> Dr. Anuradha Ellepola & Dr. Jayani Wickrematunga</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              MBBS, MD Psychiatry, FRANZCP | Licensed Telepsychiatry Services in Australia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;