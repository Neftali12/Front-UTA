import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Login, Pagos } from '../models/login';
import ServiceService from '../service/service.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  constructor(public alertController: AlertController, public router: Router, public srv: ServiceService) {    
   }

  pag: Pagos = new Pagos;
  id: any;
  efect = 0;
  tarjeta = 0;
  datos: any;

  ngOnInit() {
    this.srv.getPagos().then((data:any) => {
      this.datos = data;
      console.log(this.datos);
    });
  }

  async guardar(form: NgForm){    

    if(this.pag.cantidad != undefined && this.pag.cantidad != 0, this.pag.tipoPago != undefined && this.pag.tipoPago != ''){
      this.srv.postPagos(this.pag).subscribe(data => {              
        this.datos = data;
        console.log(this.datos);   
        this.srv.getPagos().then((data:any) => {
          this.datos = data;        
        });        
        this.pag.cantidad = null;
        this.pag.tipoPago = null;
      });      

      if(this.pag.tipoPago === 'efectivo'){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Regsitro',            
          message: 'Se registró el pago con efectivo',
          buttons: ['OK']
        });
        await alert.present();
        this.efect ++;
      }
  
      if(this.pag.tipoPago === 'tarjeta'){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Regsitro',            
          message: 'Se registró el pago con tarjeta.',
          buttons: ['OK']
        });
        await alert.present();
        this.tarjeta ++;
      }
        
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Resultado',            
        message: 'Faltan datos',
        buttons: ['OK']
      });
      await alert.present();
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
      this.srv.deletePagos(this.id).subscribe((data:any) => {
        this.pag = data;
        console.log(this.pag);        
        this.srv.getPagos().then((data:any) => {
          this.datos = data;          
        });
      });

    }
  }


  async select(idPago: string){
    this.id = idPago;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',            
      message: 'ID seleccionado',
      buttons: ['OK']
    });
    await alert.present();
    console.log(this.id);    
  }


  regresar(){
    this.router.navigate(['/tab1-admin']);  
  }


}
