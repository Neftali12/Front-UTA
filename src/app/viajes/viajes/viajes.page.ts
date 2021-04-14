import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ServiceService from 'src/app/service/service.service';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  constructor(public router: Router, public viajeChoferService: ServiceService ) { 
    this.viajeChoferService.obtenerViajeChofer();
  }

  ngOnInit() {
  }

}
