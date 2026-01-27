import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../common/section-header/section-header.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      name: 'On-demand Delivery Platform',
      industry: 'Logistics & Hyperlocal',
      summary:
        'End-to-end mobile and web solution for placing, tracking, and managing same-day deliveries. Features include real-time GPS tracking, automated dispatch, payment integration, and comprehensive analytics.',
      highlights: [
        'Real-time order tracking with GPS',
        'Driver mobile app (Android & iOS)',
        'Admin analytics dashboard',
        'Multi-payment gateway integration',
        'Automated route optimization',
      ],
      image: 'assets/images/logistics/logistics-tracking.jpg',
    }, 
    {
      name: 'Healthcare Appointment System',
      industry: 'Healthcare',
      summary:
        'Multi-clinic appointment scheduling system with reminders, tele-consultation support, and EHR integration. HIPAA-compliant platform serving 50+ clinics with 10,000+ monthly appointments.',
      highlights: [
        'Role-based access control',
        'Video consultation integration',
        'Prescription management',
        'SMS/Email reminders',
        'EHR system integration',
      ],
      image: 'assets/images/healthcare/healthcare-ehr.jpg',
    },
    {
      name: 'B2B Ordering Portal',
      industry: 'Manufacturing & Distribution',
      summary:
        'Enterprise portal for distributors to manage bulk orders, credit limits, shipment tracking, and inventory synchronization. Handles 500+ SKUs and processes 1000+ orders monthly.',
      highlights: [
        'Custom order workflows',
        'Dynamic pricing engine',
        'Real-time inventory sync',
        'Credit limit management',
        'Automated invoice generation',
      ],
      image: 'assets/images/logistics/logistics-warehouse.jpg',
    },
    {
      name: 'E-Learning Platform',
      industry: 'Education',
      summary:
        'Comprehensive learning management system with video courses, assessments, certificates, and student progress tracking. Serves 5000+ students across multiple courses.',
      highlights: [
        'Video streaming & downloads',
        'Interactive assessments',
        'Certificate generation',
        'Student progress analytics',
        'Mobile learning app',
      ],
      image: 'assets/images/education/education-lms.jpg',
    },
    {
      name: 'Food Delivery Marketplace',
      industry: 'Food & Restaurant',
      summary:
        'Multi-restaurant food ordering platform with real-time order tracking, restaurant management dashboard, and delivery partner integration. Processes 2000+ orders daily.',
      highlights: [
        'Restaurant partner app',
        'Real-time order tracking',
        'Delivery partner management',
        'Loyalty & rewards program',
        'Multi-restaurant search',
      ],
      image: 'assets/images/food/food-ordering.jpg',
    },
    {
      name: 'Property Management System',
      industry: 'Real Estate',
      summary:
        'Complete property listing and management platform with virtual tours, document management, tenant portals, and payment processing. Manages 200+ properties.',
      highlights: [
        'Virtual tour integration',
        'Document management system',
        'Tenant/landlord portals',
        'Payment processing',
        'Maintenance request tracking',
      ],
      image: 'assets/images/realestate/realestate-listings.jpg',
    },
  ];
}
