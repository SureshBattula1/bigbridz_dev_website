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
      title: 'Online Ordering',
      description: 'Complete online ordering systems with menu management, customization options, and real-time order tracking.',
      image: 'assets/images/food/food-ordering.jpg'
    },
    {
      icon: 'table-reservation',
      title: 'Table Reservation',
      description: 'Smart table reservation systems with calendar management and automated confirmations.',
      image: 'assets/images/food/food-reservation.jpg'
    },
    {
      icon: 'kitchen-display',
      title: 'Kitchen Display System',
      description: 'Digital kitchen display systems for efficient order management and preparation tracking.',
      image: 'assets/images/food/food-kitchen.jpg'
    },
    {
      icon: 'delivery-management',
      title: 'Delivery Management',
      description: 'End-to-end delivery management from order placement to customer delivery confirmation.',
      image: 'assets/images/food/food-delivery.jpg'
    },
    {
      icon: 'loyalty',
      title: 'Loyalty Programs',
      description: 'Customer loyalty and rewards programs to increase retention and repeat orders.',
      image: 'assets/images/food/food-loyalty.jpg'
    },
    {
      icon: 'menu-management',
      title: 'Menu Management',
      description: 'Dynamic menu management systems with pricing, availability, and customization options.',
      image: 'assets/images/food/food-menu.jpg'
    }
  ];

  benefits = [
    {
      title: 'Increased Orders',
      description: 'Streamlined ordering process leads to higher conversion rates and order volumes.'
    },
    {
      title: 'Operational Efficiency',
      description: 'Automated systems reduce manual work and improve kitchen and delivery operations.'
    },
    {
      title: 'Customer Engagement',
      description: 'Loyalty programs and personalized experiences increase customer retention.'
    },
    {
      title: 'Multi-Channel Support',
      description: 'Support for online, mobile, and in-restaurant ordering channels.'
    }
  ];
}
