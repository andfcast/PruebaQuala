import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Basico } from 'src/app/classes/basico';
import { Sucursal } from 'src/app/classes/sucursal';
import { BasicoService } from 'src/app/services/basico.service';
import { SucursalService } from 'src/app/services/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent {
  lstMonedas:Basico[] = [];
  formSucursal: FormGroup;
  fechaActual:Date = new Date();
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

  Guardar(){
    const valoresForm = this.formSucursal.value;    
    this.sucursal.codigo = valoresForm.codigo;
    this.sucursal.descripcion = valoresForm.descripcion;
    this.sucursal.direccion = valoresForm.direccion;
    this.sucursal.identificacion = valoresForm.identificacion;
    this.sucursal.fechaCreacion = valoresForm.fechaCreacion;    
    this.sucursal.idMoneda = valoresForm.moneda;    
    this.service.Crear(this.sucursal).subscribe((data:any) =>{
      Swal.fire({
        text: 'Creación exitosa',
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
        text: 'Creación no realizada',
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
