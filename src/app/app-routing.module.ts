import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ITTrainingsComponent } from './component/it-trainings/it-trainings.component';
import { AdvTrainingsComponent } from './component/adv-trainings/adv-trainings.component';
import { ITSolutionsComponent } from './component/it-solutions/it-solutions.component';
import { PlacementsComponent } from './component/placements/placements.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
   
  { path: 'home', component : HomeComponent, canActivate : [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate : [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate : [AuthGuard] },
  { path: 'IT-trainings', component: ITTrainingsComponent},
  { path: 'Adv-trainings', component: AdvTrainingsComponent},
  { path: 'IT solutions', component: ITSolutionsComponent},
  { path: 'placements', component: PlacementsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'product', component: ProductListComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard] }  
 
  
  ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


