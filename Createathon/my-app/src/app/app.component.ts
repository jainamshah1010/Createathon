import { Component ,OnInit} from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app';
 customClass: string = 'customClass';
 isFirstOpen: boolean = true;

 showHide:boolean
 constructor(){
  console.log("Hello Hello");
  this.showHide = false;
}

hideshow(){
  this.showHide = !this.showHide;
}

 btnClick = function() {
  this.router.navigate(['/restaurant']);
};



}


