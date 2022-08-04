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

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
   
  { path: 'home', component : HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'IT-trainings', component: ITTrainingsComponent},
  { path: 'Adv-trainings', component: AdvTrainingsComponent},
  { path: 'IT solutions', component: ITSolutionsComponent},
  { path: 'placements', component: PlacementsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'product', component: ProductListComponent}
  
  ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


