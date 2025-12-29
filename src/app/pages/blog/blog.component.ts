import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../common/section-header/section-header.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  posts = [
    {
      title: 'How to Choose the Right Tech Stack for Your Startup',
      date: 'November 15, 2025',
      summary:
        'Key factors to consider such as scalability, hiring availability, and time-to-market when choosing technologies. Learn how to balance innovation with stability for your MVP and future growth.',
      category: 'Technology',
      readTime: '5 min read',
      image: 'assets/blog-tech-stack.jpg',
    },
    {
      title: 'Benefits of Agile Software Development for SMEs',
      date: 'October 28, 2025',
      summary:
        'Why short sprints, frequent demos, and backlog grooming help small and medium businesses ship faster. Discover how agile methodologies reduce risk and improve ROI for growing companies.',
      category: 'Methodology',
      readTime: '6 min read',
      image: 'assets/blog-agile.jpg',
    },
    {
      title: 'Checklist Before Starting a Mobile App Project',
      date: 'September 10, 2025',
      summary:
        'From market research to monetization strategy, this checklist prepares you for a successful app launch. Cover all bases before development begins to avoid costly mistakes.',
      category: 'Mobile',
      readTime: '7 min read',
      image: 'assets/blog-mobile-checklist.jpg',
    },
    {
      title: 'Cloud Migration: Best Practices and Common Pitfalls',
      date: 'August 22, 2025',
      summary:
        'Learn how to migrate legacy applications to the cloud efficiently. We cover AWS, Azure, and GCP strategies, cost optimization, and security considerations.',
      category: 'Cloud',
      readTime: '8 min read',
      image: 'assets/blog-cloud.jpg',
    },
    {
      title: 'UI/UX Design Principles for Enterprise Applications',
      date: 'July 18, 2025',
      summary:
        'Enterprise apps need intuitive interfaces that boost productivity. Explore design patterns, accessibility standards, and user testing strategies for B2B software.',
      category: 'Design',
      readTime: '6 min read',
      image: 'assets/blog-uiux.jpg',
    },
    {
      title: 'Building Scalable APIs: REST vs GraphQL',
      date: 'June 5, 2025',
      summary:
        'Compare REST and GraphQL architectures for modern applications. Understand when to use each approach, performance implications, and developer experience considerations.',
      category: 'Backend',
      readTime: '9 min read',
      image: 'assets/blog-api.jpg',
    },
  ];
}
