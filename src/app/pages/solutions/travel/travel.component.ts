import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../common/section-header/section-header.component';
import { IconComponent } from '../../../common/icon/icon.component';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, IconComponent],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.scss'
})
export class TravelComponent {
  features = [
    {
      icon: 'booking-engine',
      title: 'Real-Time Travel Booking Engine',
      description: 'Fast, multi-attribute flight, hotel, and tour package booking with live availability checks and instant confirmation.',
      image: 'assets/images/travel/travel-booking.jpg'
    },
    {
      icon: 'hotel-management',
      title: 'Hotel & Room Inventory Management',
      description: 'Property reservation dashboard, room rate yield management, check-in/check-out logs, and housekeeping status.',
      image: 'assets/images/travel/travel-hotel.jpg'
    },
    {
      icon: 'itinerary',
      title: 'Dynamic Itinerary Builder',
      description: 'Interactive day-by-day itinerary planners with map route previews, activity booking, and PDF itinerary exports.',
      image: 'assets/images/travel/travel-itinerary.jpg'
    },
    {
      icon: 'review-platform',
      title: 'Verified Traveler Review System',
      description: 'Authentic review and rating system with photo uploads and moderation tools to build customer trust.',
      image: 'assets/images/travel/travel-review.jpg'
    },
    {
      icon: 'customer-engagement',
      title: 'Guest Loyalty & Promotions',
      description: 'Tiered rewards programs, promo code engines, and automated post-trip re-engagement emails.',
      image: 'assets/images/travel/travel-engagement.jpg'
    },
    {
      icon: 'travel-planning',
      title: 'Multi-Currency Global Checkout',
      description: 'Localized payment processing supporting international credit cards, multi-currency display, and automated tax calculations.',
      image: 'assets/images/travel/travel-planning.jpg'
    }
  ];

  benefits = [
    {
      title: 'Frictionless Booking Conversion',
      description: 'Clean, step-by-step checkout flows optimized for mobile travelers to minimize booking abandonment.'
    },
    {
      title: 'Channel Manager & API Integration',
      description: 'Connect seamlessly with global distribution systems (GDS) and hotel channel managers without double-booking risks.'
    },
    {
      title: 'High-Traffic Resilience',
      description: 'Fast caching layers ensure sub-second search results during seasonal travel promotions and holiday spikes.'
    },
    {
      title: 'Comprehensive Revenue Telemetry',
      description: 'Track booking conversion funnels, average stay values, cancellation rates, and seasonal travel patterns.'
    }
  ];
}
