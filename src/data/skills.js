// src/data/skills.js

// ServiceNow Module Expertise
export const servicenowSkills = [
  {
    id: 1,
    name: 'ITSM Core',
    level: 95,
    description: 'Expert-level incident, problem, change, and service catalog management',
    experience: '3.6 years',
    projects: ['VW Group ITSM', 'Infosys Enterprise Platform', 'Multi-regional deployment'],
    certifications: ['CIS-ITSM', 'CSA'],
    achievements: ['25% incident backlog reduction', '5000+ user deployment', '98% SLA compliance']
  },
  {
    id: 2,
    name: 'Virtual Agent',
    level: 90,
    description: '80% accuracy improvements with advanced NLU training and conversation design',
    experience: '2 years',
    projects: ['Enterprise VA Optimization', 'ChatGPT Integration', 'Multi-language support'],
    certifications: ['CIS-VA (In Progress)'],
    achievements: ['80% NLU accuracy', '40% L1 deflection', '1000+ users supported']
  },
  {
    id: 3,
    name: 'Predictive Intelligence',
    level: 85,
    description: '30% MTTR reduction through AI models and automated classification',
    experience: '1.5 years',
    projects: ['MTTR Optimization', 'Automated Incident Routing', 'Performance Analytics'],
    certifications: ['CIS-AI (Planned)'],
    achievements: ['30% MTTR improvement', '95% SLA compliance', '87% classification accuracy']
  },
  {
    id: 4,
    name: 'AI Search',
    level: 80,
    description: 'ChatGPT integration for content enrichment and search optimization',
    experience: '1 year',
    projects: ['Knowledge Enrichment System', 'AI Search Optimization', 'Content Discovery'],
    certifications: [],
    achievements: ['30% search improvement', '500+ articles enriched', '92% accuracy rate']
  },
  {
    id: 5,
    name: 'Platform Development',
    level: 85,
    description: 'GlideScript, Business Rules, Client Scripts, and custom applications',
    experience: '3.6 years',
    projects: ['Custom Applications', 'Automation Scripts', 'Workflow Optimization'],
    certifications: ['CAD', 'CSA'],
    achievements: ['20+ automation scripts', 'Custom app development', 'Performance optimization']
  },
  {
    id: 6,
    name: 'Integration Hub',
    level: 75,
    description: 'REST/SOAP APIs, MID Server, ETL pipelines with external systems',
    experience: '2 years',
    projects: ['Snowflake Integration', 'Matillion ETL', 'Multi-system connectivity'],
    certifications: [],
    achievements: ['10GB+ data processing', '5min data latency', '99.8% accuracy']
  }
];

// Technical Stack Proficiency
export const technicalSkills = [
  {
    id: 1,
    name: 'JavaScript/GlideScript',
    proficiency: 90,
    category: 'Programming',
    experience: '3.6 years',
    projects: '20+ automation scripts',
    description: 'Advanced ServiceNow scripting and client-side development',
    keyProjects: ['Virtual Agent Scripts', 'Predictive Intelligence Models', 'Custom Workflows']
  },
  {
    id: 2,
    name: 'React/Frontend',
    proficiency: 70,
    category: 'Frontend',
    experience: '1 year',
    projects: 'Portfolio, dashboards',
    description: 'Modern React development with Next.js and component libraries',
    keyProjects: ['Professional Portfolio', 'Custom Dashboards', 'UI Components']
  },
  {
    id: 3,
    name: 'REST APIs',
    proficiency: 85,
    category: 'Integration',
    experience: '2.5 years',
    projects: 'Snowflake, Matillion, ChatGPT integration',
    description: 'API development, integration, and third-party service connectivity',
    keyProjects: ['ChatGPT Integration', 'ETL Pipeline APIs', 'ServiceNow REST APIs']
  },
  {
    id: 4,
    name: 'ServiceNow Studio',
    proficiency: 95,
    category: 'Platform',
    experience: '3.6 years',
    projects: 'Custom applications',
    description: 'Advanced ServiceNow development environment mastery',
    keyProjects: ['Custom App Development', 'Scoped Applications', 'Update Sets Management']
  },
  {
    id: 5,
    name: 'AI/ML Integration',
    proficiency: 80,
    category: 'AI/ML',
    experience: '1.5 years',
    projects: 'ChatGPT, NLU models',
    description: 'Machine learning model integration and AI-powered automation',
    keyProjects: ['NLU Training', 'Predictive Models', 'AI Search Enhancement']
  },
  {
    id: 6,
    name: 'Database Design',
    proficiency: 75,
    category: 'Database',
    experience: '2.5 years',
    projects: 'Performance optimization',
    description: 'ServiceNow table structure, queries, and performance tuning',
    keyProjects: ['Data Model Design', 'Query Optimization', 'Performance Analytics']
  }
];

