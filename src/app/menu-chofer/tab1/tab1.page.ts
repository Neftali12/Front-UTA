import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import ServiceService from 'src/app/service/service.service';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  viaje = {
    origenChofer: null,
    destinoChofer: null,
    cobroChofer: null,
    ubicacionesChofer: null,
    pasajerosChofer:null,
    fechaViaje: null,
    horaViaje: null
  }

  constructor( public router: Router, public viajeChoferService: ServiceService, 
    public alertController: AlertController,
    private googleMaps: GoogleMaps ) {}



  altaViaje(forma: any){
    let date = new Date();
    this.viaje.horaViaje = date.getHours() + ':' + date.getMinutes();
    this.viaje.fechaViaje = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    return this.viajeChoferService.altaViajeChofer(this.viaje).then( async (res:any) => {
      console.log(res);
      this.viajeChoferService.obtenerViajeChofer();
      forma.reset();
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Succes',            
        message: 'Viaje registrado con exito',
        buttons: ['OK']
      });    
      await alert.present();
    }).catch(async err => {
      console.log(err);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',            
        message: 'Ocurrio un error',
        buttons: ['OK']
      });    
      await alert.present();
    })
  }
  
  Tab1(){                
    this.router.navigate(['/tab1'])
  }

  Tab2(){                
    this.router.navigate(['/tab2'])
  }


  Tab3(){
    this.router.navigate(['/tab3'])
  }

  cerrarSesion(){
    this.router.navigate(['/home']);
  }

  //-------------------------------------------------------------------------------------------
  ngAfterViewInit(){
    this.geolocationNative();
  }

  geolocationNative(){
    Geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
      console.log(geoposition);
      this.loadMap(geoposition);
    });
  }

  loadMap(position){
    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);

    let latlng = new LatLng(position.coords.latitude, position.coords.longitude);

    map.one(GoogleMapsEvent.MAP_READY).then(() => {
      let position: CameraPosition<LatLng> = {
        target: latlng,
        zoom: 10,
        tilt: 30
    };
    map.moveCamera(position);

    let markerOptions: MarkerOptions = {
      position: latlng,
      title: 'Aquí estoy!'
    };


    let marker = map.addMarker(markerOptions).then((marker: Marker) => {
      marker.showInfoWindow();
    });

  })
    
  }

}
