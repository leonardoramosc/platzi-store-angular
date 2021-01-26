import { NgModule } from '@angular/core';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing-module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    HomeRoutingModule
  ]
})
export class AppModule { }
