import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

//Forms
import { FormsModule } from '@angular/forms';

//rutas
import { AppRoutingModule } from "./app-routing.module";

//Servicios


//Componentes
import { CarsComponent } from './components/cars/cars.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//bootstrap
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Chars
import { ChartsModule } from 'ng2-charts';
import { ModelCardCardsComponent } from './components/model-card-cards/model-card-cards.component';
import { CarSectionAboutComponent } from './components/car-section-about/car-section-about.component';
import { CarModelsVideoComponent } from './components/car-models-video/car-models-video.component';
import { ModelCarsFooterComponent } from './components/model-cars-footer/model-cars-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    NavbarComponent,
    ModelCardCardsComponent,
    CarSectionAboutComponent,
    CarModelsVideoComponent,
    ModelCarsFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    ChartsModule,
    NgbModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
