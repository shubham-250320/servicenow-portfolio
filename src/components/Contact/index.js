'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    projectType: 'consultation'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "shubham.soni1729@gmail.com",
      description: "Response within 24 hours",
      href: "mailto:shubham.soni1729@gmail.com",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/2shubhamsoni",
      description: "Professional networking",
      href: "https://linkedin.com/in/2shubhamsoni",
      primary: false
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-6203789864",
      description: "Available during business hours",
      href: "tel:+916203789864",
      primary: false
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, Karnataka",
      description: "Open to remote/hybrid opportunities",
      href: "#",
      primary: false
    }
  ];

  const projectTypes = [
    { id: 'consultation', label: 'Technical Consultation', description: 'ServiceNow architecture guidance' },
    { id: 'implementation', label: 'Implementation Project', description: 'Full-scale ServiceNow deployment' },
    { id: 'optimization', label: 'Performance Optimization', description: 'Existing system improvements' },
    { id: 'interview', label: 'Interview Opportunity', description: 'Senior developer position' },
    { id: 'collaboration', label: 'Collaboration', description: 'Partnership or knowledge sharing' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
        projectType: 'consultation'
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Connect</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Ready to discuss your ServiceNow AI/ML initiatives? I&apos;m available for senior developer roles, 
            technical consultations, and strategic implementations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                      method.primary 
                        ? 'bg-gradient-to-r from-blue-500/20 to-green-500/20 hover:from-blue-500/30 hover:to-green-500/30' 
                        : 'hover:bg-white/10'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      method.primary 
                        ? 'bg-gradient-to-br from-blue-500 to-green-500' 
                        : 'bg-white/20'
                    }`}>
                      <method.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{method.label}</h4>
                      <p className="text-blue-200 text-sm mb-1">{method.value}</p>
                      <p className="text-blue-300 text-xs">{method.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">₹40-50L</div>
                  <div className="text-blue-200 text-xs">Target Salary</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">24hrs</div>
                  <div className="text-blue-200 text-xs">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">3.6+</div>
                  <div className="text-blue-200 text-xs">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">1000+</div>
                  <div className="text-blue-200 text-xs">Users Supported</div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Currently Available</h3>
              </div>
              <p className="text-green-200 text-sm mb-4">
                Open to senior ServiceNow developer opportunities and consulting engagements
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-green-200">
                  <span>Immediate Start:</span>
                  <span className="text-white font-semibold">Available</span>
                </div>
                <div className="flex justify-between text-green-200">
                  <span>Notice Period:</span>
                  <span className="text-white font-semibold">Negotiable</span>
                </div>
                <div className="flex justify-between text-green-200">
                  <span>Work Preference:</span>
                  <span className="text-white font-semibold">Remote/Hybrid</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">Your Role</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="e.g., Hiring Manager, CTO"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">Project Type</label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {projectTypes.map((type) => (
                      <motion.label
                        key={type.id}
                        className={`flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          formData.projectType === type.id
                            ? 'border-blue-400 bg-blue-500/20'
                            : 'border-white/30 hover:border-white/50 hover:bg-white/5'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={type.id}
                          checked={formData.projectType === type.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-white font-medium text-sm mb-1">{type.label}</span>
                        <span className="text-blue-300 text-xs">{type.description}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 resize-none"
                    placeholder="Tell me about your ServiceNow needs, project requirements, or role details..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg hover:scale-[1.02]'
                  }`}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent Successfully!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-blue-200 text-sm text-center">
                  Prefer a direct conversation?{' '}
                  <motion.a
                    href="mailto:shubham.soni1729@gmail.com"
                    className="text-blue-400 hover:text-blue-300 font-medium underline decoration-blue-400/50 hover:decoration-blue-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Email me directly
                  </motion.a>
                  {' '}or connect on{' '}
                  <motion.a
                    href="https://linkedin.com/in/2shubhamsoni"
                    className="text-green-400 hover:text-green-300 font-medium underline decoration-green-400/50 hover:decoration-green-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    LinkedIn
                  </motion.a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
