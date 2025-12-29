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
      title: 'Property Listings',
      description: 'Comprehensive property listing platforms with advanced search, filters, and detailed property information.',
      image: 'assets/images/realestate/realestate-listings.jpg'
    },
    {
      icon: 'crm',
      title: 'CRM for Agents',
      description: 'Customer relationship management systems for real estate agents to manage leads and clients.',
      image: 'assets/images/realestate/realestate-crm.jpg'
    },
    {
      icon: 'virtual-tour',
      title: 'Virtual Tours',
      description: '360-degree virtual tour integration for immersive property viewing experiences.',
      image: 'assets/images/realestate/realestate-tours.jpg'
    },
    {
      icon: 'document-management',
      title: 'Document Management',
      description: 'Secure document management systems for contracts, agreements, and property documents.',
      image: 'assets/images/realestate/realestate-documents.jpg'
    },
    {
      icon: 'tenant-portal',
      title: 'Tenant Portal',
      description: 'Tenant and landlord portals for rent payments, maintenance requests, and communication.',
      image: 'assets/images/realestate/realestate-portal.jpg'
    },
    {
      icon: 'agent-tools',
      title: 'Agent Tools',
      description: 'Comprehensive tools for real estate agents including lead management and analytics.',
      image: 'assets/images/realestate/realestate-tools.jpg'
    }
  ];

  benefits = [
    {
      title: 'Property Showcase',
      description: 'Beautiful property listings with high-quality images and virtual tours.'
    },
    {
      title: 'Lead Management',
      description: 'Advanced CRM systems to track and convert property inquiries into sales.'
    },
    {
      title: 'Mobile Apps',
      description: 'Native mobile apps for agents and customers for on-the-go property management.'
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track property views, leads, and conversion rates.'
    }
  ];
}
