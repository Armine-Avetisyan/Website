import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }
  title = 'MisFit';

  onClick() {
    this.router.navigateByUrl('pages/contact-page/contact-page.component.html');
  }
}