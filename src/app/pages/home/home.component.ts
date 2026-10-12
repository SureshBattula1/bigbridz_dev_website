import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CraftLeaf, CRAFT_BOOK_STAGES } from './craft-book.data';
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
export class HomeComponent implements AfterViewInit, OnDestroy {
  // 3D Craft Book Properties
  currentLeafIndex = 0;
  bookState: 'closed' | 'open' | 'end' = 'closed';
  leaves: CraftLeaf[] = [
    {
      id: 0,
      frontType: 'cover',
      backType: 'page',
      backStage: CRAFT_BOOK_STAGES[0],
      backIndex: 0,
      isFlipped: false,
      isTurning: false,
      zIndex: 5
    },
    {
      id: 1,
      frontType: 'page',
      backType: 'page',
      frontStage: CRAFT_BOOK_STAGES[1],
      frontIndex: 1,
      backStage: CRAFT_BOOK_STAGES[2],
      backIndex: 2,
      isFlipped: false,
      isTurning: false,
      zIndex: 4
    },
    {
      id: 2,
      frontType: 'page',
      backType: 'page',
      frontStage: CRAFT_BOOK_STAGES[3],
      frontIndex: 3,
      backStage: CRAFT_BOOK_STAGES[4],
      backIndex: 4,
      isFlipped: false,
      isTurning: false,
      zIndex: 3
    },
    {
      id: 3,
      frontType: 'page',
      backType: 'page',
      frontStage: CRAFT_BOOK_STAGES[5],
      frontIndex: 5,
      backStage: CRAFT_BOOK_STAGES[6],
      backIndex: 6,
      isFlipped: false,
      isTurning: false,
      zIndex: 2
    },
    {
      id: 4,
      frontType: 'page',
      backType: 'end',
      frontStage: CRAFT_BOOK_STAGES[7],
      frontIndex: 7,
      isFlipped: false,
      isTurning: false,
      zIndex: 1
    }
  ];

  private flipTimer: any = null;
  private peekTimeout: any = null;
  private peekResetTimeout: any = null;
  private isAutoPlaying = false;
  backgroundImage = 'assets/images/home/lines-background3.jpg';
  whyChooseBackgroundImage = 'assets/images/home/lines-background.png';
  
  services = [
    {
      title: 'Mobile App Development',
      description:
        'Native and cross-platform apps for iOS and Android. Built with Flutter, React Native, Kotlin, and Swift for responsive performance, smooth offline support, and clean architecture.',
      icon: 'mobile',
      image: 'assets/images/services/services-mobile.jpg',
    },
    {
      title: 'Web Application Development',
      description:
        'High-performance web platforms and portals built with Angular, React, and Node.js. Fast load times, responsive layouts, and robust backend integrations.',
      icon: 'web',
      image: 'assets/images/services/services-web.jpg',
    },
    {
      title: 'Custom Software Development',
      description:
        'Tailored business software, internal tools, and ERP systems engineered around your exact workflows—eliminating manual bottlenecks and repetitive tasks.',
      icon: 'custom',
      image: 'assets/images/services/services-enterprise.jpg',
    },
    {
      title: 'UI/UX & Product Design',
      description:
        'User research, intuitive wireframes, and design systems in Figma. Built to solve real user problems, reduce cognitive load, and maximize conversion rates.',
      icon: 'design',
      image: 'assets/images/services/services-design.jpg',
    },
  ];

  processSteps = [
    {
      number: 1,
      icon: 'discovery',
      title: 'Discovery & Technical Scoping',
      description: 'We dig into your workflow requirements, identify technical risks early, and define clear project milestones and architecture.',
    },
    {
      number: 2,
      icon: 'blueprint',
      title: 'Architecture & System Design',
      description: 'We map out database schemas, API contracts, and technology choices tailored to your scalability and budget requirements.',
    },
    {
      number: 3,
      icon: 'design',
      title: 'Prototyping & UX Validation',
      description: 'Interactive wireframes and design tokens tested against real user tasks before a single line of backend code is committed.',
    },
    {
      number: 4,
      icon: 'development',
      title: 'Sprint-Based Development',
      description: 'Two-week agile sprints with continuous integration, unit tests, and staging preview builds for complete transparency.',
    },
    {
      number: 5,
      icon: 'launch',
      title: 'Production Launch & Support',
      description: 'Zero-downtime deployment, infrastructure monitoring, and dedicated post-launch maintenance to ensure long-term stability.',
    },
  ];

