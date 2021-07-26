import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  @Input() show: boolean = true;
  @Input() hide: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
