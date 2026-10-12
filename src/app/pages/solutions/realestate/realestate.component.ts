import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../common/section-header/section-header.component';
import { IconComponent } from '../../../common/icon/icon.component';

@Component({
  selector: 'app-realestate',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, IconComponent],
  templateUrl: './realestate.component.html',
  styleUrl: './realestate.component.scss'
})
export class RealestateComponent {
  features = [
    {
      icon: 'property-listing',
      title: 'High-Performance Property Listings',
      description: 'Advanced multi-attribute search (neighborhood, square footage, amenities), interactive map clustering, and high-res media galleries.',
      image: 'assets/images/realestate/realestate-listings.jpg'
    },
    {
      icon: 'crm',
      title: 'Real Estate Agent CRM & Lead Ingestion',
      description: 'Automated lead distribution, communication logs, tour scheduling, and follow-up reminders to accelerate deal closures.',
      image: 'assets/images/realestate/realestate-crm.jpg'
    },
    {
      icon: 'virtual-tour',
      title: '360-Degree Virtual Tours',
      description: 'Seamless integration with 3D virtual walkthroughs and floor plans for interactive remote property viewings.',
      image: 'assets/images/realestate/realestate-tours.jpg'
    },
    {
      icon: 'document-management',
      title: 'Digital Lease Management & E-Sign',
      description: 'Automated lease drafting, tenant background document uploads, and legally binding digital signature workflows.',
      image: 'assets/images/realestate/realestate-documents.jpg'
    },
    {
      icon: 'tenant-portal',
      title: 'Tenant & Landlord Self-Service Portals',
      description: 'Online rent collection with automated receipts, maintenance ticketing with photo attachments, and tenant announcements.',
      image: 'assets/images/realestate/realestate-portal.jpg'
    },
    {
      icon: 'agent-tools',
      title: 'Owner Analytics & Yield Reports',
      description: 'Financial dashboards tracking occupancy rates, rent collection status, maintenance expenses, and net property yields.',
      image: 'assets/images/realestate/realestate-tools.jpg'
    }
  ];

  benefits = [
    {
      title: 'Faster Lease Cycles',
      description: 'Streamlined virtual tours and digital lease signing reduce property vacancy durations significantly.'
    },
    {
      title: 'Centralized Operations',
      description: 'Eliminate scattered spreadsheets by combining leads, contracts, maintenance, and accounting in one platform.'
    },
    {
      title: 'Mobile Access for Field Agents',
      description: 'Agents can access listing details, log client notes, and verify appointments directly from their phones.'
    },
    {
      title: 'Automated Rent Invoicing',
      description: 'Recurring automated payment reminders and payment gateway integrations that keep cash flow predictable.'
    }
  ];
}
