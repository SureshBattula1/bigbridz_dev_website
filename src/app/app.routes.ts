import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CompanyComponent } from './pages/company/company.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareerComponent } from './pages/career/career.component';
import { EcommerceComponent } from './pages/solutions/ecommerce/ecommerce.component';
import { HealthcareComponent } from './pages/solutions/healthcare/healthcare.component';
import { EducationComponent } from './pages/solutions/education/education.component';
import { LogisticsComponent } from './pages/solutions/logistics/logistics.component';
import { FinanceComponent } from './pages/solutions/finance/finance.component';
import { RealestateComponent } from './pages/solutions/realestate/realestate.component';
import { FoodComponent } from './pages/solutions/food/food.component';
import { TravelComponent } from './pages/solutions/travel/travel.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'BigBridz | Software Development Company' },
  { path: 'services', component: ServicesComponent, title: 'BigBridz | Services' },
  { path: 'solutions', component: SolutionsComponent, title: 'BigBridz | Solutions' },
  { path: 'solutions/ecommerce', component: EcommerceComponent, title: 'BigBridz | E-commerce Solutions' },
  { path: 'solutions/healthcare', component: HealthcareComponent, title: 'BigBridz | Healthcare Solutions' },
  { path: 'solutions/education', component: EducationComponent, title: 'BigBridz | Education Solutions' },
  { path: 'solutions/logistics', component: LogisticsComponent, title: 'BigBridz | Logistics Solutions' },
  { path: 'solutions/finance', component: FinanceComponent, title: 'BigBridz | Finance Solutions' },
  { path: 'solutions/realestate', component: RealestateComponent, title: 'BigBridz | Real Estate Solutions' },
  { path: 'solutions/food', component: FoodComponent, title: 'BigBridz | Food & Restaurant Solutions' },
  { path: 'solutions/travel', component: TravelComponent, title: 'BigBridz | Travel Solutions' },
  { path: 'portfolio', component: PortfolioComponent, title: 'BigBridz | Portfolio' },
  { path: 'company', component: CompanyComponent, title: 'BigBridz | Company' },
  { path: 'blog', component: BlogComponent, title: 'BigBridz | Blog' },
  { path: 'contact', component: ContactComponent, title: 'BigBridz | Contact' },
  { path: 'career', component: CareerComponent, title: 'BigBridz | Careers' },
  { path: '**', redirectTo: '' },
];
