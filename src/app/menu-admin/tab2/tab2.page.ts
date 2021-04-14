import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2PageAdmin {

  constructor(public router: Router) {}

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
