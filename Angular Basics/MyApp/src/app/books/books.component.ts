import { CurrencyPipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book{
  name: string
  author: string
  image_src: string
  price : number
}

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,TitleCasePipe,CurrencyPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{

  books:Book[] = [
    {
      image_src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg',
      name : 'clean code',
      author : 'Robert C Martin',
      price : 500
    },
    {
      image_src : 'https://m.media-amazon.com/images/I/7167aaVxs3L._SL1500_.jpg',
      name : 'effective java',
      author : 'Joshua Bloch',
      price : 1000
    },
    {
      image_src : 'https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg',
      name :  'Clean Code',
      author :  'Robert C Martin',
      price : 200
    },
    {
      image_src : 'https://m.media-amazon.com/images/I/7167aaVxs3L._SL1500_.jpg',
      name : 'Effective Java',
      author : 'Joshua Bloch',
      price : 300
    }
  ]



  isShowing : boolean = true;

  constructor(){}

  ngOnInit(): void {
    
  }



}
