import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import ServiceService from 'src/app/service/service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1PageAdmin {

  constructor(public srv: ServiceService, public router: Router, public alertController: AlertController) { }

  //usuarios: any;
  
  ngOnInit() {    
    //this.usuarios = this.srv.usuarios;
    //console.log(this.usuarios);
  }
  
  registros(){
    this.router.navigate(['/registros']);
  }

  pagos(){
    this.router.navigate(['/pagos']);
  }

  reportes(){
    this.router.navigate(['/reportes']);
  }

  admin(){
    this.router.navigate(['/administrador']);
  }

  async detalleReporte(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro',            
      message: 'Este apartado es dedicado unicamente al registro de los reportes en donde podrás anotar datos importantes de tus viajes llevando así una buena administración de ello.',
      buttons: ['OK']
    });    
    await alert.present();
  }

  async detallePago(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro',            
    message: 'Este apartado es exclusivo unicamente para el registro de los pagos en donde se registrará el método ya sea con tarjeta o en efectivo y la cantidad para llevar una mejor administración de los pagos.',
      buttons: ['OK']
    });    
    await alert.present();
  }

  async detalleAlta(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro',            
    message: 'En este apartado podrás dar de alta a los diferentes tipos de usuarios y podrás observar cuantos han sido agregados al sistema a través de un contador el cual podrás visualizar en la misma pantalla.',
      buttons: ['OK']
    });    
    await alert.present();
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
  Tab1(){                
    this.router.navigate(['/tab1-admin'])
  }

  Tab2(){                
    this.router.navigate(['/tab2-admin'])
  }


  Tab3(){
    this.router.navigate(['/tab3-admin'])
  }

}
