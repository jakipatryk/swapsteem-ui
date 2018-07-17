import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { AppRouteModule } from './/app-route.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BuyOnlineComponent } from './buy-online/buy-online.component';
import { BuySteemService } from './service/buy-steem.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BuyOnlineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouteModule
  ],
  providers: [BuySteemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
