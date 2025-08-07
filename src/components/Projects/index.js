'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Filter, Brain, Zap, Users } from 'lucide-react';
// import { projects, getFeaturedProjects, getProjectsByCategory } from '../../data/projects';
import { projects, getFeaturedProjects, getProjectsByCategory } from '../../data/projects';


const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Use imported data
  const allProjects = projects;
  const featuredProjects = getFeaturedProjects();

  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'ai-ml', label: 'AI/ML', icon: Brain },
    { id: 'integration', label: 'Integration', icon: Zap },
    { id: 'high', label: 'High Complexity', icon: Users }
  ];

  const filteredProjects = allProjects.filter(project => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'high') return project.complexity === 'high';
    return project.category === selectedFilter;
  });

  // Icon component mapping
  const getIconComponent = (iconName) => {
    const icons = {
      Brain: Brain,
      Zap: Zap,
      Users: Users
    };
    return icons[iconName] || Brain;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise ServiceNow implementations with proven business impact and technical excellence
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Spotlight Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => {
              const IconComponent = getIconComponent(project.icon);
              return (
                <motion.div
                  key={project.id}
                  className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-green-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <IconComponent size={48} className="mx-auto mb-4" />
                        <h4 className="text-lg font-semibold">AI/ML Innovation</h4>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-lg text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(project.results).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <filter.icon size={20} />
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const IconComponent = getIconComponent(project.icon);
              return (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  layout
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <IconComponent size={48} className="mx-auto mb-2" />
                        <div className="text-sm">Project Preview</div>
                      </div>
                    </div>
                    
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-white text-xs font-semibold rounded-full ${
                        project.complexity === 'high' ? 'bg-red-500' : 
                        project.complexity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}>
                        {project.complexity} complexity
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                          +{project.techStack.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        Learn More →
                      </motion.button>
                      
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                          >
                            <ExternalLink size={16} />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Github size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                      <p className="text-gray-600">{selectedProject.fullDescription}</p>
                    </div>
                    <motion.button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      ✕
                    </motion.button>
                  </div>

                  {/* Challenge, Solution, Impact */}
                  <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h4 className="font-bold text-red-800 mb-3">Challenge</h4>
                      <p className="text-red-700 text-sm">{selectedProject.challenge}</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-blue-800 mb-3">Solution</h4>
                      <p className="text-blue-700 text-sm">{selectedProject.solution}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h4 className="font-bold text-green-800 mb-3">Business Impact</h4>
                      <p className="text-green-700 text-sm">{selectedProject.impact}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Key Results</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(selectedProject.results).map(([key, value], index) => (
                        <motion.div 
                          key={index} 
                          className="bg-gray-50 p-4 rounded-xl text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="text-2xl font-bold text-blue-600 mb-2">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics (if available) */}
                  {selectedProject.metrics && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Performance Metrics</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {selectedProject.metrics.map((metric, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-xl text-center">
                            <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs text-gray-500">Before</span>
                              <span className="text-sm font-semibold text-gray-700">{metric.before}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-gray-500">After</span>
                              <span className="text-sm font-semibold text-green-600">{metric.after}</span>
                            </div>
                            <div className="text-lg font-bold text-blue-600">{metric.improvement}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Code Snippets (if available) */}
                  {selectedProject.codeSnippets && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Technical Implementation</h4>
                      {selectedProject.codeSnippets.map((snippet, index) => (
                        <div key={index} className="mb-6">
                          <h5 className="font-semibold text-gray-800 mb-3">{snippet.title}</h5>
                          <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                            <pre className="text-green-400 text-sm">
                              <code>{snippet.code}</code>
                            </pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {selectedProject.liveUrl && (
                      <motion.a
                        href={selectedProject.liveUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink size={20} />
                        View Implementation
                      </motion.a>
                    )}
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github size={20} />
                        View Documentation
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
