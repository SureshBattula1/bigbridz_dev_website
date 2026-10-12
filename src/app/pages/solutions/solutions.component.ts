import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../common/section-header/section-header.component';
import { ServiceCardComponent } from '../../common/service-card/service-card.component';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [SectionHeaderComponent, ServiceCardComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  verticalSolutions = [
    {
      title: 'E-commerce & Retail',
      description:
        'High-throughput storefronts, multi-vendor marketplaces, real-time inventory management, and PCI-compliant checkout flows built for conversion.',
      icon: 'ecommerce',
    },
    {
      title: 'Healthcare & Wellness',
      description:
        'HIPAA-aligned telemedicine apps, EHR workflows, appointment booking systems, and patient portals engineered for strict privacy.',
      icon: 'healthcare',
    },
    {
      title: 'Education & EdTech',
      description:
        'Comprehensive LMS platforms, virtual classrooms, quiz assessment engines, and mobile learning apps that keep students engaged.',
      icon: 'education',
    },
    {
      title: 'Logistics & Supply Chain',
      description:
        'Real-time GPS fleet tracking, dispatch automation, route optimization, and warehouse inventory control systems.',
      icon: 'logistics',
    },
    {
      title: 'Finance & Fintech',
      description:
        'Secure payment processing, digital wallets, automated loan management, and compliance-ready transaction accounting.',
      icon: 'finance',
    },
    {
      title: 'Real Estate & PropTech',
      description:
        'Property listing engines, agent lead CRM, tenant lease portals, maintenance ticketing, and automated payment processing.',
      icon: 'realestate',
    },
    {
      title: 'Food & Hospitality',
      description:
        'Online ordering systems, kitchen display units (KDS), table reservation workflows, and multi-location restaurant management.',
      icon: 'food',
    },
    {
      title: 'Travel & Tourism',
      description:
        'Dynamic travel booking engines, hotel reservation portals, itinerary planners, and multi-currency payment integration.',
      icon: 'travel',
    },
  ];
}
