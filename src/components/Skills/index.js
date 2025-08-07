'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Zap, Users, Award } from 'lucide-react';
import {
  servicenowSkills,
  technicalSkills,
  businessSkills,
  certifications,
  getCompletedCertifications,
  getInProgressCertifications,
  getFeaturedCertifications,
  getCertificationStats
} from '../../data/skills';


const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('servicenow');

  const tabs = [
    { id: 'servicenow', label: 'ServiceNow Expertise', icon: Database },
    { id: 'technical', label: 'Technical Stack', icon: Code },
    { id: 'business', label: 'Business Skills', icon: Users },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  // Icon component mapping for business skills
  const getIconComponent = (iconName) => {
    const icons = {
      Code: Code,
      Users: Users,
      Zap: Zap,
      Brain: Brain
    };
    return icons[iconName] || Code;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive ServiceNow AI/ML expertise with proven enterprise implementations
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab.id
                ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon size={20} />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'servicenow' && (
            <div className="grid lg:grid-cols-2 gap-12">
              {servicenowSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{skill.name}</h3>
                    <span className="text-2xl font-bold text-blue-600">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>

                  <p className="text-gray-600 mb-4">{skill.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Experience:</span>
                      <span className="text-gray-700 font-medium">{skill.experience}</span>
                    </div>
                    {skill.certifications && skill.certifications.length > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Certifications:</span>
                        <span className="text-blue-600 font-medium">{skill.certifications.join(', ')}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <div className="space-y-1">
                      {skill.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                      <p className="text-sm text-gray-500">{skill.projects}</p>
                      <p className="text-xs text-blue-600 font-medium">{skill.category} • {skill.experience}</p>
                    </div>
                    <span className="text-xl font-bold text-blue-600">{skill.proficiency}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>

                  <p className="text-gray-600 text-sm mb-3">{skill.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {skill.keyProjects.map((project, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        {project}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'business' && (
            <div className="grid md:grid-cols-2 gap-8">
              {businessSkills.map((skill, index) => {
                const IconComponent = getIconComponent(skill.icon);
                return (
                  <motion.div
                    key={skill.id}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full ${i < Math.floor(skill.rating) ? 'bg-yellow-400' :
                                i < skill.rating ? 'bg-gradient-to-r from-yellow-400 to-gray-300' : 'bg-gray-300'
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{skill.description}</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Examples:</h4>
                        <div className="space-y-2">
                          {skill.examples.map((example, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">{example}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Impact:</span>
                          <span className="text-green-600 font-medium">{skill.impact}</span>
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                          <span className="text-gray-500">Experience:</span>
                          <span className="text-blue-600 font-medium">{skill.experience}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}


          {activeTab === 'certifications' && (
            <div className="space-y-8">
              {/* Certification Stats Header */}
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-lg p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">{getCompletedCertifications().length}</div>
                    <div className="text-blue-100 text-sm">Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{getInProgressCertifications().length}</div>
                    <div className="text-blue-100 text-sm">In Progress</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-blue-100 text-sm">Verified</div>
                  </div>
                  <div>
                    <motion.a
                      href="https://www.credly.com/users/shubham-soni.79915ddd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      🏆 View All Badges
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Certifications Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 relative ${cert.status === 'Completed'
                      ? 'border-green-200 bg-green-50'
                      : cert.status === 'In Progress'
                        ? 'border-blue-200 bg-blue-50'
                        : 'border-gray-200 bg-gray-50'
                      }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    {/* Featured Badge */}
                    {cert.featured && (
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                          ⭐ Featured
                        </div>
                      </div>
                    )}

                    {/* Status and Date Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cert.status === 'Completed'
                        ? 'bg-green-200 text-green-800'
                        : cert.status === 'In Progress'
                          ? 'bg-blue-200 text-blue-800'
                          : 'bg-gray-200 text-gray-800'
                        }`}>
                        {cert.status}
                      </span>
                      <span className="text-sm text-gray-600">{cert.date}</span>
                    </div>

                    {/* Certification Title */}
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-2">{cert.shortName || cert.name}</h4>
                    <p className="text-xs text-gray-500 mb-3">{cert.name}</p>

                    {/* Issuer and Credential Info */}
                    <div className="space-y-2 mb-4">
                      {cert.issuer && (
                        <div className="text-xs text-blue-600 font-medium">
                          📋 Issued by: {cert.issuer}
                        </div>
                      )}

                      {cert.credentialId && (
                        <div className="text-xs text-gray-500">
                          🆔 ID: {cert.credentialId}
                        </div>
                      )}

                      {cert.validUntil && cert.status === 'Completed' && (
                        <div className="text-xs text-green-600">
                          ⏰ Valid until: {cert.validUntil}
                        </div>
                      )}

                      {cert.expectedCompletion && (
                        <div className="text-xs text-blue-600">
                          📅 Expected: {cert.expectedCompletion}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-600 mb-4">{cert.description}</p>

                    {/* Skills Tags */}
                    <div className="space-y-2 mb-4">
                      <h5 className="text-xs font-semibold text-gray-700">Key Skills:</h5>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 4).map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-white text-gray-600 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="px-2 py-1 bg-gray-200 text-gray-500 text-xs rounded">
                            +{cert.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Badge and Verification Section */}
                    <div className="border-t pt-4 space-y-3">
                      {cert.badge && (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-yellow-700 font-medium">🏆 Digital Badge Available</span>
                        </div>
                      )}

                      {/* Credly Verification Link */}
                      {cert.credlyUrl && cert.verificationEnabled && (
                        <div className="space-y-2">
                          <motion.a
                            href={cert.credlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-all duration-200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            Verify on Credly
                          </motion.a>

                          {cert.credlyProfileUrl && (
                            <motion.a
                              href={cert.credlyProfileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-600 text-xs font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
                              whileHover={{ scale: 1.02 }}
                            >
                              👤 View Profile
                            </motion.a>
                          )}
                        </div>
                      )}

                      {/* Alternative for in-progress certifications */}
                      {cert.status !== 'Completed' && (
                        <div className="text-xs text-gray-500 italic text-center">
                          🔄 Badge will be available upon completion
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
