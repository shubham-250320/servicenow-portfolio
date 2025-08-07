'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

const handleResumeDownload = () => {
  const resumeUrl = '/Resume/Shubham_Soni_ServiceNow_AI_ML_Engineer_3.6YOE.pdf';
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Shubham_Soni_ServiceNow_AI_ML_Engineer_3.6YOE.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const HeroSection = () => {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Use useRef to avoid re-creating the array on each render
  const headlinesRef = useRef([
    "ServiceNow AI Implementation Architect",
    "Transforming Enterprise ITSM with AI/ML",
    "Proven 30% Performance Gains at Scale"
  ]);

  const metrics = [
    { label: "Incident Resolution Improvement", value: 30, suffix: "%" },
    { label: "Virtual Agent Accuracy", value: 80, suffix: "%" },
    { label: "L1 Support Automation", value: 40, suffix: "%" },
    { label: "Users Supported", value: 1000, suffix: "+" },
    { label: "Years Experience", value: 3.6, suffix: "Y" }
  ];

  const techStack = [
    "ServiceNow Platform", "AI/ML", "Predictive Intelligence",
    "Virtual Agent", "JavaScript", "React", "Integration Hub"
  ];

  // Typing effect configuration
  const TYPING_SPEED = 50;
  const DELETE_SPEED = 30;
  const PAUSE_DURATION = 1000;
  const DELETE_DELAY = 1000;

  // Optimized typing effect with proper cleanup
  const typeWriter = useCallback(() => {
    const headlines = headlinesRef.current;
    const currentHeadline = headlines[currentHeadlineIndex];

    if (!isDeleting && !isPaused) {
      // Typing forward
      if (typedText.length < currentHeadline.length) {
        const nextChar = currentHeadline.charAt(typedText.length);
        setTypedText(prev => prev + nextChar);
      } else {
        // Finished typing current headline
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, PAUSE_DURATION);
      }
    } else if (isDeleting && !isPaused) {
      // Deleting backward
      if (typedText.length > 0) {
        setTypedText(prev => prev.slice(0, -1));
      } else {
        // Finished deleting, move to next headline
        setIsDeleting(false);
        setCurrentHeadlineIndex(prev => (prev + 1) % headlines.length);
      }
    }
  }, [currentHeadlineIndex, typedText, isDeleting, isPaused]);

  // Effect to handle the typing animation
  useEffect(() => {
    if (isPaused) return;

    const speed = isDeleting ? DELETE_SPEED : TYPING_SPEED;
    const timer = setTimeout(typeWriter, speed);

    return () => clearTimeout(timer);
  }, [typeWriter, isDeleting, isPaused]);

  // Animation variants for stagger effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    // <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
    <section id="hero"
  className="min-h-screen relative overflow-hidden"
  style={{ backgroundColor: '#032d42' }}>
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center min-h-screen"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  Shubham Soni
                </span>
              </motion.h1>

              {/* Optimized Typing Animation Container */}
              <div className="h-20 lg:h-24 flex items-start">
                <h2 className="text-2xl lg:text-3xl text-blue-200 font-medium leading-tight">
                  <span className="inline-block min-h-[1.2em]">
                    {typedText}
                    <span className="animate-pulse text-blue-300 font-normal">|</span>
                  </span>
                </h2>
              </div>

              <motion.p
                className="text-xl text-blue-100 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                Certified ServiceNow AI/ML Developer with 3.6+ years delivering enterprise-grade automation
                for Fortune 500 clients. Specialized in Virtual Agents, Predictive Intelligence, and AI-powered workflows.
              </motion.p>
            </motion.div>

            {/* Enhanced Metrics Dashboard */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-2xl lg:text-3xl font-bold text-white group-hover:text-green-300 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  >
                    {metric.value}{metric.suffix}
                  </motion.div>
                  <div className="text-blue-200 text-sm font-medium mt-1 leading-tight">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack with Enhanced Animations */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Technology Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-lg rounded-full text-white text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.3)",
                      borderColor: "rgba(255, 255, 255, 0.4)"
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons with Enhanced Interactions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="button-bg"
                />
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleResumeDownload}
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links with Enhanced Hover Effects - UPDATED GITHUB URL */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                {
                  icon: Mail,
                  href: "mailto:shubham.soni1729@gmail.com",
                  label: "Email",
                  color: "hover:bg-red-500/20"
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/2shubhamsoni",
                  label: "LinkedIn",
                  color: "hover:bg-blue-500/20"
                },
                {
                  icon: Github,
                  href: "https://github.com/shubham-250320", // ✅ UPDATED WITH YOUR ACTUAL GITHUB URL
                  label: "GitHub",
                  color: "hover:bg-gray-500/20"
                }
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/10 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20 group ${color}`}
                  whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={24} className="group-hover:animate-pulse" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Professional Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Professional Photo - Enhanced Version */}
              <motion.div
                className="aspect-square bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl shadow-2xl overflow-hidden relative p-2 group"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-800">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Shubham Soni - Senior ServiceNow AI/ML Developer with 3.6+ years experience specializing in Virtual Agent optimization and Predictive Intelligence"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    quality={90}
                    className="rounded-2xl transition-all duration-300 group-hover:scale-105"
                    onLoad={(e) => {
                      // Hide loading placeholder when image loads successfully
                      const placeholder = e.target.parentElement?.querySelector('.loading-placeholder');
                      if (placeholder) placeholder.style.opacity = '0';
                    }}
                    onError={(e) => {
                      // Keep placeholder visible if image fails to load
                      console.log('Profile photo failed to load from /profile-photo.jpg');
                      e.target.style.display = 'none';
                    }}
                  />

                  {/* Enhanced Loading Placeholder */}
                  <div className="loading-placeholder absolute inset-0 bg-gray-800 flex items-center justify-center rounded-2xl transition-opacity duration-300">
                    <div className="text-center text-white opacity-60">
                      <motion.div
                        className="text-6xl mb-4"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      >
                        👨‍💻
                      </motion.div>
                      <div className="text-sm font-medium">Shubham Soni</div>
                      <div className="text-xs opacity-75">ServiceNow AI/ML Developer</div>
                    </div>
                  </div>

                  {/* Professional Info Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 text-white">
                      <motion.div
                        className="text-sm font-semibold"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        Shubham Soni
                      </motion.div>
                      <motion.div
                        className="text-xs opacity-90"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Senior ServiceNow AI/ML Developer
                      </motion.div>
                      <motion.div
                        className="text-xs opacity-75 mt-1"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Virtual Agent • Predictive Intelligence • 80% VA Accuracy
                      </motion.div>
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Achievement Badges */}
              {/* Enhanced Clickable Innovation Award Badge */}
              <motion.button
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-green-500 text-white p-3 rounded-xl shadow-lg backdrop-blur-sm border border-white/20 cursor-pointer hover:from-green-500 hover:to-green-600 hover:shadow-xl transition-all duration-300 group"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open('https://drive.google.com/file/d/18xkpQyo1-5e92YDdmO6FhiuR8CqFTC2j/view?usp=sharing', '_blank', 'noopener,noreferrer');
                  console.log('Innovation Award certificate opened');
                }}
                aria-label="View Innovation Award Certificate - Opens in new tab"
              >
                <span className="flex items-center gap-2">
                  <span className="group-hover:animate-bounce">🏆</span>
                  <span className="text-sm font-semibold whitespace-nowrap">Innovation Award</span>
                </span>

                {/* External Link Indicator */}
                <span className="absolute -top-1 -right-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  ↗️
                </span>
              </motion.button>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg backdrop-blur-sm border border-white/20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                ⚡ 80% VA Accuracy
              </motion.div>
            </div>

          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown size={32} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
