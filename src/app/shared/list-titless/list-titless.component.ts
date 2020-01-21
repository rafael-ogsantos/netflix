import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-titless',
  templateUrl: './list-titless.component.html',
  styleUrls: ['./list-titless.component.css']
})
export class ListTitlessComponent implements OnInit {

  @Input() title: string;
  @Input() list = [];
  
  constructor() { }

  ngOnInit() {
  }

}
