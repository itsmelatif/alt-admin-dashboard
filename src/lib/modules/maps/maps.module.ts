import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsPageComponent } from './components/maps-page/maps-page.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    MapsPageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    GoogleMapsModule
  ]
})
export class MapsModule { }
