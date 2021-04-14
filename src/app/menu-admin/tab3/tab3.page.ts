import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import ServiceService from 'src/app/service/service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3PageAdmin {
usu = {
  _id:null,
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
    private alertController: AlertController) {
      this.service.getUsuarios();
    }

altaUser(forma:any){
  if(this.usu._id==null){
    this.service.altaUser(this.usu).then(async(res:any)=>{
      console.log(res);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Success',            
      message: 'Usuario registrado con exito',
        buttons: ['OK']
      });    
      await alert.present();
      this.service.getUsuarios();
    }).catch(async err => {
      console.log(err);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',            
      message: err,
        buttons: ['OK']
      });    
      await alert.present();
    })
  }else{
    this.service.modificarUser(this.usu).then(async(res:any)=>{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Success',            
      message: 'Usuario modificado con exito',
        buttons: ['OK']
      });    
      await alert.present();
      forma.reset();
      console.log(res);
      this.service.getUsuarios()
    }).catch(async err =>{
      console.log(err);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',            
      message: err,
        buttons: ['OK']
      });    
      await alert.present();
      
    })
  }
  
}

editar(usuario:any){
  this.usu = usuario
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

  cerrarSesion(){
    this.router.navigate(['/home']);
  }

}
