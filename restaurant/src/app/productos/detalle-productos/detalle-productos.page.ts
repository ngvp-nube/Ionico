import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../productos.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {
  datos = {}
  constructor(private Servicio: ProductosService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe( p =>{
      
      this.datos = this.Servicio.getProductosById(p.get('productoID'))
      console.log(this.datos)
    })

  }

}
