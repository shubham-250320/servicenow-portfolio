// src/data/skills.js

// ServiceNow Module Expertise
export const servicenowSkills = [
  {
    id: 1,
    name: 'ITSM Core',
    level: 95,
    description: 'Expertise in enterprise IT service management processes including incident, problem, change management and service catalog configuration.',
    experience: '3.6 years',
    projects: ['VW Group ITSM', 'Infosys Enterprise Platform', 'Multi-regional deployment'],
    certifications: ['CIS-ITSM', 'CSA', 'ITSM Professional Suite'],
    achievements: ['25% incident backlog reduction', '5000+ user deployment', '98% SLA compliance'],
  },
  {
    id: 2,
    name: 'Virtual Agent',
    level: 90,
    description: 'Advanced skills in Virtual Agent design, training NLU models, and multi-language chatbot implementation.',
    experience: '2 years',
    projects: ['Enterprise VA Optimization', 'ChatGPT Integration', 'Multi-language support'],
    certifications: ['CIS-VA (In Progress)'],
    achievements: ['80% NLU accuracy', '40% L1 deflection', '1000+ users supported'],
  },
  {
    id: 3,
    name: 'Predictive Intelligence',
    level: 85,
    description: 'Implementation of AI-powered incident classification, routing automation, and machine learning optimization.',
    experience: '1.5 years',
    projects: ['MTTR Optimization', 'Automated Incident Routing', 'Performance Analytics'],
    certifications: ['CIS-PA (In Progress)'],
    achievements: ['30% MTTR improvement', '95% SLA compliance', '87% classification accuracy'],
  },
  {
    id: 4,
    name: 'AI Search',
    level: 80,
    description: 'Expertise in integrating ChatGPT for knowledge enrichment and improving search capabilities.',
    experience: '1 year',
    projects: ['Knowledge Enrichment System', 'AI Search Optimization', 'Content Discovery'],
    certifications: [],
    achievements: ['30% search improvement', '500+ articles enriched', '92% accuracy rate'],
  },
  {
    id: 5,
    name: 'Platform Development',
    level: 85,
    description: 'Development of custom applications, scripting with GlideScript, and building scalable platform solutions.',
    experience: '3.6 years',
    projects: ['Custom Applications', 'Automation Scripts', 'Workflow Optimization'],
    certifications: ['CAD', 'CSA'],
    achievements: ['20+ automation scripts', 'Custom app development', 'Performance optimization'],
  },
  {
    id: 6,
    name: 'Integration & Automation',
    level: 75,
    description: 'Design and implementation of RESTful integrations, ETL pipelines, and process automation using Integration Hub.',
    experience: '2 years',
    projects: ['Snowflake Integration', 'Matillion ETL', 'Multi-system connectivity'],
    certifications: [],
    achievements: ['10GB+ data processed', '5-min data latency', '99.8% data accuracy'],
  },
];

// Technical Stack Proficiency
export const technicalSkills = [
  {
    id: 1,
    name: 'JavaScript / GlideScript',
    proficiency: 90,
    category: 'Programming',
    experience: '3.6 years',
    projects: '20+ automation workflows and scripts',
    description: 'Expertise in server-side and client-side scripting on ServiceNow platform using JavaScript dialects.',
    keyProjects: ['Virtual Agent scripts', 'Predictive Intelligence models', 'Custom workflows'],
  },
  {
    id: 2,
    name: 'React / Frontend',
    proficiency: 70,
    category: 'Frontend',
    experience: '1 year',
    projects: 'Portfolio website, dashboards',
    description: 'Building modern responsive frontends with React and Next.js for enterprise dashboards.',
    keyProjects: ['Portfolio site', 'Custom reporting dashboards', 'UI component libraries'],
  },
  {
    id: 3,
    name: 'REST API Development',
    proficiency: 85,
    category: 'Integration',
    experience: '2.5 years',
    projects: 'Integrated Snowflake, Matillion, ChatGPT',
    description: 'Creating and consuming REST APIs for seamless integrations across platforms.',
    keyProjects: ['ChatGPT integration', 'ETL tool integrations', 'Enterprise ServiceNow APIs'],
  },
  {
    id: 4,
    name: 'ServiceNow Studio',
    proficiency: 95,
    category: 'Platform',
    experience: '3.6 years',
    projects: 'Custom scoped applications',
    description: 'Proficient use of the ServiceNow Studio IDE and lifecycle tools.',
    keyProjects: ['Scoped apps', 'Update sets', 'Versioning and deployment'],
  },
  {
    id: 5,
    name: 'AI & ML Integration',
    proficiency: 80,
    category: 'AI/ML',
    experience: '1.5 years',
    projects: 'NLU training, predictive workflows',
    description: 'Building AI-powered workflows leveraging ServiceNow’s AI capabilities and third party tools.',
    keyProjects: ['NLU models', 'ChatGPT integration', 'Incident classification automation'],
  },
  {
    id: 6,
    name: 'Database Design & Performance',
    proficiency: 75,
    category: 'Database',
    experience: '2.5 years',
    projects: 'Optimization and schema design',
    description: 'Designing efficient data models and optimizing platform performance.',
    keyProjects: ['Custom table design', 'Query tuning', 'Reporting performance'],
  },
];

