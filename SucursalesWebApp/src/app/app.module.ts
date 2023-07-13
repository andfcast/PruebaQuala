import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { CrearSucursalComponent } from './components/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './components/editar-sucursal/editar-sucursal.component';
import { DetalleSucursalComponent } from './components/detalle-sucursal/detalle-sucursal.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SucursalesComponent,
    CrearSucursalComponent,
    EditarSucursalComponent,
    DetalleSucursalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    SharedModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-CO'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
