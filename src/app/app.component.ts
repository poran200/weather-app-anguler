import {Component, OnInit} from '@angular/core';
import {IOTService} from './iot.service';

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
