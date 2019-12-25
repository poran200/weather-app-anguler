import {Component, OnInit} from '@angular/core';
import {Data} from './Data';
import {AngularFirestore} from '@angular/fire/firestore';
import {IOTService} from './iot.service';
import {Color, Label} from 'ng2-charts';
import {ChartDataSets} from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private iotService: IOTService) {
  }

  ngOnInit(): void {
  }
}
