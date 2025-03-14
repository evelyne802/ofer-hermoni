import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ 
    HeaderComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  titleDescription = "Japanese private chef";
  screenSize = window.innerWidth;

  constructor() {}

  ngOnInit(){
    console.log(this.screenSize);
  }
}
