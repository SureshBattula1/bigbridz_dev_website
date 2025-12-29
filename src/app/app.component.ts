import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AutoScrollRevealService } from './common/auto-scroll-reveal.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AutoScrollRevealService]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'BigBridz';

  constructor(
    private router: Router,
    private scrollRevealService: AutoScrollRevealService
  ) {}

  ngOnInit(): void {
    // Re-initialize scroll reveal on route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          this.initScrollReveal();
        }, 100);
      });
  }

  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    // Wait for DOM to be ready
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      // Observe all sections, cards, and content blocks
      const selectors = [
        'section',
        '.card',
        '.section-padding > *',
        '.grid > *',
        '.flex > *',
        'article'
      ];

      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          if (!el.classList.contains('revealed') && !el.classList.contains('no-scroll-reveal')) {
            observer.observe(el);
          }
        });
      });

      // Apply staggered delays to cards in grids and flex containers
      this.applyStaggeredDelays();
    }, 150);
  }

  private applyStaggeredDelays(): void {
    // Apply delays to cards in grid containers
    const gridContainers = document.querySelectorAll('.grid, [class*="grid-cols"]');
    gridContainers.forEach((container) => {
      const cards = container.querySelectorAll(':scope > .card, :scope > *');
      cards.forEach((card, index) => {
        if (!card.classList.contains('no-scroll-reveal')) {
          const delay = index * 0.15; // 150ms delay between each card (slower, smoother)
          (card as HTMLElement).style.transitionDelay = `${delay}s`;
        }
      });
    });

    // Apply delays to cards in flex containers
    const flexContainers = document.querySelectorAll('.flex, [class*="flex"]');
    flexContainers.forEach((container) => {
      const cards = container.querySelectorAll(':scope > .card, :scope > *');
      cards.forEach((card, index) => {
        if (!card.classList.contains('no-scroll-reveal') && !(card as HTMLElement).style.transitionDelay) {
          const delay = index * 0.15; // 150ms delay (slower, smoother)
          (card as HTMLElement).style.transitionDelay = `${delay}s`;
        }
      });
    });

    // Apply delays to nested cards (subcards)
    const parentCards = document.querySelectorAll('.card');
    parentCards.forEach((parentCard) => {
      const subCards = parentCard.querySelectorAll(':scope > .card, :scope .card');
      subCards.forEach((subCard, index) => {
        if (!subCard.classList.contains('no-scroll-reveal') && !(subCard as HTMLElement).style.transitionDelay) {
          const delay = index * 0.2; // 200ms delay for nested cards (slower, smoother)
          (subCard as HTMLElement).style.transitionDelay = `${delay}s`;
        }
      });
    });

    // Apply delays to grid items within cards
    const cardsWithGrids = document.querySelectorAll('.card .grid, .card [class*="grid-cols"]');
    cardsWithGrids.forEach((grid) => {
      const items = grid.querySelectorAll(':scope > *');
      items.forEach((item, index) => {
        if (!item.classList.contains('no-scroll-reveal') && !(item as HTMLElement).style.transitionDelay) {
          const delay = index * 0.15; // 150ms delay (slower, smoother)
          (item as HTMLElement).style.transitionDelay = `${delay}s`;
        }
      });
    });
  }
}
