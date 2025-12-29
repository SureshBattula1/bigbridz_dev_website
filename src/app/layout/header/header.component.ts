import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../../common/icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showSolutionsDropdown = false;

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
}
