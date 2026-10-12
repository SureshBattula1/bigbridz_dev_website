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
      title: 'Custom High-Speed Storefronts',
      description: 'Sub-second page load times with headless or modular architectures. Optimized catalog navigation, instant search filtering, and mobile-first checkout flows.',
      image: 'assets/images/ecommerce/ecommerce-storefront.jpg'
    },
    {
      icon: 'marketplace',
      title: 'Multi-Vendor Marketplaces',
      description: 'Unified multi-seller platforms featuring merchant onboarding, split payment disbursements, commission tracking, and individual vendor dashboards.',
      image: 'assets/images/ecommerce/ecommerce-marketplace.jpg'
    },
    {
      icon: 'inventory',
      title: 'Multi-Warehouse Inventory Sync',
      description: 'Real-time stock reservation, low-inventory triggers, automated reorder notifications, and cross-channel inventory parity.',
      image: 'assets/images/ecommerce/ecommerce-inventory.jpg'
    },
    {
      icon: 'payment',
      title: 'Payment Gateway & Tokenization',
      description: 'Direct integrations with Stripe, Razorpay, PayPal, and UPI. PCI-DSS compliant payment tokenization and automated webhook reconciliation.',
      image: 'assets/images/ecommerce/ecommerce-payment.jpg'
    },
    {
      icon: 'fulfillment',
      title: 'Order Processing & Shipping Automation',
      description: 'End-to-end order state machines, automated shipping label generation, courier API tracking, and return merchandise authorization (RMA).',
      image: 'assets/images/ecommerce/ecommerce-fulfillment.jpg'
    },
    {
      icon: 'dashboard',
      title: 'Sales Telemetry & Conversion Analytics',
      description: 'Detailed analytics on cart abandonment, average order value (AOV), customer lifetime value (LTV), and real-time revenue dashboards.',
      image: 'assets/images/ecommerce/ecommerce-dashboard.jpg'
    }
  ];

  benefits = [
    {
      title: 'High Concurrency & Uptime',
      description: 'Built to handle sudden flash-sale traffic spikes and seasonal demand surges with zero checkout degradation.'
    },
    {
      title: 'Mobile-First Optimization',
      description: 'PWA and native mobile experiences that eliminate checkout friction and increase mobile conversion rates.'
    },
    {
      title: 'Technical SEO & Schema Markup',
      description: 'Built-in OpenGraph, JSON-LD product schemas, and clean canonical URLs for high organic search indexing.'
    },
    {
      title: 'Fraud Mitigation & PCI Compliance',
      description: 'Encrypted payment tokenization, address verification (AVS), and 3D Secure authentication to minimize fraud chargebacks.'
    }
  ];
}
