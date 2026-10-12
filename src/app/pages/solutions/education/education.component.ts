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
      title: 'Course Management & LMS',
      description: 'Structured course creation with video streaming, downloadable resources, prerequisite track management, and student milestone tracking.',
      image: 'assets/images/education/education-lms.jpg'
    },
    {
      icon: 'learning',
      title: 'Mobile-First Learning Apps',
      description: 'Offline course video playback, push notifications for assignment deadlines, and bite-sized learning interfaces for mobile devices.',
      image: 'assets/images/education/education-mobile.jpg'
    },
    {
      icon: 'assessment',
      title: 'Assessment & Examination Engines',
      description: 'Timed online tests, question bank randomization, anti-cheat tab-monitoring, and automated grading pipelines.',
      image: 'assets/images/education/education-assessment.jpg'
    },
    {
      icon: 'virtual-classroom',
      title: 'Interactive Virtual Classrooms',
      description: 'Integrated video conferencing with real-time whiteboards, breakout rooms, screen sharing, and live Q&A chat.',
      image: 'assets/images/education/education-classroom.jpg'
    },
    {
      icon: 'student-engagement',
      title: 'Gamification & Retention Drivers',
      description: 'Badges, leaderboards, streak tracking, and interactive challenges that drive course completion rates.',
      image: 'assets/images/education/education-engagement.jpg'
    },
    {
      icon: 'certification',
      title: 'Tamper-Proof Certificate Verification',
      description: 'Automated digital certificate generation with verifiable QR codes and LinkedIn social sharing integration.',
      image: 'assets/images/education/education-certification.jpg'
    }
  ];

  benefits = [
    {
      title: 'High-Concurrency Video Streaming',
      description: 'Adaptive bitrate streaming that adjusts video resolution dynamically to match student bandwidth.'
    },
    {
      title: 'Multi-Device Accessibility',
      description: 'Responsive web and mobile interfaces that work seamlessly across smartphones, tablets, and budget laptops.'
    },
    {
      title: 'Actionable Learning Analytics',
      description: 'Instructor dashboards tracking student drop-off points, quiz failure rates, and module engagement.'
    },
    {
      title: 'Multi-Tenant School Infrastructure',
      description: 'Supports individual course creators, corporate training academies, and multi-campus universities.'
    }
  ];
}
