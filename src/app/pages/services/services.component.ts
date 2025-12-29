import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../common/section-header/section-header.component';
import { ServiceCardComponent } from '../../common/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SectionHeaderComponent, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  coreServices = [
    {
      title: 'Android & iOS App Development',
      description:
        'End-to-end native and hybrid app development with Kotlin, Swift, Flutter, and React Native. We handle app store deployment, performance optimization, and post-launch maintenance.',
      icon: 'mobile',
    },
    {
      title: 'Web Application Development',
      description:
        'Modern, SEO-friendly, and responsive web applications using Angular, React, Vue, Node.js, and cloud-native architectures. Full-stack development with scalable backend APIs.',
      icon: 'web',
    },
    {
      title: 'Startup Product Development',
      description:
        'Rapid MVP development with pivot-friendly architecture. We help startups validate ideas quickly, iterate based on user feedback, and scale as you grow.',
      icon: 'startup',
    },
    {
      title: 'Enterprise Software',
      description:
        'Custom CRM, ERP, and workflow automation platforms tailored to your business processes. Compliance-ready solutions with role-based access and audit trails.',
      icon: 'enterprise',
    },
    {
      title: 'UI/UX Design Services',
      description:
        'Intuitive, conversion-focused interfaces and user journeys that reflect your brand identity. We create wireframes, prototypes, and pixel-perfect designs.',
      icon: 'design',
    },
    {
      title: 'Cloud & DevOps',
      description:
        'AWS, Azure, and GCP deployment with CI/CD pipelines, containerization, and infrastructure as code. We ensure high availability and auto-scaling capabilities.',
      icon: 'cloud',
    },
    {
      title: 'Legacy Modernization',
      description:
        'Transform outdated systems into modern, maintainable applications. We migrate legacy code to current frameworks while preserving business logic and data.',
      icon: 'legacy',
    },
    {
      title: 'Quality Assurance & Testing',
      description:
        'Comprehensive testing including unit, integration, E2E, and performance testing. We ensure bug-free releases and maintain high code quality standards.',
      icon: 'qa',
    },
  ];

  supportingServices = [
    'Product discovery & requirement analysis',
    'UI/UX design and prototyping',
    'Cloud deployment & DevOps support',
    'Application performance optimization',
    'Legacy app modernization',
    '24/7 monitoring and maintenance',
    'Security audits & penetration testing',
    'API development & integration',
    'Database design & optimization',
    'Third-party service integrations',
  ];
}
