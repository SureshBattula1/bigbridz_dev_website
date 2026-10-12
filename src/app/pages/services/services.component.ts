import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../common/section-header/section-header.component';
import { ServiceCardComponent } from '../../common/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  coreServices = [
    {
      title: 'Android & iOS App Development',
      description:
        'Native and cross-platform mobile apps for iOS and Android using Flutter, React Native, Swift, and Kotlin. We engineer responsive UI, offline sync, secure authentication, and seamless app store releases.',
      icon: 'mobile',
    },
    {
      title: 'Web Application Development',
      description:
        'Responsive, performant web applications built with Angular, React, and Node.js. Designed for high concurrency, fast First Contentful Paint, modular architecture, and search visibility.',
      icon: 'web',
    },
    {
      title: 'Startup MVP & Fast Prototyping',
      description:
        'Pragmatic MVP development built for real user validation. We focus on core functionality, scalable data models, and clean APIs so your MVP can evolve into a full product without rewrites.',
      icon: 'startup',
    },
    {
      title: 'Enterprise Systems & Internal Tools',
      description:
        'Custom ERPs, operational dashboards, and automated back-office workflows. Role-based access control, detailed audit trails, and seamless integration with legacy databases.',
      icon: 'enterprise',
    },
    {
      title: 'UI/UX & Product Design',
      description:
        'Intuitive, high-converting interfaces crafted through user research, wireframing, and interactive Figma design systems that streamline frontend engineering.',
      icon: 'design',
    },
    {
      title: 'Cloud Architecture & DevOps',
      description:
        'Automated CI/CD pipelines, Docker containerization, and cloud infrastructure on AWS, Azure, and GCP. High availability, auto-scaling, and active uptime monitoring.',
      icon: 'cloud',
    },
    {
      title: 'Legacy Modernization & Refactoring',
      description:
        'Migrating monolithic or deprecated codebases to modern frameworks and microservices without data loss or operational downtime.',
      icon: 'legacy',
    },
    {
      title: 'Quality Assurance & Automated Testing',
      description:
        'Rigorous unit, integration, and end-to-end testing (Cypress, Jest). Automated regression pipelines ensuring bug-free production releases.',
      icon: 'qa',
    },
  ];

  supportingServices = [
    'Technical feasibility & architectural scoping',
    'Interactive UI/UX design tokens & prototypes',
    'Automated CI/CD deployment pipelines',
    'Database performance tuning & query optimization',
    'Security audits & role-based access control (RBAC)',
    'API documentation & third-party webhook integrations',
    'Post-launch SLA monitoring & ongoing maintenance',
  ];
}
