import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {PartenairesComponent} from './partenaires/partenaires.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ArtistePageComponent} from './artiste-page/artiste-page.component';
import {FaqPageComponent} from './faq-page/faq-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'partenaires', component: PartenairesComponent},
  {path: 'artistes', component: ArtistePageComponent},
  {path: 'faq', component: FaqPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