  benefits = [
    {
      number: 1,
      icon: 'target',
      title: 'Direct Engineer Access',
      description: 'Collaborate directly with the developers building your software—no communication middlemen.',
    },
    {
      number: 2,
      icon: 'quality',
      title: '100% Code Ownership',
      description: 'Complete IP rights, clean Git repositories, and standard documentation from day one. No lock-in.',
    },
    {
      number: 3,
      icon: 'speed',
      title: 'Predictable Sprints',
      description: 'Weekly demo builds and transparent progress logs so you always know what is in flight.',
    },
    {
      number: 4,
      icon: 'security',
      title: 'Security by Design',
      description: 'Role-based access, encrypted databases, and defensive coding against vulnerabilities.',
    },
    {
      number: 5,
      icon: 'future-proof',
      title: 'Pragmatic Tech Stacks',
      description: 'Battle-tested frameworks chosen for maintainability and long-term hiring ease, not hype.',
    },
  ];

  testimonials = [
    {
      quote:
        'BigBridz delivered our logistics dispatch portal two weeks ahead of schedule. Their engineers did not just write code—they pointed out workflow bottlenecks we had not considered and saved us months of rework.',
      author: 'Rajesh Varma',
      role: 'Head of Operations, QuickLogistics',
    },
    {
      quote:
        'Finding a software team that truly communicates is rare. With BigBridz, we had direct access to the lead engineer, weekly working demos, and zero surprises on delivery day.',
      author: 'Anita Desai',
      role: 'Product Lead, MedCare Clinic Systems',
    },
  ];

  advancedFeatures = [
    {
      icon: 'realtime',
      title: 'Real-Time Data Streaming',
      description: 'Low-latency WebSocket and event-driven architecture for live dashboards, order tracking, and instant user updates.',
      example: 'Live driver tracking, instant inventory synchronization, real-time activity feeds',
      tech: 'WebSockets, SSE, Redis Pub/Sub, Socket.io'
    },
    {
      icon: 'security',
      title: 'Production-Grade Security',
      description: 'Multi-layer security architecture with data encryption, role-based access, and compliance best practices.',
      example: 'OAuth 2.0 / JWT auth, AES-256 data encryption, input sanitization, rate limiting',
      tech: 'OAuth2, JWT, AES-256, RBAC, Helmet.js'
    },
    {
      icon: 'mobile',
      title: 'Cross-Platform Performance',
      description: 'Native-feel user experience across iOS, Android, and Desktop with unified business logic and shared test suites.',
      example: 'Offline-first SQLite caching, native camera/GPS access, push notifications',
      tech: 'Flutter, React Native, Capacitor, PWA'
    },
    {
      icon: 'cloud',
      title: 'Cloud-Native Infrastructure',
      description: 'Resilient cloud infrastructure with automated containerization, health checks, and managed scalability.',
      example: 'Auto-scaling worker nodes, automated database backups, CDN asset caching',
      tech: 'AWS, Azure, Docker, Kubernetes, Nginx'
    },
    {
      icon: 'api',
      title: 'API-First Architecture',
      description: 'Clean RESTful and GraphQL APIs built with explicit schema validation, versioning, and webhook notifications.',
      example: 'Payment gateways, ERP integrations, SMS/Email dispatch, webhook delivery',
      tech: 'REST, GraphQL, Swagger/OpenAPI, Webhooks'
    },
    {
      icon: 'analytics',
      title: 'Actionable Telemetry & Logs',
      description: 'Centralized error logging, uptime monitoring, and business analytics to make decisions backed by hard data.',
      example: 'Crash reporting, conversion funnel analysis, query latency tracking',
      tech: 'Sentry, OpenTelemetry, Prometheus, Custom KPIs'
    }
  ];

