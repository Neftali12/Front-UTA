import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pagos, Reportes, Usuarios } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export default class ServiceService {
  usuarios: any;
  url = 'mongodb+srv://AVUTA:Neftaligjc15@cluster0.29r8p.mongodb.net/aventonUTA?retryWrites=true&w=majority'; 
  urlUser = 'http://localhost:3000/api/usuarios'; 
  urlLogin = 'http://localhost:3000/api/login'
  urlBase = 'http://localhost:3000/api/choferCarros/';
  urlViajeChofer = 'http://localhost:3000/api/viajeChofer';
  choferCarros: any;
  viajeChofer:any;
  choferes: any;


  constructor(public http: HttpClient) { 
    this.choferCarros = [];
    this.viajeChofer = [];
    this.choferes = [];
  }
 //------------------------------------------------------------------------------------------------------------  
 getUsuarios(){
  this.http.get(`${this.urlUser}`).subscribe((data:any) => {
    this.usuarios = data;
    this.choferes = [];
    for(let i =0; i < this.usuarios.length; i++){
      if(this.usuarios[i].tipo == "Chofer"){
        this.choferes.push(this.usuarios[i]);
      }
    }
    return data;
  },
  err => {
    console.log(err);
  });    
}

  altaUser(usuario){
    return this.http.post(this.urlUser, usuario).toPromise();

  }

  modificarUser(usuario:any){
    return this.http.post(`${this.urlUser}/put`,usuario).toPromise()
  }

  eliminarUser(id){
    return this.http.post(`${this.urlUser}/delete`,{id:id}).subscribe((res:any)=>{
      this.getUsuarios();
    },err =>{
      console.log(err);
      
    })
  }
 //------------------------------------------------------------------------------------------------------------  
  login(usuario){
    return this.http.post(this.urlLogin,usuario).toPromise();
  }
 //------------------------------------------------------------------------------------------------------------  
  obtenerCarros(){
    this.http.get(this.urlBase).subscribe(
      async res => {
        this.choferCarros = res;
        console.log('Los carros en la base de datos son:', res);
      }, async err => {
        console.log(err);
      }
    )
  }

  obtenerViajeChofer(){
    this.http.get(this.urlViajeChofer).subscribe(
      (res: any) => {
        this.viajeChofer = res;
        // console.log('Los viajes en la base de datos son:', res);
      }, err => {
        console.log(err);
      }
    )
  }

  altaCarro(coche){
    return this.http.post(this.urlBase, coche).toPromise();
  }
  
  altaViajeChofer(viaje){
    return this.http.post(this.urlViajeChofer, viaje).toPromise();
  }

  filtroCarro(body){
    this.http.post(this.urlBase + 'filtroCarro', body).subscribe(
      res => {
        this.choferCarros = res;
        console.log('Los carros en la base de datos son:', res);
      }, err => {
        console.log(err);
      }
    )
  }
 //------------------------------------------------------------------------------------------------------------  
getReportes(){
  return this.http.get(`${this.url}reportes/`).toPromise();
  }  
  postReportes(reporte: Reportes){
    return this.http.post(`${this.url}reportes/`, reporte);
  }  
  putReportes(reporte: Reportes, idReporte: any){
    return this.http.put(`http://localhost:3000/api/reportes/?idReporte=${idReporte}`, reporte);
  }
  deleteReportes(idReporte: any){
    return this.http.delete(`http://localhost:3000/api/reportes/?idReporte=${idReporte}`);
  }
//------------------------------------------------------------------------------------------------------------  
getPagos(){
  return this.http.get(`${this.url}pagos/`).toPromise();
  }  
  postPagos(pago: Pagos){
    return this.http.post(`${this.url}pagos/`, pago);
  }    
  deletePagos(idPago: any){
    return this.http.delete(`http://localhost:3000/api/pagos/?idPago=${idPago}`);
  }
//------------------------------------------------------------------------------------------------------------
getAdmin(){
  return this.http.get(`${this.urlUser}`).toPromise();
}  
postAdmin(user: Usuarios){
  return this.http.post(`${this.urlUser}`, user);
}  
putAdmin(user: Usuarios, idUser: any){
  return this.http.put(`${this.urlUser}/?idUser=${idUser}`, user);
}
deleteAdmin(idUser: any){
  return this.http.delete(`${this.urlUser}/?idUser=${idUser}`);
}
//------------------------------------------------------------------------------------------------------------
}
