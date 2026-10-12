import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../common/section-header/section-header.component';
import { IconComponent } from '../../common/icon/icon.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, SectionHeaderComponent, IconComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    position: ['', Validators.required],
    experience: ['', Validators.required],
    resume: [''],
    coverLetter: [''],
  });

  submitted = false;
  submitting = false;

  positions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Lead end-to-end web application development using Angular/React, Node.js, and PostgreSQL. You will design system architecture, mentor junior developers, and participate in direct client sprint reviews.'
    },
    {
      title: 'Mobile App Developer (Flutter / React Native)',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Build high-performance iOS and Android applications. Focus on clean state management, smooth UI animations, offline SQLite caching, and native platform bridge integrations.'
    },
    {
      title: 'UI/UX & Product Designer',
      department: 'Design',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Create research-backed user flows, wireframes, and production-ready Figma design systems. Collaborate closely with engineers to ensure designs are feasible and executed accurately.'
    },
    {
      title: 'DevOps & Cloud Engineer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Manage automated CI/CD pipelines, Docker container orchestration, and cloud infrastructure on AWS/GCP. Maintain high availability, monitoring, and security hardening.'
    },
    {
      title: 'QA Engineer (Automation & Manual)',
      department: 'Quality Assurance',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Implement automated test suites using Cypress and Jest alongside exploratory testing. Champion code quality, edge-case coverage, and zero-regression deployments.'
    },
    {
      title: 'Technical Project Manager',
      department: 'Management',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Coordinate sprint planning, track delivery milestones, and facilitate direct, constructive communication between clients and engineering teams.'
    }
  ];

  benefits = [
    {
      icon: 'money',
      title: 'Competitive Compensation',
      description: 'Honest, market-leading pay aligned with your skill, contribution, and impact.'
    },
    {
      icon: 'health',
      title: 'Health & Wellness',
      description: 'Comprehensive medical insurance coverage for you and your dependents.'
    },
    {
      icon: 'learning',
      title: 'Learning & Certifications',
      description: 'Annual budget for courses, technical books, and cloud certifications.'
    },
    {
      icon: 'vacation',
      title: 'Flexible Work Culture',
      description: 'Sensible working hours and hybrid flexibility. We judge results, not seat time.'
    },
    {
      icon: 'target',
      title: 'Clear Career Progression',
      description: 'Regular engineering reviews and clear criteria for advancement into lead roles.'
    },
    {
      icon: 'team',
      title: 'Modern Engineering Standards',
      description: 'Work with clean Git workflows, automated CI/CD, and sensible architecture.'
    }
  ];

  constructor(private readonly fb: FormBuilder) {}

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    
    this.submitting = true;
    const formData = this.form.value;
    
    // Create mailto link with application data
    const subject = encodeURIComponent(`Job Application: ${formData.position}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Position: ${formData.position}\n` +
      `Experience: ${formData.experience}\n\n` +
      `Cover Letter:\n${formData.coverLetter || 'Not provided'}\n\n` +
      `Resume Link: ${formData.resume || 'Not provided'}`
    );
    
    // Simulated application submission with clean feedback
    setTimeout(() => {
      this.submitted = true;
      this.submitting = false;
      this.form.reset();
      console.log('Job application successfully captured:', formData);
    }, 700);
  }
}

