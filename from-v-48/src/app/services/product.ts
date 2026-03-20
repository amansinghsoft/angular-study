import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(){
    console.log("product service");
  }

  getProductData(){
    return [
      {name:'mobile', brand:'samsung', price:'20000'},
      {name:'laptop', brand:'hp', price:'50000'},
      {name:'tab', brand:'apple', price:'100000'},
      {name:'washing machine', brand:'lg', price:'15000'},
    ]
  }
}
