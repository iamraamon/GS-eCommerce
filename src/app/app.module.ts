import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {LoginComponent } from './component/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ITTrainingsComponent } from './component/it-trainings/it-trainings.component';
import { AdvTrainingsComponent } from './component/adv-trainings/adv-trainings.component';
import { ITSolutionsComponent } from './component/it-solutions/it-solutions.component';
import { PlacementsComponent } from './component/placements/placements.component';
import { ContactComponent } from './component/contact/contact.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ProductListComponent } from './component/product-list/product-list.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    ITTrainingsComponent,
    AdvTrainingsComponent,
    ITSolutionsComponent,
    PlacementsComponent,
    ContactComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
