import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  @Input() show: boolean = true;
  @Input() hide: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
