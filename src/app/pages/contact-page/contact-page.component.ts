import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  @Input() show: boolean = true;
  @Input() hide: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
