import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuarios } from '../models/login';
import ServiceService from '../service/service.service';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  constructor(public router: Router, public srv: ServiceService, public alertController: AlertController) { }

  usu: Usuarios = new Usuarios;
  usuario: any;
  id: any;

  ngOnInit() {           
    this.srv.getAdmin().then((data:any) => {
      this.usuario = data;
      this.usu.tipo = 'Administrador';
      console.log(this.usuario);
    });
  }


  async altaAdmin(form: NgForm){      
    if(this.usu.arrTelefonos == null, this.usu.nmbEdad == null, this.usu.strCorreo == null, this.usu.strDireccion == null, this.usu.strNombre == null, this.usu.strPassword == null){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',
        message: 'Agregue información a todos los inputs antes de continuar',
        buttons: ['OK']
      });
      await alert.present();
    }else{

      if(this.usu.arrTelefonos == 0, this.usu.nmbEdad == 0, this.usu.strCorreo == "", this.usu.strDireccion == "", this.usu.strNombre == "", this.usu.strPassword == ""){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Mensaje',            
          message: 'Para volver a dar de alta un reporte agregue información',
          buttons: ['OK']
        });
        await alert.present();
      }else{        
        this.srv.postAdmin(this.usu).subscribe(data => {   
          this.usuario =  data;           
          console.log(data);           
          this.srv.getAdmin().then((data:any) => {
            this.usuario = data;            
          });
        });
        this.usu.strCorreo = this.usu.strDireccion = this.usu.strNombre = this.usu.strPassword = "";        
        this.usu.arrTelefonos = this.usu.nmbEdad = 0;

      }
    }  
  }

  async editar(form: NgForm){
    if(this.id == null){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',            
        message: 'Selecciona un "id" para poder realizar cambios',
        buttons: ['OK']
      });
      await alert.present();

    }else{

      this.srv.putAdmin(this.usu, this.id).subscribe((data:any) => {
        this.usu = data;
        console.log(this.usu);
        this.srv.getAdmin().then((data:any) => {
          this.usuario = data;            
        });
      })

    }
  }


  async eliminar(){
    if(this.id == null){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',            
        message: 'Selecciona un "id" para poder realizar cambios',
        buttons: ['OK']
      });
      await alert.present();

    }else{

      this.srv.deleteAdmin(this.id).subscribe((data:any) => {
        this.usu = data;
        console.log(this.usu);
        this.srv.getAdmin().then((data:any) => {
          this.usuario = data;            
        });
      })

    }
  }

  async select(idUser: string){
    this.id = idUser;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',            
      message: 'ID seleccionado',
      buttons: ['OK']
    });
    await alert.present();
    console.log(this.id);
    console.log(this.usu);
  }

  regresar(){
    this.router.navigate(['/tab1-admin']);  
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

}
