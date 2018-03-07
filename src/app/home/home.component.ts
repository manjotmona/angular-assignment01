import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  getDataObs() {

    this.appService.getData().subscribe((data) => {
      this.data = data.items;
      console.log(data.items);
    }, (error) => {
      this.data = error;
      console.log('error');
      document.write(JSON.stringify(error));
    }, () => {
    });
  }
}
