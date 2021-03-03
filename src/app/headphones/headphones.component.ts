import { Component, OnInit } from '@angular/core';
import { products } from './productsheadphones';
@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent {
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
