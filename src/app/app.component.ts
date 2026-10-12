import { Component, OnInit, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'BigBridz';
  showWhatsApp = false;

  private observer?: IntersectionObserver;
  private routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Re-initialize scroll reveal on route changes & scroll to top
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => {
          this.initScrollReveal();
        }, 120);
      });

    // Check initial scroll position
    this.checkScrollPosition();
  }

  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScrollPosition();
  }

  private checkScrollPosition(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showWhatsApp = scrollPosition > 250;
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initScrollReveal(): void {
    // Disconnect previous observer to prevent memory leaks
    if (this.observer) {
      this.observer.disconnect();
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Unobserve once revealed for peak scroll performance
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const selectors = [
      'section',
      '.card',
      '.section-padding > *',
      '.grid > *',
      'article'
    ];

    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        if (!el.classList.contains('revealed') && !el.classList.contains('no-scroll-reveal')) {
          this.observer?.observe(el);
        }
      });
    });

    this.applyStaggeredDelays();
  }

  private applyStaggeredDelays(): void {
    const gridContainers = document.querySelectorAll('.grid, [class*="grid-cols"]');
    gridContainers.forEach((container) => {
      const cards = container.querySelectorAll(':scope > .card, :scope > *');
      cards.forEach((card, index) => {
        if (!card.classList.contains('no-scroll-reveal')) {
          const delay = Math.min(index * 0.08, 0.4); // max 400ms delay, fast & snappy
          (card as HTMLElement).style.transitionDelay = `${delay}s`;
        }
      });
    });
  }
}
