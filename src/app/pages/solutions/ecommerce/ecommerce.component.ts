import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../common/section-header/section-header.component';
import { IconComponent } from '../../../common/icon/icon.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, IconComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {
  features = [
    {
      icon: 'storefront',
      title: 'Custom Storefronts',
      description: 'Beautiful, responsive online stores that reflect your brand identity and provide seamless shopping experiences across all devices.',
      image: 'assets/images/ecommerce/ecommerce-storefront.jpg'
    },
    {
      icon: 'marketplace',
      title: 'Marketplace Platforms',
      description: 'Multi-vendor marketplace solutions enabling multiple sellers to list and sell products through a unified platform.',
      image: 'assets/images/ecommerce/ecommerce-marketplace.jpg'
    },
    {
      icon: 'inventory',
      title: 'Inventory Management',
      description: 'Real-time inventory tracking, automated stock alerts, and comprehensive warehouse management systems.',
      image: 'assets/images/ecommerce/ecommerce-inventory.jpg'
    },
    {
      icon: 'payment',
      title: 'Payment Integration',
      description: 'Secure payment gateway integrations supporting multiple payment methods including cards, wallets, and UPI.',
      image: 'assets/images/ecommerce/ecommerce-payment.jpg'
    },
    {
      icon: 'fulfillment',
      title: 'Order Fulfillment',
      description: 'End-to-end order processing, shipping management, and delivery tracking systems for efficient operations.',
      image: 'assets/images/ecommerce/ecommerce-fulfillment.jpg'
    },
    {
      icon: 'dashboard',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting tools to track sales, customer behavior, and business performance.',
      image: 'assets/images/ecommerce/ecommerce-dashboard.jpg'
    }
  ];

  benefits = [
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growing product catalogs and increasing traffic without performance degradation.'
    },
    {
      title: 'Mobile-First Design',
      description: 'Optimized for mobile shopping with responsive designs and native mobile app options.'
    },
    {
      title: 'SEO Optimized',
      description: 'Built-in SEO features to improve search engine rankings and drive organic traffic.'
    },
    {
      title: 'Security & Compliance',
      description: 'PCI-DSS compliant payment processing and robust security measures to protect customer data.'
    }
  ];
}
