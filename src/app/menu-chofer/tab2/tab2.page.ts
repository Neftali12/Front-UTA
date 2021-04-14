import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import ServiceService from 'src/app/service/service.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  choferFiltro = '';

  coche = {
    idChofer: null,
    placasCarro: null,
    modeloCarro: null,
    yearCarro: null,
    colorCarro: null
  }

  constructor(public router: Router, public choferCarrosService: ServiceService,
    public alertController: AlertController) {
    // this.choferCarrosService.obtenerCarros();
    this.choferCarrosService.getUsuarios();
  }

  obtenerCarrosChofer(){
    let body = {
      idChofer: this.choferFiltro
    }
    this.choferCarrosService.filtroCarro(body);
  }

  altaCoche(forma: any){
    return this.choferCarrosService.altaCarro(this.coche).then( async(res:any) => {
      console.log(res);
     
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Success',
        message: 'Coche Insertado con exito',
        buttons: ['OK']
      });
      await alert.present();
      forma.reset();
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


}
