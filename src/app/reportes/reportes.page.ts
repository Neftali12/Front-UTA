import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Reportes } from '../models/login';
import ServiceService from '../service/service.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  constructor(public router: Router, public alertController: AlertController, public srv: ServiceService) {     
  }

  reporte: any;
  id: any;
  repo: Reportes = new Reportes;
  
  ngOnInit() {           
    this.srv.getReportes().then((data:any) => {
      this.reporte = data;
      console.log(this.reporte);
    });
  }


  async registrarReporte(form: NgForm){      
    if(this.repo.origen == null, this.repo.destino == null, this.repo.duracion == null){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',
        message: 'Agregue información a todos los inputs antes de continuar',
        buttons: ['OK']
      });
      await alert.present();
    }else{

      if(this.repo.origen == "", this.repo.destino == "", this.repo.duracion == ""){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Mensaje',            
          message: 'Para volver a dar de alta un reporte agregue información',
          buttons: ['OK']
        });
        await alert.present();
      }else{        
        this.srv.postReportes(this.repo).subscribe(data => {              
          console.log(data);           
          this.srv.getReportes().then((data:any) => {
            this.reporte = data;            
          });
        });
        this.repo.destino = this.repo.origen = this.repo.duracion = this.repo.fecha = null;        

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

      this.srv.putReportes(this.repo, this.id).subscribe((data:any) => {
        this.repo = data;
        console.log(this.repo);
        this.srv.getReportes().then((data:any) => {
          this.reporte = data;            
          this.repo.destino = this.repo.origen = this.repo.duracion = this.repo.fecha = null;   
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

      this.srv.deleteReportes(this.id).subscribe((data:any) => {
        this.repo = data;
        console.log(this.repo);
        this.srv.getReportes().then((data:any) => {
          this.reporte = data;            
        });
      })

    }
  }

  async select(idReporte: string){
    this.id = idReporte;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',            
      message: 'ID seleccionado',
      buttons: ['OK']
    });
    await alert.present();
    console.log(this.id);
    console.log(this.repo);
  }

  regresar(){
    this.router.navigate(['/tab1-admin']);  
  }

}