// Business & Soft Skills
export const businessSkills = [
  {
    id: 1,
    icon: 'Code',
    name: 'System Architecture',
    rating: 4.5,
    description: 'Designing scalable enterprise-grade ServiceNow solutions.',
    examples: ['Multi-region CAB implementation', 'Enterprise-scale deployments', 'AI/ML solution architecture'],
    impact: 'Enabled scalable platforms servicing thousands of users',
    experience: '3+ years',
  },
  {
    id: 2,
    icon: 'Users',
    name: 'Stakeholder Management',
    rating: 4.0,
    description: 'Cross-functional collaboration and requirement gathering.',
    examples: ['Engaging executive stakeholders', 'Global team coordination', 'Client workshops'],
    impact: 'Managed successfully over 20 stakeholder groups',
    experience: '3+ years',
  },
  {
    id: 3,
    icon: 'Zap',
    name: 'Process Optimization',
    rating: 5.0,
    description: 'Streamlining workflows and automating manual tasks.',
    examples: ['40% reduction in support tickets', 'Incident backlog reduction by 25%', 'Enhanced SLA compliance'],
    impact: 'Saved over $350K in operational costs',
    experience: '3.6 years',
  },
  {
    id: 4,
    icon: 'Brain',
    name: 'Technical Leadership',
    rating: 4.0,
    description: 'Mentoring developers and leading innovation projects.',
    examples: ['Led team of 3 developers', 'Hackathon winner', 'Knowledge sharing'],
    impact: 'Nurtured next-gen talent and drove technical excellence',
    experience: '2+ years',
  },
];

// Official Certifications with Credly Links and Descriptions
export const certifications = [
  {
    id: 1,
    name: 'ServiceNow Suite Certification - ITSM Professional',
    shortName: 'ITSM Professional Suite',
    status: 'Completed',
    date: '2025',
    badge: true,
    credentialId: 'ITSM-SUITE-2025',
    credlyUrl: 'https://www.credly.com/badges/087358bc-3dbe-421c-9318-68e724c1af89/public_url',
    credlyProfile: 'https://www.credly.com/users/shubham-soni.79915ddd',
    description: 'Comprehensive certification covering ITSM core and advanced modules including AI/ML, DevOps, Platform Analytics and Virtual Agent.',
    skills: [
      'Core ITSM Processes', 'DevOps Change Automation', 'Predictive Intelligence', 'Platform Analytics',
      'Virtual Agent & NLU', 'Performance Dashboarding', 'AI-driven Automation',
    ],
    issuer: 'ServiceNow',
    validUntil: '2026',
    verificationEnabled: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Certified Implementation Specialist - IT Service Management (CIS-ITSM)',
    shortName: 'CIS-ITSM',
    status: 'Completed',
    date: '2025',
    badge: true,
    credentialId: 'CIS-ITSM-2025',
    credlyUrl: 'https://www.credly.com/badges/ed6b2ea8-92a9-c246-bf9c-e70630519837/public_url',
    credlyProfile: 'https://www.credly.com/users/shubham-soni.79915ddd',
    description: 'Demonstrates deep expertise in delivering ITSM implementations following ITIL best practices on ServiceNow.',
    skills: [
      'Incident, Problem, Change Management', 'Service Catalog & Request Management',
      'Knowledge Management', 'SLA Configuration', 'Workflow Automation',
    ],
    issuer: 'ServiceNow',
    validUntil: '2026',
    verificationEnabled: true,
    featured: true,
  },
  {
    id: 3,
    name: 'Certified Application Developer (CAD)',
    shortName: 'CAD',
    status: 'Completed',
    date: '2025',
    badge: true,
    credentialId: 'CAD-2025',
    credlyUrl: 'https://www.credly.com/badges/e3808574-0072-4253-b8f7-d8024311ecfb/public_url',
    credlyProfile: 'https://www.credly.com/users/shubham-soni.79915ddd',
    description: 'Validated skills in custom application development including scripting, workflows, and integrations.',
    skills: [
      'GlideScript Development', 'UI & Client Scripting', 'Business Rules & Script Includes',
      'Flow Designer', 'Application Lifecycle',
    ],
    issuer: 'ServiceNow',
    validUntil: '2026',
    verificationEnabled: true,
    featured: true,
  },
  {
    id: 4,
    name: 'ServiceNow System Administrator (CSA)',
    shortName: 'CSA',
    status: 'Completed',
    date: '2025',
    badge: true,
    credentialId: 'CSA-2025',
    credlyUrl: 'https://www.credly.com/badges/e47a9612-f3ed-4997-13f2-512496805cc9/public_url',
    credlyProfile: 'https://www.credly.com/users/shubham-soni.79915ddd',
    description: 'Certification on core platform administration and maintaining ServiceNow instance health.',
    skills: [
      'User & Access Management', 'Instance Configuration', 'Incident & Request Management',
      'Reporting & Dashboards', 'Notifications & Events',
    ],
    issuer: 'ServiceNow',
    validUntil: '2026',
    verificationEnabled: true,
    featured: true,
  },
  {
    id: 5,
    name: 'Certified Implementation Specialist - Platform Analytics (CIS-PA)',
    shortName: 'CIS-PA',
    status: 'In Progress',
    date: '2025',
    badge: false,
    description: 'Specialization in ServiceNow analytics including dashboard design, KPI configuration, and data visualization.',
    skills: [
      'Platform Analytics Configuration', 'KPI & Indicator Design', 'Dashboard Development',
      'Data Collection & Automation', 'Reporting & Forecasting',
    ],
    issuer: 'ServiceNow',
    verificationEnabled: false,
    featured: false,
  },
];

