import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'template01';

  cssUrl: string='';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
   this.cssUrl = '/assets/saga-green.css';
  }

  changeStyle() {
    this.cssUrl = (this.cssUrl === '/assets/saga-green.css') ? '/assets/vela-green.css' : '/assets/saga-green.css';
  }

}

/*
  //themes
  1.Eliminar el theme de styles
  "node_modules/primeng/resources/themes/saga-green/theme.css",
  "node_modules/primeng/resources/themes/vela-green/theme.css",
  2.Hacer uso del DomSanitizer
  '/assets/saga-green.css'
  '/assets/vela-green.css'
*/
