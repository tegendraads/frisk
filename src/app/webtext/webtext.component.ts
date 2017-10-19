import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-webtext',
  templateUrl: './webtext.component.html',
  styleUrls: ['./webtext.component.css']
})
export class WebtextComponent implements OnInit {
  private title: String;
  private body: String;
  constructor(location: Location) {
    const loc = location.prepareExternalUrl(location.path());
    console.log(loc);
    if (loc === '/sobre') {
      this.title = 'Sobre nos';
      this.body = 'More info about us';
    } else if (loc === '/objectivos') {
      this.title = 'Objectivos';
      this.body = 'More info about objectivos';
    } else if (loc === '/precisamos-de-si') {
      this.title = 'Precisamos de si';
      this.body = 'More info about this';
    } else if (loc === '/equipa') {
      this.title = 'Equipa';
      this.body = 'More info about this';
    } else if (loc === '/contactos') {
      this.title = 'Contactos';
      this.body = 'More info about how to contact us';
    }
  }

  ngOnInit() {
  }

}
