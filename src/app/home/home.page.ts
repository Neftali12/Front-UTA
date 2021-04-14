import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Login } from '../models/login';
import ServiceService from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  failsLogin = 0;

  usuarios: Login = new Login;

  constructor(public alertController: AlertController, public router: Router,
    public LoginService: ServiceService) { }

  async logForm(usuarios) {
    
    if(this.usuarios.strCorreo == null && this.usuarios.strPassword == null){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Ingrese datos en todos los campos.',
        buttons: ['OK']
      });

      await alert.present();
    }else{
      this.LoginService.login(this.usuarios).then(async(res:any)=>{
        let nombre = res.usrDB.strNombre;
        let direccion = res.usrDB.strDireccion
        console.log('Datos correctos', res.usrDB.tipo)
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('direccion', direccion);
        this.usuarios.tipo = res.usrDB.tipo;
        console.log('Datos correctos', this.usuarios.tipo)
        if(this.usuarios.tipo == 'Administrador'){
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Success',
            message: 'Datos correctos.\n Bienvenido '+nombre,
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/tab1-admin'])
        }
        if(this.usuarios.tipo == 'Chofer'){
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Success',
            message: 'Datos correctos.\n Bienvenido '+nombre,
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/tab1'])  
        }
        if(this.usuarios.tipo == 'Usuario'){
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Success',
            message: 'Datos correctos.\n Bienvenido '+nombre,
            buttons: ['OK']
          });
          await alert.present();
          this.router.navigate(['/menu-user'])
        }

      }).catch(async err =>{
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Error',
          message: 'Error al momento del login',
          buttons: ['OK']
        });
        await alert.present();
        console.log(err)
      })
  
      }
  
    }
  }

    


