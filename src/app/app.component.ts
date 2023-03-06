import { Component } from '@angular/core';
import axios from 'axios';
import "qrcode";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  
  ho()
  {
    document.getElementById("page1").style.display="block"
    document.getElementById("b1").style.display="none"
  }
}

