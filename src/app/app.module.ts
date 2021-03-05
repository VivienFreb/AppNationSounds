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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArtistesComponent,
    NavbarComponent,
    MessagesComponent,
    EvenementsComponent,
    SocialMediaComponent,
    PartenairesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
