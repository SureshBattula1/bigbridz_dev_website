import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../common/section-header/section-header.component';
import { IconComponent } from '../../common/icon/icon.component';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [SectionHeaderComponent, IconComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {
  values = [
    {
      title: 'Engineering Rigor',
      description:
        'We write clean, well-documented, and test-covered code. We follow strict architectural patterns to ensure your software remains easy to maintain as your team grows.',
      icon: 'quality',
    },
    {
      title: 'Radical Transparency',
      description:
        'No hidden blockers. We maintain weekly working demos, accessible Git commits, and honest sprint updates so you always know where your project stands.',
      icon: 'transparency',
    },
    {
      title: 'Pragmatic Technology',
      description:
        'We select battle-tested stacks over fleeting trends. We focus on what is reliable, scalable, and easy to maintain long after launch.',
      icon: 'innovation',
    },
    {
      title: 'Direct Accountability',
      description:
        'You talk directly to the engineers solving your problems. Questions get answered faster, decisions get made without bureaucracy, and delivery stays on track.',
      icon: 'target',
    },
    {
      title: 'Long-Term Stewardship',
      description:
        'We do not vanish after deployment. We support your systems with proactive monitoring, performance tuning, and planned feature expansions.',
      icon: 'partnership',
    },
    {
      title: 'Fair, Predictable Engagements',
      description:
        'Clear milestone pricing and transparent time allocations. No surprise fees, no vendor lock-in, and full intellectual property ownership from day one.',
      icon: 'affordability',
    },
  ];

  stats = [
    { label: 'Code & IP Ownership', value: '100%' },
    { label: 'Sprint Delivery Reliability', value: '99.8%' },
    { label: 'Commercial Deployments', value: '25+' },
    { label: 'Core Engineers & Leads', value: '10+' },
  ];

  certifications = [
    'Agile & Scrum Delivery',
    'ISO 27001 Security Best Practices',
    'AWS & Google Cloud Practitioners',
    'OWASP Secure Coding Principles',
    'Clutch & GoodFirms Verified Partner'
  ];
}
