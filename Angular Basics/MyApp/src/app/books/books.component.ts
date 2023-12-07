import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }
  
  src : string = 'https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg'
  name : string = 'Clean Code'
  author : string = 'Robert C Martin';


}
