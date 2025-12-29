import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../common/section-header/section-header.component';
import { IconComponent } from '../../../common/icon/icon.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, IconComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  features = [
    {
      icon: 'lms',
      title: 'Learning Management System',
      description: 'Comprehensive LMS platforms for course creation, content delivery, and student progress tracking.',
      image: 'assets/images/education/education-lms.jpg'
    },
    {
      icon: 'learning',
      title: 'Mobile Learning Apps',
      description: 'Native mobile applications enabling students to learn on-the-go with offline content access.',
      image: 'assets/images/education/education-mobile.jpg'
    },
    {
      icon: 'assessment',
      title: 'Assessment Tools',
      description: 'Advanced testing and assessment platforms with automated grading and detailed analytics.',
      image: 'assets/images/education/education-assessment.jpg'
    },
    {
      icon: 'virtual-classroom',
      title: 'Virtual Classrooms',
      description: 'Interactive online classrooms with video conferencing, screen sharing, and collaborative tools.',
      image: 'assets/images/education/education-classroom.jpg'
    },
    {
      icon: 'student-engagement',
      title: 'Student Engagement',
      description: 'Gamification and engagement features to boost student participation and learning outcomes.',
      image: 'assets/images/education/education-engagement.jpg'
    },
    {
      icon: 'certification',
      title: 'Certification Management',
      description: 'Digital certificate generation, verification, and management systems for course completion.',
      image: 'assets/images/education/education-certification.jpg'
    }
  ];

  benefits = [
    {
      title: 'Scalable Platform',
      description: 'Support from individual courses to enterprise-level educational institutions.'
    },
    {
      title: 'Interactive Learning',
      description: 'Engaging content delivery with multimedia support and interactive assessments.'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics to track student progress and learning outcomes.'
    },
    {
      title: 'Multi-Device Support',
      description: 'Accessible across all devices with responsive design and native mobile apps.'
    }
  ];
}
