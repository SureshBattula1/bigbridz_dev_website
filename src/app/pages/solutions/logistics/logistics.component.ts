import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../common/section-header/section-header.component';
import { IconComponent } from '../../../common/icon/icon.component';

@Component({
  selector: 'app-logistics',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, IconComponent],
  templateUrl: './logistics.component.html',
  styleUrl: './logistics.component.scss'
})
export class LogisticsComponent {
  features = [
    {
      icon: 'tracking',
      title: 'Real-Time Tracking',
      description: 'GPS-based tracking systems for real-time shipment location and delivery status updates.',
      image: 'assets/images/logistics/logistics-tracking.jpg'
    },
    {
      icon: 'fleet',
      title: 'Fleet Management',
      description: 'Comprehensive fleet management solutions for vehicle tracking, maintenance, and driver management.',
      image: 'assets/images/logistics/logistics-fleet.jpg'
    },
    {
      icon: 'dispatch',
      title: 'Dispatch System',
      description: 'Automated dispatch systems with intelligent route assignment and delivery optimization.',
      image: 'assets/images/logistics/logistics-dispatch.jpg'
    },
    {
      icon: 'route-optimization',
      title: 'Route Optimization',
      description: 'AI-powered route optimization to reduce delivery time and fuel costs.',
      image: 'assets/images/logistics/logistics-route.jpg'
    },
    {
      icon: 'delivery',
      title: 'Delivery Management',
      description: 'End-to-end delivery management from order placement to final delivery confirmation.',
      image: 'assets/images/logistics/logistics-delivery.jpg'
    },
    {
      icon: 'warehouse',
      title: 'Warehouse Management',
      description: 'Complete warehouse management systems for inventory, picking, and shipping operations.',
      image: 'assets/images/logistics/logistics-warehouse.jpg'
    }
  ];

  benefits = [
    {
      title: 'Real-Time Visibility',
      description: 'Track shipments and vehicles in real-time for better operational control.'
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce fuel costs and improve efficiency with intelligent route planning.'
    },
    {
      title: 'Scalable Solutions',
      description: 'Solutions that scale from small delivery operations to large logistics networks.'
    },
    {
      title: 'Mobile Apps',
      description: 'Driver and customer mobile apps for seamless delivery experience.'
    }
  ];
}
