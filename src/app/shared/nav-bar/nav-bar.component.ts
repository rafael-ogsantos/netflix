import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();
  opened = false;

  constructor() { }

  ngOnInit() {

  }

  toogle(){
    this.opened = !this.opened;
  }

}
