import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../common/section-header/section-header.component';
import { IconComponent } from '../../../common/icon/icon.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, IconComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  features = [
    {
      icon: 'online-ordering',
      title: 'Direct Online Ordering System',
      description: 'Zero-commission brand storefront with item customization, modifier groups, delivery address verification, and instant checkout.',
      image: 'assets/images/food/food-ordering.jpg'
    },
    {
      icon: 'table-reservation',
      title: 'Table Reservation & Waitlist Engine',
      description: 'Real-time dining room floor plan management, guest table booking, SMS arrival notifications, and turn-time tracking.',
      image: 'assets/images/food/food-reservation.jpg'
    },
    {
      icon: 'kitchen-display',
      title: 'Kitchen Display System (KDS)',
      description: 'Digital kitchen ticket screens that route orders by station (grill, bar, fry), color-code wait times, and eliminate lost paper tickets.',
      image: 'assets/images/food/food-kitchen.jpg'
    },
    {
      icon: 'delivery-management',
      title: 'Automated Delivery Dispatch',
      description: 'Driver assignment automation, live delivery route tracking, and automated SMS tracking links sent to hungry customers.',
      image: 'assets/images/food/food-delivery.jpg'
    },
    {
      icon: 'loyalty',
      title: 'Customer Loyalty & Rewards',
      description: 'Points per dollar programs, digital punch cards, and personalized discount codes that boost repeat dining visits.',
      image: 'assets/images/food/food-loyalty.jpg'
    },
    {
      icon: 'menu-management',
      title: 'Multi-Location Menu Management',
      description: 'Centralized menu updates that propagate instantly across web, mobile apps, and third-party delivery channels.',
      image: 'assets/images/food/food-menu.jpg'
    }
  ];

  benefits = [
    {
      title: 'Higher Profit Margins',
      description: 'Drive direct online orders and avoid high third-party aggregator commissions.'
    },
    {
      title: 'Reduced Kitchen Ticket Times',
      description: 'Digital order routing straight to kitchen prep stations prevents order miscommunications and speeds up food prep.'
    },
    {
      title: 'Multi-Store Scalability',
      description: 'Manage menus, pricing overrides, and staff permissions across multiple restaurant branches from a single admin panel.'
    },
    {
      title: 'Actionable Menu Analytics',
      description: 'Identify top-selling items, high-margin combos, and slow-moving inventory to make smarter purchasing decisions.'
    }
  ];
}
