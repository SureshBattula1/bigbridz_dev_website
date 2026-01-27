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
      title: 'Booking Engine',
      description: 'Advanced booking systems for hotels, flights, tours, and travel packages with real-time availability.',
      image: 'assets/images/travel/travel-booking.jpg'
    },
    {
      icon: 'hotel-management',
      title: 'Hotel Management',
      description: 'Complete hotel management systems for reservations, check-in/out, room management, and billing.',
      image: 'assets/images/travel/travel-hotel.jpg'
    },
    {
      icon: 'itinerary',
      title: 'Itinerary Management',
      description: 'Dynamic itinerary creation and management tools for travelers and travel agents.',
      image: 'assets/images/travel/travel-itinerary.jpg'
    },
    {
      icon: 'review-platform',
      title: 'Review Platform',
      description: 'Integrated review and rating systems to build trust and improve service quality.',
      image: 'assets/images/travel/travel-review.jpg'
    },
    {
      icon: 'customer-engagement',
      title: 'Customer Engagement',
      description: 'Customer engagement tools including loyalty programs, personalized recommendations, and special offers.',
      image: 'assets/images/travel/travel-engagement.jpg'
    },
    {
      icon: 'travel-planning',
      title: 'Travel Planning',
      description: 'Comprehensive travel planning tools with destination guides, weather, and local information.',
      image: 'assets/images/travel/travel-planning.jpg'
    }
  ];

  benefits = [
    {
      title: 'Seamless Bookings',
      description: 'User-friendly booking systems that convert visitors into customers with ease.'
    },
    {
      title: 'Multi-Channel Support',
      description: 'Support for web, mobile, and API integrations with third-party platforms.'
    },
    {
      title: 'Real-Time Updates',
      description: 'Real-time availability, pricing, and booking confirmations for better customer experience.'
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track bookings, revenue, and customer behavior patterns.'
    }
  ];
}
