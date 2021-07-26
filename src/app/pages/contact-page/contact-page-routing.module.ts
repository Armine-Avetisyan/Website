import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutPageComponent} from "../about-page/about-page.component";
import {ContactPageComponent} from "./contact-page.component";

const routes: Routes = [
  {path:'',component:ContactPageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactPageRoutingModule { }
