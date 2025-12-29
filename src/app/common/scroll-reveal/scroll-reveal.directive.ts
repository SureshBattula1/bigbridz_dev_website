import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Create intersection observer for scroll animations with enhanced sensitivity
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optional: Unobserve after animation to improve performance
            // this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // Trigger earlier (5% visible)
        rootMargin: '0px 0px -100px 0px' // Start animation 100px before element enters viewport
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

