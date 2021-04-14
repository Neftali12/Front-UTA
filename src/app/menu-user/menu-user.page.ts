import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import ServiceService from '../service/service.service';
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
  selector: 'app-menu-user',
  templateUrl: './menu-user.page.html',
  styleUrls: ['./menu-user.page.scss'],
})
export class MenuUserPage implements OnInit {
usu= {
  _id:null,
  strNombre:null,
  strPassword:null,
  strDireccion:null,
  tipo:null,
  nmbEdad:null,
  arrTelefonos:null,
  strCorreo:null
}
  constructor(public alertController: AlertController, public router: Router
    , public UsuariosService: ServiceService,
    private googleMaps: GoogleMaps) {
      this.usu.strNombre = localStorage.getItem('nombre')
      this.usu.strDireccion = localStorage.getItem('direccion')
     }
 
  async pedir() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'CONFIRMAR VIAJE',
      message: '<strong>¿Estas seguro de pedir raí?</strong>',
      buttons: [
        {
          text: 'Camcelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Pedir',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  }

 

  async cerrarSesion(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cerrar Sesion',            
      message: '¿Estas seguro de Cerrar Sesion?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/home']);
            console.log('Confirm Okay');
          }
        }
      ]
    });    
    await alert.present();
    
  }
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

  navegar(){
    this.router.navigate(['/viajes']);
  }
  
}
