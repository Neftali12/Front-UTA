import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu-user',
    loadChildren: () => import('./menu-user/menu-user.module').then( m => m.MenuUserPageModule)
  },      
  {
    path: 'registros',
    loadChildren: () => import('./registros/registros.module').then( m => m.RegistrosPageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pagos/pagos.module').then( m => m.PagosPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./menu-chofer/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./menu-chofer/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./menu-chofer/tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tab1-admin',
    loadChildren: () => import('./menu-admin/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2-admin',
    loadChildren: () => import('./menu-admin/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3-admin',
    loadChildren: () => import('./menu-admin/tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'regusu',
    loadChildren: () => import('./regusu/regusu/regusu.module').then( m => m.RegusuPageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'viajes',
    loadChildren: () => import('./viajes/viajes/viajes.module').then( m => m.ViajesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
