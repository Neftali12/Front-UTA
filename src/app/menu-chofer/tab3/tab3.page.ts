import { Component } from '@angular/core';
import { Router } from '@angular/router';
import ServiceService from 'src/app/service/service.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router, public viajeChoferService: ServiceService ) {
    this.viajeChoferService.obtenerViajeChofer();
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
