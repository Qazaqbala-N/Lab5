import { Component } from '@angular/core';

import { products } from './productscomputer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  share(link:string){
    window.open("https://t.me/share/url?url=AmazonProducts&text="+link +"");
  }
  likes(index:number){
    if(products[index-1].isLiked==false){
    products[index-1].like++;
      products[index-1].isLiked=true;
    }
    else{ products[index-1].like--;
      products[index-1].isLiked=false;}
  }
  removeItem(index){

    this.products.splice(index, 1);

  }


}
