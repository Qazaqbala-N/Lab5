import { Component, OnInit } from '@angular/core';
import { products } from './productbooks';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

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
