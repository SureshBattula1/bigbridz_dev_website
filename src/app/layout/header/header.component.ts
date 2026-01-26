import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../common/icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
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

  onSolutionsMouseEnter(): void {
    this.showSolutionsDropdown = true;
  }

  onSolutionsMouseLeave(): void {
    this.showSolutionsDropdown = false;
  }

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
    // Prevent body scroll when menu is open
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
}
