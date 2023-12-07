import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{

  src : string = 'https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg';
  name : string = 'Clean Code';
  author : string = 'Robert C Martin';


  src2 : string = 'https://m.media-amazon.com/images/I/7167aaVxs3L._SL1500_.jpg';
  name2 : string = 'Effective Java';
  author2 : string = 'Joshua Bloch';

  isDisabled : boolean = false;

  constructor(){}

  ngOnInit(): void {
    
  }
  


}
