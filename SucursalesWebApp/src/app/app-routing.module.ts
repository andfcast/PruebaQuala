import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { CrearSucursalComponent } from './components/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './components/editar-sucursal/editar-sucursal.component';
import { DetalleSucursalComponent } from './components/detalle-sucursal/detalle-sucursal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full',
  },
  {
    path: 'listado',
    component: SucursalesComponent,
    data: {
      title: 'Sucursales'
    },    
  },
    {
      path: 'insertar',
      component: CrearSucursalComponent,
      data: {
        title: 'Registrar Nueva Sucursal'
      }
    },
    {
      path: 'actualizar/:id',
      component: EditarSucursalComponent,
      data: {
        title: 'Actualizar Sucursal'
      }
    },
    {
      path: 'info/:id',
      component: DetalleSucursalComponent,
      data: {
        title: 'Información Sucursal'
      }
    }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
