'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, Menu, X, ExternalLink, ArrowRight, Award, Target, Heart, Code, Users, TrendingUp, Brain, Zap, Filter, CheckCircle, Send, Calendar, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

// Import all component sections
import HeroSection from '../components/Hero';
import SkillsSection from '../components/Skills';
import ProjectsSection from '../components/Projects';
import AboutSection from '../components/About';
import ContactSection from '../components/Contact';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'skills', label: 'Expertise', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">SS</span>
            </div>
            <div className={`font-bold text-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Shubham Soni
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-all duration-200 relative ${
                  activeSection === item.id
                    ? scrolled 
                      ? 'text-blue-600' 
                      : 'text-blue-300'
                    : scrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white/80 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      scrolled ? 'bg-blue-600' : 'bg-blue-300'
                    }`}
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                scrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white/80 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              Resume
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Download size={16} />
                    Download Resume
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection('#contact')}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-medium"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail size={16} />
                    Contact Me
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">SS</span>
                  </div>
                  <span className="font-bold text-lg">Shubham Soni</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  ServiceNow AI/ML Developer specializing in enterprise automation and digital transformation.
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="mailto:shubham.soni1729@gmail.com"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail size={20} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/2shubhamsoni"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#skills" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">Expertise</a>
                  <a href="#projects" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">Projects</a>
                  <a href="#about" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">About</a>
                  <a href="#contact" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Expertise</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>ServiceNow AI/ML</div>
                  <div>Virtual Agent Development</div>
                  <div>Predictive Intelligence</div>
                  <div>Enterprise ITSM</div>
                  <div>Integration Hub</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Shubham Soni. All rights reserved. | Built with Next.js & Tailwind CSS</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
