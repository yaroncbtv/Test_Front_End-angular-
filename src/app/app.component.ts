import { Component, OnInit } from '@angular/core';
import {ApiService} from './Api/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Test_Front_End';
  countryData = null;

  constructor(private api:ApiService) {}

  ngOnInit() {
//   this.api.getCountries().subscribe((data)=> {
//     console.log(data)
//  },error => {
//     console.log('error: ', error)
//  });
  }
}
