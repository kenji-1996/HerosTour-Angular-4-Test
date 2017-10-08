import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgProgressModule, NgProgressInterceptor, NgProgressBrowserXhr} from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './services/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { SelectedHeroService } from "./services/selected-hero.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BrowserXhr, HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    NgProgressModule
  ],
  providers: [
    HeroService,
    SelectedHeroService,
    {provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true},
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr }
    ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}


