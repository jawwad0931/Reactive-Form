import { Component } from '@angular/core';
import { BookListService } from '../book-list.service';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books:any[]=[];

  constructor(private bookservice:BookListService){}

  ngOnInit(){
    this.books = this.bookservice.getBooks();
  }
}