// Business & Soft Skills
export const businessSkills = [
  {
    id: 1,
    icon: 'Code',
    name: 'System Architecture',
    rating: 4.5,
    description: 'Enterprise-scale design patterns and scalable solutions',
    examples: [
      'Multi-region CAB implementation across 5 countries',
      '1000+ user ServiceNow deployment',
      'Scalable AI/ML architecture design'
    ],
    impact: 'Led architecture decisions for enterprise deployments',
    experience: '3+ years'
  },
  {
    id: 2,
    icon: 'Users',
    name: 'Stakeholder Management',
    rating: 4.0,
    description: 'Cross-functional collaboration and requirement gathering',
    examples: [
      'VW Group executives and directors',
      'Global team coordination across time zones',
      'Client requirement analysis and solution design'
    ],
    impact: 'Successfully managed 20+ stakeholders across multiple projects',
    experience: '3+ years'
  },
  {
    id: 3,
    icon: 'Zap',
    name: 'Process Optimization',
    rating: 5.0,
    description: 'ITIL-aligned improvements and workflow automation',
    examples: [
      '40% L1 deflection through VA optimization',
      '25% incident backlog reduction',
      '30% MTTR improvement via AI automation'
    ],
    impact: 'Delivered $350K+ annual cost savings through optimization',
    experience: '3.6 years'
  },
  {
    id: 4,
    icon: 'Brain',
    name: 'Technical Leadership',
    rating: 4.0,
    description: 'Mentoring developers and driving innovation initiatives',
    examples: [
      'Led team of 3+ developers',
      'ScaniaHack 2025 winner and team leader',
      'Innovation award recipient for AI/ML implementations'
    ],
    impact: 'Mentored 5+ junior developers, led 2 major innovation projects',
    experience: '2+ years'
  }
];

// ServiceNow Certifications
export const certifications = [
  {
    id: 1,
    name: 'Certified Implementation Specialist - IT Service Management (CIS-ITSM)',
    status: 'Completed',
    date: '2024',
    badge: true,
    credentialId: 'CIS-ITSM-2024-001',
    description: 'Advanced ITSM implementation and best practices',
    skills: ['Incident Management', 'Problem Management', 'Change Management', 'Service Catalog']
  },
  {
    id: 2,
    name: 'Certified Application Developer (CAD)',
    status: 'Completed',
    date: '2023',
    badge: true,
    credentialId: 'CAD-2023-002',
    description: 'Platform development and custom application creation',
    skills: ['GlideScript', 'Business Rules', 'Client Scripts', 'Custom Applications']
  },
  {
    id: 3,
    name: 'ServiceNow System Administrator (CSA)',
    status: 'Completed',
    date: '2022',
    badge: true,
    credentialId: 'CSA-2022-003',
    description: 'Platform administration and configuration management',
    skills: ['User Management', 'Data Management', 'Notifications', 'Reporting']
  },
  {
    id: 4,
    name: 'Certified Implementation Specialist - Virtual Agent (CIS-VA)',
    status: 'In Progress',
    date: '2025',
    badge: false,
    expectedCompletion: 'Q2 2025',
    description: 'Advanced Virtual Agent development and NLU training',
    skills: ['Conversation Design', 'NLU Training', 'Intent Management', 'Integration']
  },
  {
    id: 5,
    name: 'Certified Implementation Specialist - Artificial Intelligence (CIS-AI)',
    status: 'Planned',
    date: '2025',
    badge: false,
    expectedCompletion: 'Q3 2025',
    description: 'AI/ML implementation and predictive intelligence',
    skills: ['Machine Learning', 'Predictive Intelligence', 'AI Search', 'Automation']
  }
];

