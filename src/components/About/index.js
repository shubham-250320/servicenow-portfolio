'use client';
import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import { Award, Target, Heart, Code, Users, TrendingUp, Calendar, MapPin, Mail, Download, Check, AlertCircle, Loader } from 'lucide-react';

const AboutSection = () => {
  const [downloadState, setDownloadState] = useState('idle'); // idle, downloading, success, error

  // Professional Resume Download Handler
  const handleResumeDownload = useCallback(async () => {
    try {
      setDownloadState('downloading');

      // Your resume file path based on provided location
      const resumeUrl = '/Resume/Shubham_Soni_ServiceNow_AI_ML_Engineer_3.6YOE.pdf';
      const fileName = 'Shubham_Soni_ServiceNow_AI_ML_Engineer_3.6YOE.pdf';

      // Check if file exists first
      const response = await fetch(resumeUrl, { method: 'HEAD' });

      if (!response.ok) {
        throw new Error('Resume file not found');
      }

      // Create download link
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = fileName;
      link.target = '_blank'; // Fallback to open in new tab

      // Temporarily add to DOM and trigger click
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Success state
      setDownloadState('success');

      // Optional: Analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'resume_download', {
          event_category: 'engagement',
          event_label: 'about_section'
        });
      }

      // Reset state after 2 seconds
      setTimeout(() => setDownloadState('idle'), 2000);

    } catch (error) {
      console.error('Resume download failed:', error);
      setDownloadState('error');

      // Show user-friendly error and reset state
      setTimeout(() => {
        setDownloadState('idle');
        // Fallback: Try to open resume link or contact info
        alert('Resume download temporarily unavailable. Please contact me directly at shubham.soni1729@gmail.com');
      }, 2000);
    }
  }, []);

  // Get button content based on download state
  const getDownloadButtonContent = () => {
    switch (downloadState) {
      case 'downloading':
        return (
          <>
            <Loader size={20} className="animate-spin" />
            Downloading...
          </>
        );
      case 'success':
        return (
          <>
            <Check size={20} className="text-green-500" />
            Downloaded!
          </>
        );
      case 'error':
        return (
          <>
            <AlertCircle size={20} className="text-red-500" />
            Try Again
          </>
        );
      default:
        return (
          <>
            <Download size={20} />
            Download Resume
          </>
        );
    }
  };

  const values = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Committed to delivering high-quality, scalable solutions that exceed enterprise standards and drive measurable business value."
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      description: "Believe in empowering teams through knowledge sharing, mentorship, and fostering innovation across all stakeholder levels."
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "Stay ahead of ServiceNow platform evolution, integrating cutting-edge AI/ML capabilities with practical business applications."
    },
    {
      icon: Target,
      title: "Results-Driven Approach",
      description: "Focus on quantifiable outcomes - every implementation must deliver clear ROI and improve operational efficiency."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Innovation Award 2024",
      description: "Recognized by Executive Director & COO for pioneering AI/ML innovations delivering 40% L1 task reduction",
      organization: "Volkswagen Group",
      impact: "Enterprise-wide automation excellence"
    },
    {
      icon: Award,
      title: "ScaniaHack 2025 Winner",
      description: "Led cross-functional initiative developing production-ready Label Deviation Detection system",
      organization: "Scania",
      impact: "20% cost reduction achievement"
    },
    {
      icon: TrendingUp,
      title: "Enterprise Scale Impact",
      description: "Successfully deployed ServiceNow solutions supporting 1000+ users across multi-regional operations",
      organization: "Global Deployment",
      impact: "Multi-region success story"
    }
  ];

  const journey = [
    {
      period: "2021-2022",
      title: "ServiceNow Foundation",
      description: "Built strong platform fundamentals with CAD, CSA certifications and first enterprise implementations.",
      achievements: ["Platform mastery", "Enterprise deployment basics", "ITIL process understanding"]
    },
    {
      period: "2022-2024",
      title: "Enterprise ITSM Specialization",
      description: "Advanced to Senior Systems Associate at Infosys, specializing in large-scale ITSM implementations.",
      achievements: ["5,000+ user deployments", "25% incident backlog reduction", "Team leadership experience"]
    },
    {
      period: "2024-Present",
      title: "AI/ML Innovation Leadership",
      description: "Leading AI-powered automation initiatives at Volkswagen Group with cutting-edge Virtual Agent and Predictive Intelligence solutions.",
      achievements: ["80% VA accuracy", "40% L1 deflection", "ChatGPT integration pioneer", "1000+ user impact"]
    },
    {
      period: "2025 Vision",
      title: "Senior Technical Leadership Transition",
      description: "Advancing to senior developer/technical consultant roles with expanded AI/ML expertise and enterprise architecture capabilities.",
      achievements: [
        "Advanced ServiceNow AI/ML certifications",
        "Enterprise solution architecture expertise",
        "Technical team leadership and mentoring",
        "Strategic platform consulting excellence"
      ]
    }
  ];


  const personalInterests = [
    { icon: "🚀", title: "Emerging AI/ML Technologies", description: "Exploring latest ServiceNow AI capabilities" },
    { icon: "📚", title: "Technical Writing", description: "Knowledge sharing and documentation" },
    { icon: "🎯", title: "ServiceNow Community", description: "Active community contributions" },
    { icon: "💡", title: "Innovation & Optimization", description: "Process improvement initiatives" },
    { icon: "🌐", title: "Enterprise Architecture", description: "Scalable system design patterns" },
    { icon: "🤝", title: "Mentoring", description: "Developing junior developers" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate ServiceNow AI/ML specialist driving digital transformation through innovative enterprise solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Professional Story */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Professional Journey</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                    🎯 Foundation & Discovery
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    My journey began with a strong foundation in Computer Applications, where I discovered the power of
                    enterprise platforms. The transition to ServiceNow opened up a world of possibilities in business
                    process automation and AI-powered solutions that could transform how organizations operate.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                    🚀 Growth & Specialization
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    At Infosys, I evolved from platform basics to specialized ITSM implementations. This period was crucial
                    in developing my understanding of enterprise-scale challenges and the importance of scalable,
                    maintainable solutions. I led initiatives that reduced incident backlogs by 25% for 5,000+ users.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                    ⚡ AI/ML Innovation
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Joining Volkswagen Group marked my transition into AI/ML specialization. Here, I pioneered Virtual Agent
                    optimization, achieving 80% accuracy improvements and 40% L1 deflection. This experience taught me that
                    true innovation comes from combining technical excellence with deep business understanding.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                    🎖️ Recognition & Impact
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Recognition through innovation awards and hackathon victories validated my approach of focusing on
                    measurable business outcomes. These achievements reflect not just technical skills, but the ability
                    to translate complex AI/ML concepts into practical solutions that drive real business value.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                    🔮 Vision & Future Goals
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    I envision a future where AI-powered ITSM becomes the standard for enterprise operations. My goal
                    is to continue pushing the boundaries of what&apos;s possible with ServiceNow AI/ML capabilities while
                    mentoring the next generation of developers. I&apos;m seeking senior roles where I can architect
                    transformative solutions at scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values & Approach</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Career Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Evolution</h3>
              <div className="space-y-8">
                {journey.map((phase, index) => (
                  <motion.div
                    key={phase.period}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{phase.period.split('-')[0]}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-gray-900">{phase.title}</h4>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                            {phase.period}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{phase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.achievements.map((achievement, i) => (
                            <span key={i} className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              ✓ {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className="border-l-4 border-blue-500 pl-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <achievement.icon size={20} className="text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
                        <span className="text-xs text-blue-600 font-medium">{achievement.organization}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                    <span className="text-xs text-green-600 font-medium">💡 {achievement.impact}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Interests</h3>
              <div className="space-y-3">
                {personalInterests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-lg">{interest.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{interest.title}</h4>
                      <p className="text-gray-600 text-xs">{interest.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current Status */}

            <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Professional Status</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Open to Senior Opportunities</span>
                  </div>
                  <p className="text-blue-100 text-sm">
                    Actively seeking Senior ServiceNow Developer and Technical Consultant positions
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1" />
                  <div>
                    <span className="font-semibold block">Location Flexibility</span>
                    <p className="text-blue-100 text-sm">Bangalore, Karnataka (Remote/Hybrid globally)</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Calendar size={16} className="mt-1" />
                  <div>
                    <span className="font-semibold block">Availability</span>
                    <p className="text-blue-100 text-sm">Immediate start with flexible notice period</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Mail size={16} className="mt-1" />
                  <div>
                    <span className="font-semibold block">Professional Contact</span>
                    <p className="text-blue-100 text-sm">shubham.soni1729@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Call to Action with Working Download */}
        <motion.div
          className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Drive Your ServiceNow AI Transformation?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how my expertise in ServiceNow AI/ML can help accelerate your digital transformation initiatives
            and deliver measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Consultation
            </motion.button>

            {/* Enhanced Download Resume Button with Working Functionality */}
            <motion.button
              className={`px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px] ${downloadState === 'downloading' ? 'opacity-75 cursor-not-allowed' : ''
                } ${downloadState === 'success' ? 'border-green-300 bg-green-50 text-green-700' : ''
                } ${downloadState === 'error' ? 'border-red-300 bg-red-50 text-red-700' : ''
                }`}
              whileHover={downloadState === 'idle' ? { scale: 1.05 } : {}}
              whileTap={downloadState === 'idle' ? { scale: 0.95 } : {}}
              onClick={handleResumeDownload}
              disabled={downloadState === 'downloading'}
              aria-label="Download Shubham Soni's ServiceNow AI/ML Resume PDF"
            >
              {getDownloadButtonContent()}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
