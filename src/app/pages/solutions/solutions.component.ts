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
        'Custom storefronts, marketplace integrations, inventory management, secure payment gateways, and order fulfillment systems. Multi-vendor platforms with admin dashboards.',
      icon: 'ecommerce',
    },
    {
      title: 'Healthcare & Wellness',
      description:
        'Appointment booking systems, telemedicine platforms, EHR management, pharmacy integrations, and patient portals. HIPAA-compliant solutions with secure data handling.',
      icon: 'healthcare',
    },
    {
      title: 'Education & E-Learning',
      description:
        'LMS platforms, mobile learning apps, assessments, student engagement tools, virtual classrooms, and certification management systems.',
      icon: 'education',
    },
    {
      title: 'Logistics & On-demand',
      description:
        'Real-time tracking, fleet management, dispatch systems, route optimization, and delivery partner apps for logistics and hyperlocal businesses.',
      icon: 'logistics',
    },
    {
      title: 'Finance & Fintech',
      description:
        'Payment processing systems, digital wallets, loan management platforms, investment tracking apps, and regulatory compliance solutions.',
      icon: 'finance',
    },
    {
      title: 'Real Estate & Property',
      description:
        'Property listing platforms, CRM for agents, virtual tours, document management, and tenant/landlord portals with payment integration.',
      icon: 'realestate',
    },
    {
      title: 'Food & Restaurant',
      description:
        'Online ordering systems, table reservation apps, kitchen display systems, delivery management, and loyalty programs for restaurants and food chains.',
      icon: 'food',
    },
    {
      title: 'Travel & Hospitality',
      description:
        'Booking engines, hotel management systems, travel itinerary apps, review platforms, and customer engagement solutions for the travel industry.',
      icon: 'travel',
    },
  ];
}