// Career Timeline
export const careerTimeline = [
  {
    id: 1,
    period: '2021-2022',
    title: 'ServiceNow Foundation',
    description: 'Built strong platform fundamentals with CAD, CSA certifications and first enterprise implementations.',
    company: 'Learning & Certification',
    achievements: [
      'Platform mastery and core concepts',
      'First enterprise deployment experience',
      'ITIL process understanding',
      'Basic scripting and configuration skills'
    ],
    skills: ['ServiceNow Basics', 'ITIL', 'GlideScript', 'Administration'],
    impact: 'Established strong foundation for ServiceNow career'
  },
  {
    id: 2,
    period: '2022-2024',
    title: 'Enterprise ITSM Specialization',
    description: 'Advanced to Senior Systems Associate at Infosys, specializing in large-scale ITSM implementations.',
    company: 'Infosys Limited',
    role: 'Senior Systems Associate',
    achievements: [
      '5,000+ user ServiceNow deployments',
      '25% incident backlog reduction',
      'Team leadership and mentoring experience',
      'CIS-ITSM certification achievement'
    ],
    skills: ['ITSM Implementation', 'Team Leadership', 'Process Optimization', 'Enterprise Deployment'],
    impact: 'Led enterprise implementations serving thousands of users'
  },
  {
    id: 3,
    period: '2024-Present',
    title: 'AI/ML Innovation Leadership',
    description: 'Leading AI-powered automation initiatives at Volkswagen Group with cutting-edge Virtual Agent and Predictive Intelligence solutions.',
    company: 'Volkswagen Group',
    role: 'ServiceNow Developer (AI/ML)',
    achievements: [
      '80% Virtual Agent accuracy achievement',
      '40% L1 deflection through automation',
      'ChatGPT integration pioneer',
      'Innovation Award 2024 recipient',
      '1000+ user impact across multiple regions'
    ],
    skills: ['AI/ML Integration', 'Virtual Agent', 'Predictive Intelligence', 'Innovation Leadership'],
    impact: 'Pioneered AI-powered ServiceNow solutions with measurable business impact'
  },
  {
    id: 4,
    period: '2025 Vision',
    title: 'Senior Developer Transition',
    description: 'Targeting senior developer/technical consultant roles with expanded AI/ML expertise and architecture capabilities.',
    company: 'Target Companies',
    role: 'Senior ServiceNow Developer/Technical Consultant',
    achievements: [
      '₹40-50L target salary achievement',
      'CIS-VA certification completion',
      'Technical leadership portfolio',
      'Enterprise architecture expertise'
    ],
    skills: ['Technical Architecture', 'Senior Leadership', 'Consulting', 'Strategic Planning'],
    impact: 'Transition to senior technical leadership roles'
  }
];

// Professional Interests
export const professionalInterests = [
  {
    id: 1,
    icon: '🚀',
    title: 'Emerging AI/ML Technologies',
    description: 'Exploring latest ServiceNow AI capabilities and integration patterns',
    activities: ['Beta testing new AI features', 'Community discussions', 'Research papers'],
    relevance: 'Staying ahead of platform evolution'
  },
  {
    id: 2,
    icon: '📚',
    title: 'Technical Writing & Documentation',
    description: 'Knowledge sharing through blogs, guides, and documentation',
    activities: ['Technical blog posts', 'Implementation guides', 'Best practices documentation'],
    relevance: 'Contributing to ServiceNow community knowledge'
  },
  {
    id: 3,
    icon: '🎯',
    title: 'ServiceNow Community Contributions',
    description: 'Active participation in ServiceNow developer community',
    activities: ['Community forums', 'Knowledge sharing', 'Peer mentoring'],
    relevance: 'Building professional network and sharing expertise'
  },
  {
    id: 4,
    icon: '💡',
    title: 'Innovation & Process Optimization',
    description: 'Continuous improvement and innovative solution development',
    activities: ['Hackathon participation', 'Process improvement initiatives', 'Innovation workshops'],
    relevance: 'Driving business value through innovation'
  },
  {
    id: 5,
    icon: '🌐',
    title: 'Enterprise Architecture Patterns',
    description: 'Studying scalable system design and architecture patterns',
    activities: ['Architecture research', 'Design pattern studies', 'Scalability planning'],
    relevance: 'Preparing for senior architecture roles'
  },
  {
    id: 6,
    icon: '🤝',
    title: 'Mentoring & Team Development',
    description: 'Developing junior developers and sharing knowledge',
    activities: ['Junior developer mentoring', 'Training sessions', 'Knowledge transfer'],
    relevance: 'Building leadership skills for senior roles'
  }
];

// Utility functions for skills data
export const getSkillsByCategory = (category) => {
  return technicalSkills.filter(skill => skill.category === category);
};

export const getCompletedCertifications = () => {
  return certifications.filter(cert => cert.status === 'Completed');
};

export const getInProgressCertifications = () => {
  return certifications.filter(cert => cert.status === 'In Progress');
};

export const getPlannedCertifications = () => {
  return certifications.filter(cert => cert.status === 'Planned');
};

export const getTopSkills = (limit = 6) => {
  return servicenowSkills
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
};

export const getSkillCategories = () => {
  const categories = [...new Set(technicalSkills.map(skill => skill.category))];
  return categories.map(category => ({
    name: category,
    skills: getSkillsByCategory(category),
    count: getSkillsByCategory(category).length
  }));
};
