import { Component, signal } from '@angular/core';
import { Products } from './services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
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
      this.productList = data.products
    })
  }
}
