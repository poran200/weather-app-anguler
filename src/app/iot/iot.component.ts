import { Component, OnInit } from '@angular/core';
import {IOTService} from '../iot.service';
import {Observable, Subscription} from 'rxjs';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {
  weatherData: any[];
  time: any;
  constructor( private iotService: IOTService ) { }
  ngOnInit() {
    this.iotService.getdata().subscribe(data => {
        this.weatherData = data,
        data.forEach( value => {
          this.time = Timestamp.now().toDate();
          });
      });
  }
}
