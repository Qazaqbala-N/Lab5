import { Component, OnInit } from '@angular/core';
import { products } from './productgames';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent  {
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
