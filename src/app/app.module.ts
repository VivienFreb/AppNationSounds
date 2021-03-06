import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomepageComponent } from './homepage/homepage.component';
import { ArtistesComponent } from './artistes/artistes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessagesComponent } from './messages/messages.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { BlogSliderComponent } from './blog-slider/blog-slider.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ArtistePageComponent } from './artiste-page/artiste-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CguPageComponent } from './cgu-page/cgu-page.component';
import { InformationsPageComponent } from './informations-page/informations-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArtistesComponent,
    NavbarComponent,
    MessagesComponent,
    EvenementsComponent,
    SocialMediaComponent,
    PartenairesComponent,
    MapComponent,
    FooterComponent,
    BlogSliderComponent,
    BlogPageComponent,
    ArtistePageComponent,
    FaqPageComponent,
    ContactPageComponent,
    CguPageComponent,
    InformationsPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
