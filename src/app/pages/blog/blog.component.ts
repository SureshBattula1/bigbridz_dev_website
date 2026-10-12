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
      title: 'Choosing a Tech Stack in 2026: Trade-offs Over Hype',
      date: 'November 15, 2025',
      summary:
        'Why picking battle-tested frameworks like Angular, React, and Node.js often beats chasing the latest trend. How to evaluate hiring pools, ecosystem maturity, and maintenance costs.',
      category: 'Architecture',
      readTime: '6 min read',
      image: 'assets/blog-tech-stack.jpg',
      briefExplanation: 'The biggest hidden cost in software is not initial development—it is maintenance. When selecting a technology stack, teams must weigh community maturity, long-term hiring availability, and tooling stability over social media hype. We break down the real production trade-offs between monolithic backends and microservices, relational databases vs document stores, and how to pick a stack that supports your five-year roadmap.',
    },
    {
      title: 'Why Two-Week Sprints Fail Without Strict Scope Scoping',
      date: 'October 28, 2025',
      summary:
        'Practical engineering management strategies: defining a strict Definition of Done, managing client expectations, and preventing mid-sprint scope creep.',
      category: 'Methodology',
      readTime: '5 min read',
      image: 'assets/blog-agile.jpg',
      briefExplanation: 'Agile sprints only succeed when the scope of work is defended vigorously. When unvetted requests are added mid-sprint, code quality drops and delivery dates slip. In this article, we share our internal sprint framework: strict backlog grooming, transparent estimation poker, staging demos every Friday, and continuous client communication that keeps priorities crystal clear.',
    },
    {
      title: 'Mobile Architecture Checklist: What to Decide Before Writing Code',
      date: 'September 10, 2025',
      summary:
        'From offline-first SQLite caching and push notification services to state management and app store compliance: what you must architect before your first commit.',
      category: 'Mobile',
      readTime: '7 min read',
      image: 'assets/blog-mobile-checklist.jpg',
      briefExplanation: 'Rushing into mobile development without answering fundamental architectural questions leads to massive refactors. This engineering checklist covers: offline state sync, API versioning strategies, deep linking handling, battery consumption optimization, biometric authentication, and automated app store release pipelines for iOS and Android.',
    },
    {
      title: 'Pragmatic Cloud Migration: Moving Monoliths Without Downtime',
      date: 'August 22, 2025',
      summary:
        'A step-by-step technical guide to database replication, containerization with Docker, and canary routing to modernize legacy workloads safely.',
      category: 'DevOps',
      readTime: '8 min read',
      image: 'assets/blog-cloud.jpg',
      briefExplanation: 'Migrating legacy systems to cloud environments does not have to be an all-or-nothing gamble. We explore the strangler fig pattern, incremental database synchronization, health-check automation, and reverse proxy routing that enable zero-downtime cutovers and quick rollback safety nets.',
    },
    {
      title: 'Designing B2B Enterprise UI: Productivity Over Flash',
      date: 'July 18, 2025',
      summary:
        'Consumer UI patterns fail in data-heavy enterprise environments. How to design high-density data tables, keyboard shortcuts, and intuitive forms that speed up daily work.',
      category: 'UI/UX',
      readTime: '6 min read',
      image: 'assets/blog-uiux.jpg',
      briefExplanation: 'Enterprise users use software for hours every day. Flashy animations and excessive white space often slow them down. We discuss designing for efficiency: optimizing tabular data viewing, bulk action workflows, clear status iconography, inline data validation, and minimizing repetitive modal dialogs.',
    },
    {
      title: 'REST vs GraphQL in Production: What We Learned from Real Client Apps',
      date: 'June 5, 2025',
      summary:
        'An honest comparison of REST and GraphQL in production environments: caching trade-offs, network overhead, backend authorization complexity, and when REST remains the superior choice.',
      category: 'Backend',
      readTime: '8 min read',
      image: 'assets/blog-api.jpg',
      briefExplanation: 'While GraphQL offers unmatched query flexibility for mobile clients, it introduces significant backend complexity around HTTP caching, query depth DOS protection, and complex authorization layers. We share practical lessons on when GraphQL is genuinely worth the overhead and when a clean, OpenAPI-documented REST architecture delivers better developer velocity.',
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
