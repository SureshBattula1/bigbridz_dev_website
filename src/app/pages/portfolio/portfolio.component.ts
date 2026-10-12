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
      name: 'On-Demand Hyperlocal Logistics Platform',
      industry: 'Logistics & Dispatch',
      summary:
        'Complete dispatch and driver tracking ecosystem handling same-day delivery routing. Built with low-latency WebSockets, automated dispatch algorithms, and driver mobile apps.',
      highlights: [
        'Sub-second GPS vehicle telemetry updates',
        'Automated route optimization engine',
        'Native driver & consumer mobile apps (iOS & Android)',
        'Multi-payment gateway integration with automated invoicing',
        'Fleet manager analytics dashboard',
      ],
      image: 'assets/images/logistics/logistics-tracking.jpg',
    }, 
    {
      name: 'Multi-Clinic Healthcare Scheduling & EHR',
      industry: 'Healthcare & HealthTech',
      summary:
        'HIPAA-aligned patient management platform serving 14 clinic branches. Connects appointment bookings, tele-consultation video streaming, and digital health records.',
      highlights: [
        'Role-based access control (doctor, staff, patient)',
        'Encrypted EHR database with detailed audit logging',
        'WebRTC-powered tele-consultation room',
        'Automated SMS/Email appointment reminders',
        'Prescription generation & digital pharmacy orders',
      ],
      image: 'assets/images/healthcare/healthcare-ehr.jpg',
    },
    {
      name: 'B2B Distributor Ordering & Inventory Portal',
      industry: 'Manufacturing & Distribution',
      summary:
        'Wholesale ordering system synchronizing multi-warehouse inventory, credit allowances, and volume-tiered pricing for 500+ commercial SKUs.',
      highlights: [
        'Tiered wholesale pricing & custom credit limits',
        'Automated invoice generation & reconciliation',
        'Real-time stock reservation to prevent overselling',
        'ERP and warehouse management API integrations',
        'Distributor self-service reorder workflows',
      ],
      image: 'assets/images/logistics/logistics-warehouse.jpg',
    },
    {
      name: 'Interactive E-Learning & Assessment Platform',
      industry: 'Education & EdTech',
      summary:
        'Scalable learning management system supporting video streaming, interactive module quizzes, and automated certificate issuance.',
      highlights: [
        'Adaptive bitrate video streaming with offline caching',
        'Automated quiz grading & progress analytics',
        'Tamper-proof digital certificate verification',
        'Discussion forums & student-instructor messaging',
        'Cross-platform mobile learning application',
      ],
      image: 'assets/images/education/education-lms.jpg',
    },
    {
      name: 'Multi-Vendor Food Ordering & Kitchen System',
      industry: 'Food & Hospitality',
      summary:
        'Restaurant ordering marketplace with dedicated kitchen display system (KDS), delivery dispatch integration, and real-time order status tracking.',
      highlights: [
        'Live kitchen order management dashboard',
        'Real-time delivery partner assignment',
        'Dynamic menu items, addons, and dietary filtering',
        'Integrated customer loyalty and reward points',
        'Detailed sales and commission reporting',
      ],
      image: 'assets/images/food/food-ordering.jpg',
    },
    {
      name: 'Commercial Property Listings & Tenant Portal',
      industry: 'Real Estate & PropTech',
      summary:
        'Real estate property management platform featuring interactive listings, lease document signing, tenant maintenance ticketing, and automated rent collection.',
      highlights: [
        'Interactive media galleries and floor plan viewers',
        'Automated lease document management & e-signatures',
        'Tenant maintenance request pipeline with photo uploads',
        'Recurring online rent collection with automated receipts',
        'Owner financial overview & property occupancy analytics',
      ],
      image: 'assets/images/realestate/realestate-listings.jpg',
    },
  ];
}
