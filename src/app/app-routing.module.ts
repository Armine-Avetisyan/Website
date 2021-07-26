import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home',loadChildren:() => import('./pages/home-page/home-page.module').then(mod=>mod.HomePageModule)},
  {path: 'about',loadChildren:() => import('./pages/about-page/about-page.module').then(mod=>mod.AboutPageModule)},
  {path: 'contact',loadChildren:() => import('./pages/contact-page/contact-page.module').then(mod=>mod.ContactPageModule)},
  {path: 'gallery',loadChildren:() => import('./pages/gallery-page/gallery-page.module').then(mod=>mod.GalleryPageModule)},
  {path: 'trainer',loadChildren:() => import('./pages/trainer-page/trainer-page.module').then(mod=>mod.TrainerPageModule)},
  {path: 'service',loadChildren:() => import('./pages/service-page/service-page.module').then(mod=>mod.ServicePageModule)},
  {path: 'news',loadChildren:() => import('./pages/news-page/news-page.module').then(mod=>mod.NewsPageModule)},

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
