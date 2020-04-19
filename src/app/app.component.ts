import { Component } from '@angular/core';
import { Link } from './link/link.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor(){
    this.links = [
      new Link('Angular','http://angular.io', 100), 
      new Link('Google','http://google.com', 50),
      new Link('ChinoSoft','http://chinosoft.com', 300)
    ];
    console.log(this,this.links);
  }
  
  addLink(title: HTMLInputElement, link: HTMLInputElement){
    this.links.push(new Link(title.value, link.value));
    return false;
  }
}
