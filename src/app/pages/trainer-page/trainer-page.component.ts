import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {
  @Input() show: boolean = true;
  @Input() hide: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
