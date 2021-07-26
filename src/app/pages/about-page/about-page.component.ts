import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  @Input() hide: boolean = false;
  @Input() show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


}
