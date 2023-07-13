import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Basico } from 'src/app/classes/basico';
import { Sucursal } from 'src/app/classes/sucursal';
import { BasicoService } from 'src/app/services/basico.service';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-detalle-sucursal',
  templateUrl: './detalle-sucursal.component.html',
  styleUrls: ['./detalle-sucursal.component.css']
})
export class DetalleSucursalComponent {
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
    this.ListarMonedas();
    this.ObtenerInfo()
    
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
        debugger;
        this.sucursal = res.data;
        this.formSucursal.setValue({
          codigo:this.sucursal.codigo,
          descripcion:this.sucursal.descripcion,
          direccion:this.sucursal.direccion,
          identificacion:this.sucursal.identificacion,
          fechaCreacion:this.sucursal.fechaCreacion,
          moneda:this.lstMonedas.filter(x=> x.id == this.sucursal.idMoneda)[0].descripcion  
        });
      }
    });
  }

  Volver(){
    this.router.navigateByUrl('/');
  }
}
