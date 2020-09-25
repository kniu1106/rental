import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HousingService } from './services/housing.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import {PropertyDetailResolverService} from './property/property-detail/property-detail-resolver.service';
//import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyFilterComponent } from './property/property-filter/property-filter.component';
import { FilterPipe } from './pipes/filter.pipe';



const appRoutes: Routes = [
  {path: '', component: PropertyFilterComponent},
  {path: 'buy', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent},
  {path: '**', component: PropertyListComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    NavBarComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    PropertyFilterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
   // NgxGalleryModule

  ],
  providers: [HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
