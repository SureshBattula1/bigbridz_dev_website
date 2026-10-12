import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoScrollRevealService implements OnDestroy {
  private observer?: IntersectionObserver;
  private observedElements: Element[] = [];

  public initScrollReveal(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    if (this.observer) {
      this.observer.disconnect();
      this.observedElements = [];
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const selectors = [
      'section:not(.hero-gradient)',
      '.card',
      'article'
    ];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        if (!el.classList.contains('revealed') && !el.classList.contains('no-scroll-reveal')) {
          this.observer?.observe(el);
          this.observedElements.push(el);
        }
      });
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observedElements = [];
    }
  }
}
