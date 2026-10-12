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
      title: 'Sub-Second GPS Fleet Tracking',
      description: 'Live vehicle location streaming over WebSockets, historical route playback, speed telemetry, and geofencing alerts.',
      image: 'assets/images/logistics/logistics-tracking.jpg'
    },
    {
      icon: 'fleet',
      title: 'Fleet Maintenance & Vehicle Health',
      description: 'Preventive maintenance scheduling, odometer tracking, fuel consumption analysis, and vehicle inspection checklists.',
      image: 'assets/images/logistics/logistics-fleet.jpg'
    },
    {
      icon: 'dispatch',
      title: 'Automated Dispatch & Assignment',
      description: 'Intelligent matching algorithm assigning deliveries based on proximity, vehicle capacity, driver shift hours, and traffic conditions.',
      image: 'assets/images/logistics/logistics-dispatch.jpg'
    },
    {
      icon: 'route-optimization',
      title: 'Dynamic Route Optimization',
      description: 'Multi-stop route planning that factors in live road congestion and delivery priority windows to minimize fuel spend.',
      image: 'assets/images/logistics/logistics-route.jpg'
    },
    {
      icon: 'delivery',
      title: 'Digital Proof of Delivery (ePOD)',
      description: 'Driver mobile application with signature capture, photo verification, barcode scanning, and instant delivery receipt generation.',
      image: 'assets/images/logistics/logistics-delivery.jpg'
    },
    {
      icon: 'warehouse',
      title: 'Warehouse & Stock Synchronization',
      description: 'Real-time inventory picking, bin location tracking, cross-docking workflows, and shipment staging management.',
      image: 'assets/images/logistics/logistics-warehouse.jpg'
    }
  ];

  benefits = [
    {
      title: 'Total Operational Visibility',
      description: 'Real-time visibility over fleet movements, active delays, and driver performance from a single operations console.'
    },
    {
      title: 'Reduced Fuel & Mileage Costs',
      description: 'Optimized route grouping cuts unnecessary transit miles, idle engine hours, and vehicle wear-and-tear.'
    },
    {
      title: 'Reliable Driver Mobile Apps',
      description: 'Lightweight Android and iOS apps designed to function smoothly even in areas with intermittent cellular coverage.'
    },
    {
      title: 'Scalable Fleet Capacity',
      description: 'Architected to handle tens of thousands of simultaneous telemetry pings per second without lag.'
    }
  ];
}
