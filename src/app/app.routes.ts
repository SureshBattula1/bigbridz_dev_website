import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'BigBridz | Software Development Company | Mobile & Web Apps'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'BigBridz | Services'
  },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions.component').then(m => m.SolutionsComponent),
    title: 'BigBridz | Industry Solutions'
  },
  {
    path: 'solutions/ecommerce',
    loadComponent: () => import('./pages/solutions/ecommerce/ecommerce.component').then(m => m.EcommerceComponent),
    title: 'BigBridz | E-commerce Solutions'
  },
  {
    path: 'solutions/healthcare',
    loadComponent: () => import('./pages/solutions/healthcare/healthcare.component').then(m => m.HealthcareComponent),
    title: 'BigBridz | Healthcare Solutions'
  },
  {
    path: 'solutions/education',
    loadComponent: () => import('./pages/solutions/education/education.component').then(m => m.EducationComponent),
    title: 'BigBridz | Education Solutions'
  },
  {
    path: 'solutions/logistics',
    loadComponent: () => import('./pages/solutions/logistics/logistics.component').then(m => m.LogisticsComponent),
    title: 'BigBridz | Logistics Solutions'
  },
  {
    path: 'solutions/finance',
    loadComponent: () => import('./pages/solutions/finance/finance.component').then(m => m.FinanceComponent),
    title: 'BigBridz | Finance Solutions'
  },
  {
    path: 'solutions/realestate',
    loadComponent: () => import('./pages/solutions/realestate/realestate.component').then(m => m.RealestateComponent),
    title: 'BigBridz | Real Estate Solutions'
  },
  {
    path: 'solutions/food',
    loadComponent: () => import('./pages/solutions/food/food.component').then(m => m.FoodComponent),
    title: 'BigBridz | Food & Restaurant Solutions'
  },
  {
    path: 'solutions/travel',
    loadComponent: () => import('./pages/solutions/travel/travel.component').then(m => m.TravelComponent),
    title: 'BigBridz | Travel Solutions'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    title: 'BigBridz | Portfolio'
  },
  {
    path: 'company',
    loadComponent: () => import('./pages/company/company.component').then(m => m.CompanyComponent),
    title: 'BigBridz | Company'
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent),
    title: 'BigBridz | Blog & Insights'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'BigBridz | Contact Us & Get a Quote'
  },
  {
    path: 'career',
    loadComponent: () => import('./pages/career/career.component').then(m => m.CareerComponent),
    title: 'BigBridz | Careers & Openings'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
