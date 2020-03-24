import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
 

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
/* import { ServiciosComponent } from './components/servicios/servicios.component'; */

const appRoutes: Routes = [
  /* {path: 'servicios',component: ServiciosComponent}, */
  {
    path:'',
    pathMatch: 'full', //ruta inicial
    redirectTo: 'body',
  }

]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrouselComponent,
    FooterComponent,
    BodyComponent,
    /* ServiciosComponent, */
    
  ],
  imports: [
  BrowserModule,
  FormsModule,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
