import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../common/section-header/section-header.component';
import { ServiceCardComponent } from '../../common/service-card/service-card.component';
import { IconComponent } from '../../common/icon/icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent, ServiceCardComponent, IconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    {
      title: 'Mobile App Development',
      description:
        'Native and cross-platform Android & iOS applications built for performance, security, and scalability. From MVPs to enterprise apps.',
      icon: 'mobile',
      image: 'assets/images/services/services-mobile.jpg',
    },
    {
      title: 'Web Application Development',
      description:
        'Modern, responsive web apps using Angular, React, .NET, Node.js, and cloud-native architectures. Full-stack solutions.',
      icon: 'web',
      image: 'assets/images/services/services-web.jpg',
    },
    {
      title: 'Custom Software Development',
      description:
        'End-to-end product engineering, from requirements and UX to deployment and ongoing support. Tailored to your needs.',
      icon: 'custom',
      image: 'assets/images/services/services-enterprise.jpg',
    },
    {
      title: 'UI/UX & Product Design',
      description:
        'Intuitive, conversion-focused interfaces and user journeys that reflect your brand identity. Pixel-perfect designs.',
      icon: 'design',
      image: 'assets/images/services/services-design.jpg',
    },
  ];

  processSteps = [
    {
      number: 1,
      icon: 'discovery',
      title: 'Discovery Session',
      description: 'Understanding your vision to craft a winning software strategy.',
    },
    {
      number: 2,
      icon: 'blueprint',
      title: 'Blueprint & Strategy',
      description: 'Developing a strategic roadmap aligned with your objectives to maximize impact and growth.',
    },
    {
      number: 3,
      icon: 'design',
      title: 'Design Excellence',
      description: 'Crafting visually compelling designs that resonate with your audience and enhance user engagement.',
    },
    {
      number: 4,
      icon: 'development',
      title: 'Development & Integration',
      description: 'Building responsive, high-performance applications with perfect functionality and integrations.',
    },
    {
      number: 5,
      icon: 'launch',
      title: 'Launch & Ongoing Support',
      description: 'Launch with confidence! We provide continuous support and optimization to ensure long-term success.',
    },
  ];

  benefits = [
    {
      number: 1,
      icon: 'aesthetics',
      title: 'Beyond Aesthetics',
      description: 'We blend beauty with functionality for impactful designs.',
    },
    {
      number: 2,
      icon: 'target',
      title: 'Customized for You',
      description: 'Your software, your rules - 98% client satisfaction.',
    },
    {
      number: 3,
      icon: 'speed',
      title: 'Speed and Security',
      description: 'Fast-loading, secure applications for enhanced user experiences.',
    },
    {
      number: 4,
      icon: 'seo',
      title: 'SEO-Ready',
      description: 'Built with the latest SEO practices for maximum visibility.',
    },
    {
      number: 5,
      icon: 'future-proof',
      title: 'Future-Proof Tech',
      description: 'Stay ahead with cutting-edge tools and frameworks.',
    },
  ];

  testimonials = [
    {
      quote:
        'BigBridz transformed our idea into a working product in record time. Their agile approach and transparent communication made the entire process smooth.',
      author: 'Rajesh Kumar',
      role: 'CEO, TechStartup Inc.',
    },
    {
      quote:
        'The team at BigBridz is professional, committed, and delivers quality code. They have become our trusted technology partner.',
      author: 'Priya Sharma',
      role: 'CTO, HealthCare Solutions',
    },
  ];

  advancedFeatures = [
    {
      icon: 'realtime',
      title: 'Real-Time Data Processing',
      description: 'Built-in real-time analytics and data processing capabilities for instant insights and decision-making.',
      example: 'Live dashboard updates, real-time notifications, instant data synchronization',
      tech: 'WebSockets, Server-Sent Events, GraphQL Subscriptions'
    },
    {
      icon: 'security',
      title: 'Enterprise-Grade Security',
      description: 'Multi-layer security architecture with encryption, authentication, and compliance standards.',
      example: 'OAuth 2.0, JWT tokens, SSL/TLS encryption, GDPR compliance, SOC 2 ready',
      tech: 'OAuth, JWT, AES-256, RBAC, MFA'
    },
    {
      icon: 'mobile',
      title: 'Cross-Platform Compatibility',
      description: 'Seamless experience across all devices and platforms with responsive design and native performance.',
      example: 'iOS, Android, Web, Desktop apps with shared codebase and native performance',
      tech: 'React Native, Flutter, Progressive Web Apps'
    },
    {
      icon: 'cloud',
      title: 'Cloud-Native Architecture',
      description: 'Scalable cloud infrastructure that grows with your business needs automatically.',
      example: 'Auto-scaling, load balancing, CDN integration, multi-region deployment',
      tech: 'AWS, Azure, GCP, Docker, Kubernetes'
    },
    {
      icon: 'api',
      title: 'API-First Development',
      description: 'RESTful and GraphQL APIs for seamless third-party integrations and microservices architecture.',
      example: 'Payment gateways, SMS/Email services, social media APIs, CRM integrations',
      tech: 'REST APIs, GraphQL, Webhooks, Microservices'
    },
    {
      icon: 'analytics',
      title: 'Advanced Analytics & Reporting',
      description: 'Comprehensive analytics dashboards with custom reports and data visualization.',
      example: 'User behavior tracking, conversion funnels, revenue analytics, custom KPI dashboards',
      tech: 'Google Analytics, Mixpanel, Custom Analytics, Data Warehousing'
    }
  ];

  realWorldExamples = [
    {
      industry: 'E-commerce Platform',
      challenge: 'Handle 10,000+ concurrent users during flash sales',
      solution: 'Implemented auto-scaling infrastructure with Redis caching and CDN optimization',
      result: '99.9% uptime, 2x faster page load, 40% increase in conversions',
      image: 'assets/images/ecommerce/ecommerce-storefront.jpg',
      icon: 'shopping-cart',
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      industry: 'Healthcare Management System',
      challenge: 'HIPAA-compliant patient data management with real-time updates',
      solution: 'Built secure EHR system with end-to-end encryption and audit trails',
      result: '100% compliance, zero data breaches, 60% reduction in admin time',
      image: 'assets/images/healthcare/healthcare-ehr.jpg',
      icon: 'health',
      gradient: 'from-green-500/20 to-teal-500/20'
    },
    {
      industry: 'Logistics Tracking System',
      challenge: 'Real-time GPS tracking for 500+ delivery vehicles',
      solution: 'Developed real-time tracking platform with WebSocket connections and route optimization',
      result: 'Real-time updates, 25% fuel savings, 30% faster deliveries',
      image: 'assets/images/logistics/logistics-tracking.jpg',
      icon: 'truck',
      gradient: 'from-orange-500/20 to-red-500/20'
    }
  ];

  businessDomains = [
    'E-commerce & Retail',
    'Healthcare & Wellness',
    'Education & E-Learning',
    'Finance & Fintech',
    'Real Estate & Property',
    'Food & Restaurant',
    'Travel & Hospitality',
    'Logistics & Supply Chain',
    'Manufacturing & Industry',
    'Media & Entertainment',
    'Government & Public Sector',
    'Energy & Utilities'
  ];

  softwareServices = [
    'Mobile App Development',
    'Web Application Development',
    'Custom Software Solutions',
    'Cloud Migration & DevOps',
    'API Development & Integration',
    'Data Analytics & BI',
    'AI & Machine Learning',
    'Blockchain Solutions',
    'IoT Development',
    'Enterprise Software',
    'Legacy System Modernization',
    'Quality Assurance & Testing'
  ];

  technologyStack = [
    {
      name: 'Angular',
      image: 'assets/images/tech-logos/angular.jpg',
      category: 'Frontend',
      gradient: 'from-red-600 to-red-800'
    },
    {
      name: 'React',
      image: 'assets/images/tech-logos/react.jpg',
      category: 'Frontend',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Node.js',
      image: 'assets/images/tech-logos/nodejs.jpg',
      category: 'Backend',
      gradient: 'from-green-600 to-green-800'
    },
    {
      name: '.NET',
      image: 'assets/images/tech-logos/dotnet.jpg',
      category: 'Backend',
      gradient: 'from-purple-600 to-purple-800'
    },
    {
      name: 'Python',
      image: 'assets/images/tech-logos/python.jpg',
      category: 'Backend',
      gradient: 'from-yellow-500 to-blue-600'
    },
    {
      name: 'AWS',
      image: 'assets/images/tech-logos/aws.jpg',
      category: 'Cloud',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      name: 'Docker',
      image: 'assets/images/tech-logos/docker.jpg',
      category: 'DevOps',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Kubernetes',
      image: 'assets/images/tech-logos/kubernetes.jpg',
      category: 'DevOps',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'PostgreSQL',
      image: 'assets/images/tech-logos/postgresql.jpg',
      category: 'Database',
      gradient: 'from-blue-700 to-blue-900'
    },
    {
      name: 'MongoDB',
      image: 'assets/images/tech-logos/mongodb.jpg',
      category: 'Database',
      gradient: 'from-green-500 to-green-700'
    },
    {
      name: 'Redis',
      image: 'assets/images/tech-logos/redis.jpg',
      category: 'Database',
      gradient: 'from-red-500 to-red-700'
    },
    {
      name: 'GraphQL',
      image: 'assets/images/tech-logos/graphql.jpg',
      category: 'API',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      name: 'Vue.js',
      image: 'assets/images/tech-logos/vuejs.jpg',
      category: 'Frontend',
      gradient: 'from-green-400 to-green-600'
    },
    {
      name: 'TypeScript',
      image: 'assets/images/tech-logos/typescript.jpg',
      category: 'Language',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Azure',
      image: 'assets/images/tech-logos/azure.jpg',
      category: 'Cloud',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'GCP',
      image: 'assets/images/tech-logos/gcp.jpg',
      category: 'Cloud',
      gradient: 'from-blue-400 to-blue-600'
    }
  ];
}
