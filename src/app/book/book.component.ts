import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  
  newBookTitle: string = ""
  newBookAuthor: string = ""

  books: Book [] = []

  ngOnInit(): void {
    let saveBooks = localStorage.getItem("books")
    this.books = saveBooks ? JSON.parse(saveBooks) : []
  }
  addBook() {
    // Implement the logic to add the book (e.g., push it to an array)
    // For simplicity, let's log the new book to the console for now
    if(this.newBookTitle.trim().length && this. newBookAuthor.trim().length){
      let newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor
      }

      this.books.push(newBook)

      this.newBookTitle = ""
      this.newBookAuthor = ""  
      
      localStorage.setItem("books", JSON.stringify(this.books))
    }
  }

  
  deleteBook(index: number){
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books))
  }
}
