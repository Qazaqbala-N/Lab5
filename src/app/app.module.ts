import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { GamesComponent } from './games/games.component';
import { BooksComponent } from './books/books.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const appRoutes:Routes = [
  {path:'page',component:MainpageComponent},
  {path:'computers',component:ProductListComponent},
  {path:'books',component:BooksComponent},
  {path:'games',component:GamesComponent},
  {path:'headphones',component:HeadphonesComponent},
]

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
   /* RouterModule.forRoot([
      { path: '', component: ProductListComponent },

    ]),*/RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    GamesComponent,
    BooksComponent,
    HeadphonesComponent,
    MainpageComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
