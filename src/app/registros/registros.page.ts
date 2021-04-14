import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Login } from '../models/login';
import ServiceService from '../service/service.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  
  arrayAdmin: any;  
  arrayChof: any;  
  arrayUser: any;    
  model: Login = new Login;

  admin = 0;
  chof = 0;
  user = 0;

  constructor(public alertController: AlertController, public router: Router, public srv: ServiceService) {
    this.arrayAdmin = []
    this.arrayChof = []
    this.arrayUser = []
    this.srv.usuarios = this.admin + this.chof + this.user;  

   }

  ngOnInit() {   
    console.log(this.srv.usuarios); 
  }

  async guardar(model){
    let usuarios = {
      "strCorreo": this.model.strCorreo,
      "strPassword": this.model.strPassword,
      "type": this.model.tipo      
    }; 
    console.log(this.model.strCorreo);
    

    if(this.model.strCorreo != undefined && this.model.strCorreo != '', this.model.strPassword != undefined && this.model.strPassword != '', this.model.tipo != undefined && this.model.tipo != ''){

      if(this.model.tipo === 'Administrador'){
        this.arrayAdmin.push(usuarios);    
        this.admin ++;
        this.model.strCorreo = null;
        this.model.strPassword = null;
        this.model.tipo = null;
        console.log(this.arrayAdmin, this.admin);      
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Regsitro',            
          message: 'Se registró el Administrador',
          buttons: ['OK']
        });
        await alert.present();
      }
  
      if(this.model.tipo === 'Chofer'){
        this.arrayChof.push(usuarios);    
        this.chof ++;
        this.model.strCorreo = null;
        this.model.strPassword = null;
        this.model.tipo = null;
        console.log(this.arrayChof, this.chof);
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Regsitro',            
          message: 'Se registró el Chofer',
          buttons: ['OK']
        });
        await alert.present();
      }
  
      if(this.model.tipo === 'Usuario'){
        this.arrayUser.push(usuarios);    
        this.user ++;
        this.model.strCorreo = null;
        this.model.strPassword = null;
        this.model.tipo = null;
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Regsitro',            
          message: 'Se registró el Pasajero',
          buttons: ['OK']
        });
        await alert.present();
        console.log(this.arrayUser, this.user);
      }
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',            
        message: 'Faltan datos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  regresar(){
    this.router.navigate(['/tab1-admin']);  
  }

}