// Career Timeline (updated with professional phrasing)
export const careerTimeline = [
  {
    id: 1,
    period: '2021-2022',
    title: 'ServiceNow Foundation',
    description: 'Built foundational ServiceNow skills including basic administration and application development.',
    achievements: ['Platform mastery', 'ITIL framework understanding', 'Basic scripting experience'],
  },
  {
    id: 2,
    period: '2022-2024',
    title: 'Enterprise ITSM Implementation',
    description: 'Delivered large-scale ITSM deployments, mentoring junior developers and improving processes.',
    achievements: ['5,000+ user deployments', 'Incident backlog reduction', 'Team leadership'],
  },
  {
    id: 3,
    period: '2024-Present',
    title: 'AI/ML & Automation Specialist',
    description: 'Leading AI-driven IT transformations via Virtual Agent, predictive analytics and integration projects.',
    achievements: ['80% VA accuracy', 'Innovative AI-powered workflows', 'Global user support'],
  },
  {
    id: 4,
    period: 'Future Vision',
    title: 'Senior Technical Leadership',
    description: 'Aiming to advance into senior roles focusing on platform architecture, AI innovation, and strategic leadership.',
    achievements: ['Advanced certifications', 'Enterprise architecture', 'Team mentorship and strategy'],
  },
];

// Professional Interests
export const professionalInterests = [
  { id: 1, icon: '🚀', title: 'Emerging AI/ML Technologies', description: 'Exploring latest  ServiceNow AI updates and tools.' },
  { id: 2, icon: '📚', title: 'Technical Writing', description: 'Authoring knowledge articles and blogs to aid developer community.' },
  { id: 3, icon: '🎯', title: 'Community Engagement', description: 'Active contributor to ServiceNow community forums and events.' },
  { id: 4, icon: '💡', title: 'Process Optimization', description: 'Continuous improvement of workflows and automations.' },
  { id: 5, icon: '🌐', title: 'Enterprise Architecture', description: 'Designing scalable and resilient system architectures.' },
  { id: 6, icon: '🤝', title: 'Mentorship', description: 'Guiding emerging developers and sharing knowledge.' },
];

// Utility Functions
export const getSkillsByCategory = (category) =>
  technicalSkills.filter((skill) => skill.category === category);

export const getCompletedCertifications = () =>
  certifications.filter((cert) => cert.status === 'Completed');

export const getInProgressCertifications = () =>
  certifications.filter((cert) => cert.status === 'In Progress');

export const getPlannedCertifications = () =>
  certifications.filter((cert) => cert.status === 'Planned');

export const getFeaturedCertifications = () =>
  certifications.filter((cert) => cert.featured);

export const getTopSkills = (limit = 6) =>
  servicenowSkills
    .slice()
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);

export const getSkillCategories = () => {
  const cats = [...new Set(technicalSkills.map((skill) => skill.category))];
  return cats.map((cat) => ({
    name: cat,
    skills: getSkillsByCategory(cat),
    count: getSkillsByCategory(cat).length,
  }));
};

export const getCertificationStats = () => {
  const completed = getCompletedCertifications().length;
  const inProgress = getInProgressCertifications().length;
  const total = certifications.length;
  return {
    completed,
    inProgress,
    total,
    completionRate: Math.round((completed / total) * 100),
  };
};
