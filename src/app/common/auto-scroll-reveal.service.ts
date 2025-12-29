import { Injectable, AfterViewInit, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoScrollRevealService implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private observedElements: Element[] = [];

  ngAfterViewInit(): void {
    // Wait for DOM to be ready
    setTimeout(() => {
      this.initScrollReveal();
    }, 100);
  }

  private initScrollReveal(): void {
    // Create intersection observer with enhanced settings
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optionally unobserve after animation for performance
            // this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // Trigger when 5% visible
        rootMargin: '0px 0px -100px 0px' // Start 100px before entering viewport
      }
    );

    // Observe all sections, cards, and common content blocks
    const selectors = [
      'section',
      '.card',
      '.section-padding > *',
      '.grid > *',
      '.flex > *',
      'article',
      '.animate-fade-up'
    ];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        // Only observe if not already revealed
        if (!el.classList.contains('revealed') && !el.classList.contains('no-scroll-reveal')) {
          this.observer?.observe(el);
          this.observedElements.push(el);
        }
      });
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observedElements.forEach(el => {
        this.observer?.unobserve(el);
      });
      this.observer.disconnect();
    }
  }
}

