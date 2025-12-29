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
      title: 'Commitment',
      description:
        'We stay committed throughout every sprint and deliver on what we promise. Our team works as if there is no tomorrow, ensuring fast-track delivery even for complex projects.',
      icon: 'target',
    },
    {
      title: 'Transparency',
      description:
        'Clear communication, honest timelines, and regular status updates keep you in control. Daily reports and weekly demos ensure you are always informed about project progress.',
      icon: 'transparency',
    },
    {
      title: 'Quality',
      description:
        'We focus on writing clean, maintainable code and thoroughly test before releasing. Our engineering professionals ensure zero vulnerabilities and minimal downtime.',
      icon: 'quality',
    },
    {
      title: 'Innovation',
      description:
        'We adopt and implement new technologies as soon as they arrive. Our technocrats stay ahead of the curve to deliver cutting-edge solutions.',
      icon: 'innovation',
    },
    {
      title: 'Partnership',
      description:
        'We become your long-term technology partner, not just a vendor. Our reliable technical support strategy provides uninterrupted round-the-clock assistance.',
      icon: 'partnership',
    },
    {
      title: 'Affordability',
      description:
        'We deliver enterprise-grade solutions at competitive prices. Our value-driven approach ensures maximum ROI for startups, SMEs, and large enterprises.',
      icon: 'affordability',
    },
  ];

  stats = [
    { label: 'Years of Experience', value: '18+' },
    { label: 'Projects Delivered', value: '200+' },
    { label: 'Happy Clients', value: '150+' },
    { label: 'Team Members', value: '50+' },
  ];

  certifications = [
    'ISO Certified',
    'Goodfirms Listed',
    'Clutch Reviewed',
    'Top Developers',
  ];
}
