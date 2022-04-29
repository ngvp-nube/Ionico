import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  Productos = [
    {
    id:'1',
    titulo:'Cazuela',
    url:"https://th.bing.com/th/id/R.7da818de5d9ae4b117035e8002168f96?rik=RBlw7HFuQGnGRA&pid=ImgRaw&r=0",
    comentario:["plato delisioso", "un plato excelente"]
    
    },
    {
      id:'2',
      titulo:'papafritas',
      url:"https://th.bing.com/th/id/OIP.fMTzKgY2vsh3uJZEjBng0AHaDt?pid=ImgDet&rs=1",
      comentario:["plato riko", "un plato paposo"]
      
      },
    {
        id:'3',
        titulo:'pescado frito',
        url:"https://th.bing.com/th/id/R.3b57124a2708da054d1be28bd1f83216?rik=1ggUoaXGCOS%2fvw&pid=ImgRaw&r=0",
        comentario:["plato pescadisimo", "para chiparse los dedos"]
        
        }  
  ];
  constructor() { }

  //listar
  getProductos(){
    return [...this.Productos]
  }

  //agregar
  addProductos(titulo: string, url: string, comentario:string[]){
    this.Productos.push({
      id: this.Productos.length + 1 + "",
      titulo:titulo,
      url: url,
      comentario:comentario

    })

  }

  //eliminar
  deleteProductos(productosID: string){
    this.Productos = this.Productos.filter( p =>{
      return p.id !== productosID
    })
  }

  //buscar por id

  getProductosById(productosID: string){
    return {
      ...this.Productos.find(p => {
        return p.id === productosID
      })
    }    

  }
}
