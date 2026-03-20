import { Component, signal } from '@angular/core';
import { Product } from './services/product';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  productData:{
    name:string;
    brand:string;
    price:string
  }[] | undefined

  constructor(private productService:Product){}

  getProductData(){
    this.productData = this.productService.getProductData()
  }
  // ngOnInit(){
  //   this.productData = this.productService.getProductData()
  // }
}
