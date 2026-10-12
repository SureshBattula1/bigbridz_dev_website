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
      title: 'Intelligent Appointment Scheduling',
      description: 'Multi-provider calendar coordination with automated SMS/WhatsApp reminders, conflict prevention, and direct calendar synchronization.',
      image: 'assets/images/healthcare/healthcare-appointment.jpg'
    },
    {
      icon: 'telemedicine',
      title: 'Telemedicine Video Consultations',
      description: 'Encrypted, WebRTC-powered video and audio consultations with in-session prescription writing and clinical note taking.',
      image: 'assets/images/healthcare/healthcare-telemedicine.jpg'
    },
    {
      icon: 'ehr',
      title: 'Electronic Health Records (EHR)',
      description: 'Comprehensive patient medical history, diagnostic reports, and allergy documentation with granular role-based access control.',
      image: 'assets/images/healthcare/healthcare-ehr.jpg'
    },
    {
      icon: 'pharmacy',
      title: 'Digital Pharmacy & Prescription Routing',
      description: 'Electronic prescription generation with automated pharmacy dispatch, refill tracking, and dosage instruction logs.',
      image: 'assets/images/healthcare/healthcare-pharmacy.jpg'
    },
    {
      icon: 'patient',
      title: 'Patient Self-Service Portal',
      description: 'Secure mobile and web portal for patients to view diagnostic lab results, manage past invoices, and message medical staff.',
      image: 'assets/images/healthcare/healthcare-portal.jpg'
    },
    {
      icon: 'security',
      title: 'HIPAA-Aligned Security Architecture',
      description: 'End-to-end data encryption at rest and in transit (AES-256), immutable audit logs, and automatic session timeouts.',
      image: 'assets/images/healthcare/healthcare-compliance.jpg'
    }
  ];

  benefits = [
    {
      title: 'Regulatory & Privacy Compliance',
      description: 'Architected around strict HIPAA and data protection standards with zero unauthorized access vulnerabilities.'
    },
    {
      title: 'Clinical System Interoperability',
      description: 'HL7 and FHIR-compliant interfaces that connect smoothly with third-party hospital databases and diagnostic lab APIs.'
    },
    {
      title: 'Intuitive Patient Experience',
      description: 'Clear, accessible interfaces designed for patients of all ages, cutting down on missed consultations.'
    },
    {
      title: 'Fault-Tolerant Availability',
      description: 'Redundant cloud infrastructure ensuring reliable 24/7 access to critical medical records.'
    }
  ];
}
