import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { AgmCoreModule } from '@agm/core'; 
import { Geolocation } from '@ionic-native/geolocation';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleMaps } from '@ionic-native/google-maps';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule ],
  providers: [ GoogleMaps, { provide: {Geolocation,RouteReuseStrategy} , useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
