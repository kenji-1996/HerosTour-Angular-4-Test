import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { SelectedHeroService } from "./services/selected-hero.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InMemoryDataService} from "./in-memory-data.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {HttpModule} from "@angular/http";


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
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    HttpClientModule,
    NgProgressModule
  ],
  providers: [
    HeroService,
    SelectedHeroService,
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
    ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}


