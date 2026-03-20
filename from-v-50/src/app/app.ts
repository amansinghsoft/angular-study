import { Component, signal } from '@angular/core';
import { Products } from './services/products';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productList:any
  constructor(private productService:Products){
  }
  ngOnInit(){
    this.productService.getProductList().subscribe((data:any)=>{
      console.log(data);
      this.productList = data.products;
    })
  }
}
