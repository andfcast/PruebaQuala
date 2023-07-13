import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Basico } from 'src/app/classes/basico';
import { Sucursal } from 'src/app/classes/sucursal';
import { BasicoService } from 'src/app/services/basico.service';
import { SucursalService } from 'src/app/services/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent {
  lstMonedas:Basico[] = [];
  formSucursal: FormGroup;
  fechaActual:Date = new Date();
  idSucursal:number;
  sucursal:Sucursal = new Sucursal();
  constructor(
    private fb: FormBuilder,
    private service: SucursalService,
    private basicoService: BasicoService,       
    private route: ActivatedRoute,
    private router: Router
  ){
    this.formSucursal = this.fb.group({      
      codigo:['', Validators.required],
      descripcion:['', Validators.required],
      direccion:['', Validators.required],
      identificacion:['', Validators.required],
      fechaCreacion:['', Validators.required],
      moneda:['', Validators.required]            
    }); 
    
  }

  ngOnInit(){
    this.idSucursal = Number(this.router.url.split('/').pop());
    this.ObtenerInfo()
    this.ListarMonedas();
  }

  private ListarMonedas(){
    this.basicoService.ListarMonedas().subscribe((res:any) =>{
      if(res.data != null){
        this.lstMonedas = [];
        res.data.forEach((element:Basico) => {
          this.lstMonedas.push(element);
        });
      }
    });
  }

  ObtenerInfo(){
    this.service.ObtenerInfo(this.idSucursal).subscribe((res:any) =>{
      if(res.data != null){        
        this.sucursal = res.data;
        this.formSucursal.setValue({
          codigo:this.sucursal.codigo,
          descripcion:this.sucursal.descripcion,
          direccion:this.sucursal.direccion,
          identificacion:this.sucursal.identificacion,
          fechaCreacion:this.sucursal.fechaCreacion,
          moneda:this.sucursal.idMoneda  
        });
      }
    });
  }

  Guardar(){
    const valoresForm = this.formSucursal.value;    
    this.sucursal.codigo = valoresForm.codigo;
    this.sucursal.descripcion = valoresForm.descripcion;
    this.sucursal.direccion = valoresForm.direccion;
    this.sucursal.identificacion = valoresForm.identificacion;
    this.sucursal.fechaCreacion = valoresForm.fechaCreacion;
    this.sucursal.idMoneda = valoresForm.moneda;    
    this.service.Actualizar(this.sucursal).subscribe((data:any) =>{
      Swal.fire({
        text: 'Actualización exitosa',
        icon: 'success',
        timer:2000,
        confirmButtonColor: '#a01533',
        confirmButtonText: 'Aceptar'
      }); 
      setTimeout(() => {           
        this.router.navigateByUrl('/');    
      },1500);
    },
    error =>{
      Swal.fire({
        title: '¡Error!',
        text: 'Actualización no realizada',
        icon: 'error',
        timer:2000,
        confirmButtonColor: '#a01533',
        confirmButtonText: 'Aceptar'
      });
    });
  }
  Volver(){
    this.router.navigateByUrl('/');
  }
}