  realWorldExamples = [
    {
      industry: 'High-Volume E-Commerce',
      challenge: 'Flash sale traffic spikes causing checkout timeouts and inventory desynchronization across warehouses.',
      solution: 'Engineered a Redis-backed session queue, database read replicas, and optimistic concurrency locking.',
      result: 'Sub-200ms checkout times under 12,000 concurrent user load with zero double-allocation incidents.',
      image: 'assets/images/ecommerce/ecommerce-storefront.jpg',
      icon: 'shopping-cart',
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      industry: 'Multi-Clinic Health Portal',
      challenge: 'Managing doctor schedules, lab results, and patient records across 14 clinics with strict data privacy.',
      solution: 'Built a secure HIPAA-aligned portal with role-based access control and encrypted medical history storage.',
      result: 'Reduced patient intake time by 55% and eliminated lost appointment records across all branch clinics.',
      image: 'assets/images/healthcare/healthcare-ehr.jpg',
      icon: 'health',
      gradient: 'from-green-500/20 to-teal-500/20'
    },
    {
      industry: 'Fleet Logistics & Telemetry',
      challenge: 'Manual dispatch coordination leading to missed delivery windows and excessive fuel expenditure.',
      solution: 'Built a real-time tracking dashboard with automated route grouping and driver status synchronization.',
      result: '28% faster delivery cycle times and an 18% reduction in monthly fleet fuel expenditure.',
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
      image: 'assets/images/tech-logos/angular.png',
      category: 'Frontend',
      gradient: 'from-red-600 to-red-800'
    },
    {
      name: 'React',
      image: 'assets/images/tech-logos/react.png',
      category: 'Frontend',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Node.js',
      image: 'assets/images/tech-logos/node.js.png',
      category: 'Backend',
      gradient: 'from-green-600 to-green-800'
    },
    {
      name: 'Python',
      image: 'assets/images/tech-logos/python.png',
      category: 'Backend',
      gradient: 'from-yellow-500 to-blue-600'
    },
    {
      name: 'AWS',
      image: 'assets/images/tech-logos/aws.png',
      category: 'Cloud',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      name: 'Docker',
      image: 'assets/images/tech-logos/docker.png',
      category: 'DevOps',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Kubernetes',
      image: 'assets/images/tech-logos/kubernetes.png',
      category: 'DevOps',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Laravel',
      image: 'assets/images/tech-logos/laravel.png',
      category: 'Backend',
      gradient: 'from-red-500 to-red-700'
    },
    {
      name: 'PHP',
      image: 'assets/images/tech-logos/php.png',
      category: 'Backend',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Flutter',
      image: 'assets/images/tech-logos/flutter.png',
      category: 'Mobile',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Kotlin',
      image: 'assets/images/tech-logos/kotlin.png',
      category: 'Mobile',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'SAP',
      image: 'assets/images/tech-logos/sap.png',
      category: 'Enterprise',
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  getTechIcon(techName: string): string {
    const iconMap: Record<string, string> = {
      'Angular': 'web',
      'React': 'web',
      'Node.js': 'development',
      '.NET': 'development',
      'Python': 'development',
      'AWS': 'cloud',
      'Docker': 'development',
      'Kubernetes': 'development',
      'PostgreSQL': 'database',
      'MongoDB': 'database',
      'Redis': 'database',
      'GraphQL': 'api',
      'Vue.js': 'web',
      'TypeScript': 'development',
      'Azure': 'cloud',
      'GCP': 'cloud'
    };
    return iconMap[techName] || 'development';
  }
  ngAfterViewInit(): void {
    this.renderLeafStates();
    // Gentle intro: tilt the cover slightly once to invite user interaction
    this.peekTimeout = setTimeout(() => {
      if (!this.flipTimer && this.currentLeafIndex === 0) {
        this.leaves[0].peekTransform = 'rotateY(-14deg)';
        this.peekResetTimeout = setTimeout(() => {
          this.leaves[0].peekTransform = '';
        }, 750);
      }
    }, 900);
  }

  ngOnDestroy(): void {
    this.clearFlipTimer();
    if (this.peekTimeout) clearTimeout(this.peekTimeout);
    if (this.peekResetTimeout) clearTimeout(this.peekResetTimeout);
  }

  onStagePointerEnter(): void {
    this.clearFlipTimer();
    this.flipTimer = setInterval(() => {
      if (this.currentLeafIndex < this.leaves.length) {
        this.currentLeafIndex++;
        this.renderLeafStates();
      } else {
        this.clearFlipTimer();
      }
    }, 1000);
    if (this.currentLeafIndex < this.leaves.length) {
      this.currentLeafIndex++;
      this.renderLeafStates();
    }
  }

  onStagePointerLeave(): void {
    this.clearFlipTimer();
    this.flipTimer = setInterval(() => {
      if (this.currentLeafIndex > 0) {
        this.currentLeafIndex--;
        this.renderLeafStates();
      } else {
        this.clearFlipTimer();
      }
    }, 320);
  }

  toggleBookFlip(): void {
    if (this.flipTimer && this.isAutoPlaying) {
      this.clearFlipTimer();
      this.isAutoPlaying = false;
      this.onStagePointerLeave();
    } else if (this.currentLeafIndex >= this.leaves.length) {
      this.clearFlipTimer();
      this.isAutoPlaying = false;
      this.onStagePointerLeave();
    } else {
      this.isAutoPlaying = true;
      this.onStagePointerEnter();
    }
  }

  private renderLeafStates(): void {
    const total = this.leaves.length;
    this.leaves.forEach((leaf, idx) => {
      const willFlip = idx < this.currentLeafIndex;
      if (willFlip !== leaf.isFlipped) {
        leaf.isTurning = true;
        setTimeout(() => {
          leaf.isTurning = false;
        }, 1000);
        setTimeout(() => {
          leaf.zIndex = willFlip ? idx + 1 : total - idx;
        }, 500);
      } else {
        leaf.zIndex = willFlip ? idx + 1 : total - idx;
      }
      leaf.isFlipped = willFlip;
      leaf.peekTransform = '';
    });

    if (this.currentLeafIndex === 0) {
      this.bookState = 'closed';
    } else if (this.currentLeafIndex === total) {
      this.bookState = 'end';
    } else {
      this.bookState = 'open';
    }
  }

  private clearFlipTimer(): void {
    if (this.flipTimer) {
      clearInterval(this.flipTimer);
      this.flipTimer = null;
    }
  }
}
