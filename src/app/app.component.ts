import { Component } from '@angular/core';
import {Link} from './link/link.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: String[];
  
  addLink(title: HTMLInputElement, link: HTMLInputElement){
    console.log("values: ",title.value, link.value);
    return false;
  }
}
