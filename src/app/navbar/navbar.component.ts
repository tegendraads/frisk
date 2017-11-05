import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'FRISK project';
  isCollapsed = true;
  filterBoats() {
    console.log('Boats!')
  }

  constructor() { }

  ngOnInit() {
  }

}
