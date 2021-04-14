import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import ServiceService from 'src/app/service/service.service';

@Component({
  selector: 'app-regusu',
  templateUrl: './regusu.page.html',
  styleUrls: ['./regusu.page.scss'],
})
export class RegusuPage implements OnInit {

  usu = {
    strNombre: null,
    strPassword: null,
    strDireccion: null,
    nmbEdad: null,
    arrTelefonos: null,
    strCorreo: null,
    tipo:null
  }
  
    constructor(public router: Router,
      public service: ServiceService,
      public alertController: AlertController) {
      }
      ngOnInit(){
        
      }
 async altaUser(form:any){
    this.service.altaUser(this.usu).then(async (res:any)=>{
      console.log(res);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Succes',
        message: 'Usuario Insertado con exito.',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigate(["/"])
    }).catch(async err => {
      console.log(err);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'A ocurrido un error al momento de insertar el usuario',
        buttons: ['OK']
      });
      await alert.present();
      
    })
  }

}
