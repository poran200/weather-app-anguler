import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { IotComponent } from './iot/iot.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
import {IOTService} from './iot.service';
import {AngularFireStorageModule} from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    IotComponent,
    // StudentComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    IOTService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
