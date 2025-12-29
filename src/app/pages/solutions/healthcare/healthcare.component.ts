import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../common/section-header/section-header.component';
import { IconComponent } from '../../../common/icon/icon.component';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, IconComponent],
  templateUrl: './healthcare.component.html',
  styleUrl: './healthcare.component.scss'
})
export class HealthcareComponent {
  features = [
    {
      icon: 'calendar',
      title: 'Appointment Scheduling',
      description: 'Intelligent appointment booking systems with automated reminders, cancellations, and rescheduling capabilities.',
      image: 'assets/images/healthcare/healthcare-appointment.jpg'
    },
    {
      icon: 'telemedicine',
      title: 'Telemedicine Platform',
      description: 'Secure video consultation platforms enabling remote patient care with HIPAA-compliant communication.',
      image: 'assets/images/healthcare/healthcare-telemedicine.jpg'
    },
    {
      icon: 'ehr',
      title: 'EHR Management',
      description: 'Electronic Health Records systems for comprehensive patient data management and seamless information sharing.',
      image: 'assets/images/healthcare/healthcare-ehr.jpg'
    },
    {
      icon: 'pharmacy',
      title: 'Pharmacy Integration',
      description: 'Pharmacy management systems with prescription tracking, inventory management, and delivery coordination.',
      image: 'assets/images/healthcare/healthcare-pharmacy.jpg'
    },
    {
      icon: 'patient',
      title: 'Patient Portal',
      description: 'Patient-facing portals for accessing medical records, test results, prescriptions, and appointment history.',
      image: 'assets/images/healthcare/healthcare-portal.jpg'
    },
    {
      icon: 'security',
      title: 'HIPAA Compliance',
      description: 'Fully compliant healthcare solutions with robust security measures and data protection protocols.',
      image: 'assets/images/healthcare/healthcare-compliance.jpg'
    }
  ];

  benefits = [
    {
      title: 'HIPAA Compliant',
      description: 'All solutions built with healthcare compliance standards in mind, ensuring patient data security.'
    },
    {
      title: 'Interoperability',
      description: 'Seamless integration with existing healthcare systems and medical devices.'
    },
    {
      title: 'Patient-Centric',
      description: 'Focus on improving patient experience with intuitive interfaces and accessible care options.'
    },
    {
      title: 'Scalable Solutions',
      description: 'Designed to grow with your practice, from single clinics to large hospital networks.'
    }
  ];
}
