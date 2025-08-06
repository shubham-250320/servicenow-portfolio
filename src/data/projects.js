// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Enterprise Virtual Agent Optimization",
    category: "ai-ml",
    complexity: "high",
    description: "Transformed Virtual Agent performance from 50% to 80% accuracy through advanced NLU training and intelligent fallback mechanisms.",
    fullDescription: "Architected enterprise-grade Virtual Agent solution serving 1000+ users across multiple regions. Implemented advanced NLU training pipeline with custom intent optimization, knowledge base restructuring, and intelligent fallback mechanisms.",
    challenge: "Low Virtual Agent accuracy (50%) was causing user frustration and increased support ticket volume. Users were frequently routed to live agents for queries that should have been automated, leading to inefficient resource utilization and poor user experience.",
    solution: "Implemented comprehensive NLU training optimization using advanced machine learning algorithms, created dynamic conversation flows with contextual understanding, built intelligent fallback mechanisms for unrecognized intents, and integrated ChatGPT APIs for enhanced knowledge retrieval.",
    results: {
      accuracy: "80%",
      deflection: "40%",
      satisfaction: "85%",
      users: "1000+",
      implementation: "3 months"
    },
    techStack: [
      "ServiceNow Virtual Agent", 
      "NLU Training", 
      "GlideScript", 
      "AI Search", 
      "Flow Designer",
      "ChatGPT API",
      "JavaScript"
    ],
    impact: "Achieved 40% L1 deflection, reducing support workload by 1,200 tickets/month and improving user satisfaction by 20%. Saved approximately $150K annually in support costs.",
    featured: true,
    icon: "Brain",
    metrics: [
      { label: "Intent Accuracy", before: "50%", after: "80%", improvement: "+30%" },
      { label: "L1 Deflection", before: "25%", after: "40%", improvement: "+15%" },
      { label: "User Satisfaction", before: "65%", after: "85%", improvement: "+20%" },
      { label: "Response Time", before: "45s", after: "12s", improvement: "-73%" }
    ],
    codeSnippets: [
      {
        title: "Advanced NLU Training Optimization",
        language: "javascript",
        code: `// NLU Intent Optimization Script
function optimizeIntentAccuracy() {
    var intentData = new GlideRecord('ml_intent');
    intentData.addQuery('confidence', '<', 0.8);
    intentData.query();
    
    while (intentData.next()) {
        // Analyze utterance patterns
        var utterances = getUtteranceData(intentData.getValue('sys_id'));
        var optimizedUtterances = enhanceUtterances(utterances);
        
        // Update training model with improved data
        updateTrainingModel(intentData.getValue('sys_id'), optimizedUtterances);
        
        gs.info('Intent optimized: ' + intentData.getValue('name') + 
                ' - New confidence: ' + calculateConfidence(intentData));
    }
}`
      }
    ],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "/projects/virtual-agent.jpg"
  },
  {
    id: 2,
    title: "ChatGPT Knowledge Enrichment System",
    category: "ai-ml",
    complexity: "high",
    description: "Integrated ChatGPT APIs for automated knowledge article enrichment, boosting AI Search effectiveness by 30% and content discoverability.",
    fullDescription: "Developed automated content enrichment pipeline using ChatGPT APIs to generate relevant metadata, tags, and improve article searchability across enterprise knowledge base with 500+ articles.",
    challenge: "Knowledge articles lacked proper metadata and keywords, resulting in poor search results (35% success rate) and reduced user self-service adoption. Manual content enrichment was time-consuming and inconsistent.",
    solution: "Built custom GPT integration with ServiceNow APIs to automatically enrich article metadata, generate relevant tags, optimize content for AI Search indexing, and implement automated quality scoring for content relevance.",
    results: {
      searchImprovement: "30%",
      automation: "80%",
      articles: "500+",
      accuracy: "92%",
      timeReduction: "75%"
    },
    techStack: [
      "ChatGPT API", 
      "ServiceNow AI Search", 
      "REST Integration", 
      "Knowledge Management", 
      "GlideScript",
      "Natural Language Processing",
      "Automation Engine"
    ],
    impact: "Improved search effectiveness by 30%, automated 80% of metadata generation process, processed 500+ articles with 92% accuracy, reduced manual effort by 75%",
    featured: true,
    icon: "Brain",
    metrics: [
      { label: "Search Effectiveness", before: "35%", after: "65%", improvement: "+30%" },
      { label: "Auto-Enrichment", before: "0%", after: "80%", improvement: "+80%" },
      { label: "Article Coverage", before: "200", after: "500+", improvement: "+150%" },
      { label: "Processing Time", before: "4 hours", after: "1 hour", improvement: "-75%" }
    ],
    codeSnippets: [
      {
        title: "ChatGPT Knowledge Enhancement Integration",
        language: "javascript",
        code: `// Automated Knowledge Article Enrichment
function enrichKnowledgeArticle(articleId) {
    var article = new GlideRecord('kb_knowledge');
    if (article.get(articleId)) {
        var content = article.getValue('text');
        
        // ChatGPT API call for metadata generation
        var chatGPTResponse = callChatGPTAPI({
            model: "gpt-4",
            prompt: "Analyze this knowledge article and generate relevant tags, categories, and keywords: " + content,
            max_tokens: 150
        });
        
        var enrichmentData = JSON.parse(chatGPTResponse.choices[0].message.content);
        
        // Update article with AI-generated metadata
        article.setValue('meta_tags', enrichmentData.tags.join(','));
        article.setValue('category', enrichmentData.category);
        article.setValue('search_keywords', enrichmentData.keywords.join(','));
        article.update();
        
        gs.info('Article enriched: ' + article.getDisplayValue('short_description'));
    }
}`
      }
    ],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "/projects/chatgpt-integration.jpg"
  },
  {
    id: 3,
    title: "Multi-Regional ITSM Integration Platform",
    category: "integration",
    complexity: "high",
    description: "Architected scalable ServiceNow platform serving 1000+ users across multiple regions with unified processes and localized customizations.",
    fullDescription: "Designed and implemented unified ServiceNow architecture with region-specific customizations, automated data synchronization, and centralized governance frameworks across 5 global regions for Volkswagen Group.",
    challenge: "Disparate ITSM processes across global offices (Poland, Sweden, South Africa, Germany, India) led to inefficiencies, inconsistent reporting, and difficulty maintaining governance standards. Each region had different compliance requirements and languages.",
    solution: "Created scalable multi-tenant architecture with centralized governance, region-specific workflows, automated compliance monitoring, multi-language support, and unified reporting dashboards while maintaining local customizations.",
    results: {
      users: "1000+",
      regions: "5",
      efficiency: "45%",
      compliance: "98%",
      languages: "4"
    },
    techStack: [
      "ServiceNow Platform", 
      "Integration Hub", 
      "REST APIs", 
      "Flow Designer", 
      "Performance Analytics",
      "Multi-Instance Management",
      "Compliance Framework"
    ],
    impact: "Streamlined global operations across 5 regions, improved process efficiency by 45%, achieved 98% compliance score, reduced operational overhead by $200K annually",
    featured: false,
    icon: "Zap",
    metrics: [
      { label: "User Base", before: "300", after: "1000+", improvement: "+233%" },
      { label: "Process Efficiency", before: "55%", after: "85%", improvement: "+45%" },
      { label: "Compliance Score", before: "82%", after: "98%", improvement: "+16%" },
      { label: "Regional Coverage", before: "2", after: "5", improvement: "+150%" }
    ],
    codeSnippets: [
      {
        title: "Multi-Region CAB Automation",
        language: "javascript",
        code: `// Regional Change Advisory Board Automation
function processRegionalCAB(changeRequest, region) {
    var cabConfig = getRegionalCABConfig(region);
    
    // Apply region-specific rules
    var riskLevel = assessRegionalRisk(changeRequest, region);
    var approvers = getRegionalApprovers(region, riskLevel);
    
    // Automated workflow routing
    if (riskLevel === 'HIGH') {
        routeToExecutiveCAB(changeRequest, region);
    } else if (riskLevel === 'MEDIUM') {
        routeToStandardCAB(changeRequest, region);
    } else {
        autoApproveChange(changeRequest, region);
    }
    
    // Compliance tracking
    logComplianceData(changeRequest, region, riskLevel);
    
    gs.info('CAB processed for region: ' + region + 
            ' - Risk Level: ' + riskLevel);
}`
      }
    ],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "/projects/multi-regional.jpg"
  },
  {
    id: 4,
    title: "Predictive Intelligence MTTR Optimization",
    category: "ai-ml",
    complexity: "medium",
    description: "Developed AI-powered incident categorization system reducing Mean Time to Resolution by 30% through intelligent routing and automated classification.",
    fullDescription: "Built machine learning models for automated incident classification, intelligent routing algorithms, and proactive escalation mechanisms integrated with existing ITSM workflows, processing 2000+ incidents monthly.",
    challenge: "Manual incident categorization led to mis-routing and delayed resolution times, impacting SLA compliance (78%) across multiple support teams. Average MTTR was 4.2 hours with significant variation based on assignment accuracy.",
    solution: "Implemented predictive intelligence models with automated classification using historical incident data, smart routing based on CI relationships and technician expertise, proactive escalation triggers, and continuous learning algorithms.",
    results: {
      mttr: "30%",
      automation: "65%",
      sla: "95%",
      accuracy: "87%",
      incidents: "2000+"
    },
    techStack: [
      "Predictive Intelligence", 
      "Machine Learning", 
      "ServiceNow Platform", 
      "Performance Analytics",
      "Data Pipeline",
      "Classification Algorithms"
    ],
    impact: "Reduced MTTR by 30% (4.2h to 2.9h), achieved 95% SLA compliance, automated 65% of routing decisions with 87% accuracy, processed 2000+ incidents monthly",
    featured: false,
    icon: "Brain",
    metrics: [
      { label: "MTTR Reduction", before: "4.2 hours", after: "2.9 hours", improvement: "-30%" },
      { label: "Auto-Classification", before: "15%", after: "65%", improvement: "+50%" },
      { label: "SLA Compliance", before: "78%", after: "95%", improvement: "+17%" },
      { label: "Routing Accuracy", before: "72%", after: "87%", improvement: "+15%" }
    ],
    codeSnippets: [
      {
        title: "Predictive Classification Algorithm",
        language: "javascript",
        code: `// AI-powered Incident Classification
function classifyIncident(incidentRecord) {
    var classifier = new sn_ml.MLClassifier('incident_category_model');
    
    var features = {
        description: incidentRecord.getValue('description'),
        short_description: incidentRecord.getValue('short_description'),
        caller_department: incidentRecord.getDisplayValue('caller_id.department'),
        ci_class: incidentRecord.getDisplayValue('cmdb_ci.sys_class_name'),
        priority: incidentRecord.getValue('priority'),
        urgency: incidentRecord.getValue('urgency')
    };
    
    var prediction = classifier.predict(features);
    
    // Auto-assign based on prediction confidence
    if (prediction.confidence > 0.85) {
        autoAssignIncident(incidentRecord, prediction.category);
        logPredictionSuccess(incidentRecord, prediction);
        
        // Proactive escalation if needed
        if (shouldEscalate(prediction)) {
            escalateIncident(incidentRecord, prediction.escalation_reason);
        }
    }
    
    return prediction;
}`
      }
    ],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "/projects/predictive-intelligence.jpg"
  },
  {
    id: 5,
    title: "Snowflake-Matillion ETL Integration",
    category: "integration",
    complexity: "medium",
    description: "Built enterprise ETL pipeline connecting ServiceNow with Snowflake data warehouse through Matillion for real-time analytics and reporting.",
    fullDescription: "Architected comprehensive data integration solution connecting ServiceNow ITSM data with Snowflake data warehouse using Matillion ETL, enabling real-time analytics, custom reporting, and business intelligence dashboards.",
    challenge: "Siloed data across ServiceNow and external systems prevented comprehensive reporting and analytics. Manual data extraction was time-consuming and error-prone, limiting business insights and decision-making capabilities.",
    solution: "Implemented automated ETL pipeline using Matillion to extract ServiceNow data, transform it for analytics needs, and load into Snowflake. Created real-time synchronization, data validation, and comprehensive monitoring.",
    results: {
      dataVolume: "10GB+",
      automation: "95%",
      latency: "5min",
      accuracy: "99.8%",
      reports: "25+"
    },
    techStack: [
      "ServiceNow Platform",
      "Matillion ETL",
      "Snowflake",
      "REST APIs",
      "Data Pipeline",
      "SQL",
      "Integration Hub"
    ],
    impact: "Automated 95% of data pipeline, reduced data latency from 24h to 5min, enabled 25+ new analytical reports, improved data accuracy to 99.8%",
    featured: false,
    icon: "Zap",
    metrics: [
      { label: "Data Processing", before: "Manual", after: "95% Automated", improvement: "+95%" },
      { label: "Data Latency", before: "24 hours", after: "5 minutes", improvement: "-99%" },
      { label: "Data Accuracy", before: "92%", after: "99.8%", improvement: "+7.8%" },
      { label: "Available Reports", before: "5", after: "25+", improvement: "+400%" }
    ],
    codeSnippets: [
      {
        title: "ServiceNow to Snowflake Data Sync",
        language: "javascript",
        code: `// Automated Data Synchronization
function syncIncidentDataToSnowflake() {
    var incidents = new GlideRecord('incident');
    incidents.addQuery('sys_updated_on', '>=', gs.hoursAgo(1)); // Last hour updates
    incidents.query();
    
    var dataPayload = [];
    
    while (incidents.next()) {
        var incidentData = {
            sys_id: incidents.getValue('sys_id'),
            number: incidents.getValue('number'),
            state: incidents.getDisplayValue('state'),
            priority: incidents.getDisplayValue('priority'),
            category: incidents.getValue('category'),
            opened_at: incidents.getValue('opened_at'),
            resolved_at: incidents.getValue('resolved_at'),
            caller_department: incidents.getDisplayValue('caller_id.department'),
            assignment_group: incidents.getDisplayValue('assignment_group')
        };
        
        dataPayload.push(incidentData);
    }
    
    // Send to Matillion webhook for Snowflake processing
    var response = sendToMatillion(dataPayload);
    
    gs.info('Synced ' + dataPayload.length + ' incidents to Snowflake');
    
    return response;
}`
      }
    ],
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "/projects/etl-integration.jpg"
  }
];

// Filter functions
export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getProjectsByComplexity = (complexity) => {
  return projects.filter(project => project.complexity === complexity);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

// Project categories
export const projectCategories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'ai-ml', label: 'AI/ML', count: projects.filter(p => p.category === 'ai-ml').length },
  { id: 'integration', label: 'Integration', count: projects.filter(p => p.category === 'integration').length },
  { id: 'high', label: 'High Complexity', count: projects.filter(p => p.complexity === 'high').length }
];
