import { Component, OnDestroy, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IconComponent } from '../../common/icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy {
  private router = inject(Router);
  private navSub?: Subscription;

  showSolutionsDropdown = false;
  showMobileMenu = false;
  showMobileSolutions = false;

  solutions = [
    { title: 'E-commerce & Retail', icon: 'ecommerce', route: 'solutions/ecommerce' },
    { title: 'Healthcare & Wellness', icon: 'healthcare', route: 'solutions/healthcare' },
    { title: 'Education & E-Learning', icon: 'education', route: 'solutions/education' },
    { title: 'Logistics & On-demand', icon: 'logistics', route: 'solutions/logistics' },
    { title: 'Finance & Fintech', icon: 'finance', route: 'solutions/finance' },
    { title: 'Real Estate & Property', icon: 'realestate', route: 'solutions/realestate' },
    { title: 'Food & Restaurant', icon: 'food', route: 'solutions/food' },
    { title: 'Travel & Hospitality', icon: 'travel', route: 'solutions/travel' },
  ];

  constructor() {
    this.navSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileMenu();
      });
  }

  onSolutionsMouseEnter(): void {
    this.showSolutionsDropdown = true;
  }

  onSolutionsMouseLeave(): void {
    this.showSolutionsDropdown = false;
  }

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
    if (this.showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.showMobileMenu = false;
    this.showMobileSolutions = false;
    document.body.style.overflow = '';
  }

  toggleMobileSolutions(): void {
    this.showMobileSolutions = !this.showMobileSolutions;
  }

  ngOnDestroy(): void {
    this.navSub?.unsubscribe();
    document.body.style.overflow = '';
  }
}

