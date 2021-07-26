import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import {AboutPageModule} from "../about-page/about-page.module";
import {HomePageComponent} from "./home-page.component";
import {ContactPageModule} from "../contact-page/contact-page.module";
import {GalleryPageModule} from "../gallery-page/gallery-page.module";
import {TrainerPageModule} from "../trainer-page/trainer-page.module";
import {ServicePageModule} from "../service-page/service-page.module";
import {NewsPageComponent} from "../news-page/news-page.component";
import {NewsPageModule} from "../news-page/news-page.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    AboutPageModule,
    ContactPageModule,
    GalleryPageModule,
    TrainerPageModule,
    ServicePageModule,
    NewsPageModule,
  ]
})
export class HomePageModule { }
