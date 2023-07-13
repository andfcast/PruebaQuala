import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Basico } from 'src/app/classes/basico';
import { Sucursal } from 'src/app/classes/sucursal';
import { BasicoService } from 'src/app/services/basico.service';
import { SucursalService } from 'src/app/services/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent {
  lstMonedas:Basico[] = [];
  lstSucursales:Sucursal[];
  columnas:string[] = ['Codigo','Descripcion', 'Acciones'];
  dataSource: any;
  constructor(private service: SucursalService,
    private basicoService: BasicoService,       
    private route: ActivatedRoute,
    private router: Router){
  }
  ngOnInit(){
    //this.ListarMonedas();
    this.ListarSucursales();    
  }

  private ListarSucursales(){
    this.service.Listar().subscribe((res:any) =>{
      if(res.data != null){    
        this.lstSucursales = [];    
        res.data.forEach((element:Sucursal) => {          
          this.lstSucursales.push(element);
        });        
      }      
      this.dataSource = new MatTableDataSource<Sucursal>(this.lstSucursales);
    });
  }  

  Crear(){
    this.router.navigateByUrl('/insertar');
  }
  Detalle(id:number){
    this.router.navigateByUrl('/info/' + id.toString())
  }
  Actualizar(id:number){
    this.router.navigateByUrl('/actualizar/' + id.toString())
  }
  Borrar(id:number){
    Swal.fire({
      title: '¿Está seguro de borrar el registro?',
      text: 'Este proceso es irreversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.service.Borrar(id).subscribe((data: any) => {
          if (data.exitoso) {
            Swal.fire({
              confirmButtonColor: '#a01533',
              showConfirmButton: false,
              timer:2000,
              text:'El registro ha sido borrado correctamente.',
              icon:'success'
            });
            setTimeout(() => {
              this.lstSucursales = this.lstSucursales.filter(x => x.id !== id);
              this.dataSource = new MatTableDataSource<Sucursal>(this.lstSucursales);              
            }, 1500);
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title:'Cancelado',
          text:'Borrado cancelado',
          icon:'info',
          showConfirmButton:false,
          timer:2000
        });
      }
    });
  }
}
