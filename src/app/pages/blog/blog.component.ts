import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../common/section-header/section-header.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Ensures styles are scoped to this component only
})
export class BlogComponent {
  backgroundImage = 'assets/images/home/lines-background3.jpg';
  selectedPost: any = null;
  isModalOpen = false;
  
  posts = [
    {
      title: 'How to Choose the Right Tech Stack for Your Startup',
      date: 'November 15, 2025',
      summary:
        'Key factors to consider such as scalability, hiring availability, and time-to-market when choosing technologies. Learn how to balance innovation with stability for your MVP and future growth.',
      category: 'Technology',
      readTime: '5 min read',
      image: 'assets/blog-tech-stack.jpg',
      briefExplanation: 'Choosing the right technology stack is crucial for startup success. Consider factors like team expertise, community support, scalability needs, and long-term maintenance. Popular stacks like MERN (MongoDB, Express, React, Node.js) offer flexibility, while established frameworks like .NET provide enterprise-grade stability. Evaluate your MVP requirements, budget constraints, and future growth plans before making a decision.',
    },
    {
      title: 'Benefits of Agile Software Development for SMEs',
      date: 'October 28, 2025',
      summary:
        'Why short sprints, frequent demos, and backlog grooming help small and medium businesses ship faster. Discover how agile methodologies reduce risk and improve ROI for growing companies.',
      category: 'Methodology',
      readTime: '6 min read',
      image: 'assets/blog-agile.jpg',
      briefExplanation: 'Agile methodology transforms how SMEs approach software development. By breaking projects into 2-4 week sprints, teams can adapt quickly to changing requirements. Daily standups ensure transparency, while sprint reviews allow stakeholders to see progress regularly. This iterative approach reduces risk, improves team morale, and delivers value faster than traditional waterfall methods.',
    },
    {
      title: 'Checklist Before Starting a Mobile App Project',
      date: 'September 10, 2025',
      summary:
        'From market research to monetization strategy, this checklist prepares you for a successful app launch. Cover all bases before development begins to avoid costly mistakes.',
      category: 'Mobile',
      readTime: '7 min read',
      image: 'assets/blog-mobile-checklist.jpg',
      briefExplanation: 'Before starting mobile app development, validate your idea through market research and competitor analysis. Define your target audience, create user personas, and map out user journeys. Plan your monetization strategy early—whether through in-app purchases, subscriptions, or ads. Ensure you have a clear MVP scope, budget allocation, and timeline. Don\'t forget to consider app store guidelines and prepare for beta testing.',
    },
    {
      title: 'Cloud Migration: Best Practices and Common Pitfalls',
      date: 'August 22, 2025',
      summary:
        'Learn how to migrate legacy applications to the cloud efficiently. We cover AWS, Azure, and GCP strategies, cost optimization, and security considerations.',
      category: 'Cloud',
      readTime: '8 min read',
      image: 'assets/blog-cloud.jpg',
      briefExplanation: 'Cloud migration requires careful planning to avoid common pitfalls. Start with a comprehensive assessment of your current infrastructure and identify which applications are cloud-ready. Choose the right cloud provider based on your needs: AWS for scalability, Azure for Microsoft integration, or GCP for data analytics. Implement proper security measures, optimize costs with reserved instances, and plan for data backup and disaster recovery.',
    },
    {
      title: 'UI/UX Design Principles for Enterprise Applications',
      date: 'July 18, 2025',
      summary:
        'Enterprise apps need intuitive interfaces that boost productivity. Explore design patterns, accessibility standards, and user testing strategies for B2B software.',
      category: 'Design',
      readTime: '6 min read',
      image: 'assets/blog-uiux.jpg',
      briefExplanation: 'Enterprise applications demand user-centered design that prioritizes efficiency and productivity. Focus on clear information architecture, consistent navigation patterns, and intuitive workflows. Implement accessibility standards (WCAG 2.1) to ensure all users can interact with your software. Conduct usability testing with real users, gather feedback iteratively, and maintain design consistency across all modules.',
    },
    {
      title: 'Building Scalable APIs: REST vs GraphQL',
      date: 'June 5, 2025',
      summary:
        'Compare REST and GraphQL architectures for modern applications. Understand when to use each approach, performance implications, and developer experience considerations.',
      category: 'Backend',
      readTime: '9 min read',
      image: 'assets/blog-api.jpg',
      briefExplanation: 'REST APIs are ideal for simple CRUD operations and have widespread support, making them easier to integrate. GraphQL excels when you need flexible data fetching, reducing over-fetching and under-fetching issues. REST uses standard HTTP methods and is stateless, while GraphQL provides a single endpoint with a query language. Choose REST for simplicity and caching needs, or GraphQL for complex data relationships and mobile applications.',
    },
  ];

  openModal(post: any) {
    this.selectedPost = post;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedPost = null;
    document.body.style.overflow = ''; // Restore scrolling
  }
}
