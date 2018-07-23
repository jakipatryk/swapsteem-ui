import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieModule } from 'ngx-cookie';
import { environment } from './../environments/environment';
import { AppRouteModule } from './app-route.module';
import { AppComponent } from './app.component';
import { BuyOnlineComponent } from './buy-online/buy-online.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuySteemService } from './service/buy-steem.service';
import { SteemconnectModule } from './steemconnect/steemconnect.module';

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
    AppRouteModule,
    HttpClientModule,
    SteemconnectModule.forRoot(environment.steemconnectConfig),
    CookieModule.forRoot()
  ],
  providers: [BuySteemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
