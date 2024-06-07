import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  newAuthor: string = "";
  newTitle: string = "";
  bookshelf = new MatTableDataSource<Book>;
  displayedColumns: string[] = ['title','author','id'];
  binding: any;

  ngOnInit(): void {
    let savedList = localStorage.getItem("savedAppointmentkey");
    this.bookshelf.data = savedList ? JSON.parse(savedList) : [];
  }

  addBook(){
    if(this.newTitle.trim().length && this.newAuthor.trim().length){
      let newBook: Book = {
        title: this.newTitle,
        author: this.newAuthor,
        id: JSON.stringify(Date.now())
      }
      // this.bookshelf.push(newBook);
      this.bookshelf.data.push(newBook);
      //clear varible field
      this.newTitle = "";
      this.newAuthor = "";
      this.bookshelf._updateChangeSubscription();

      //save to local storage
      localStorage.setItem("savedAppointmentkey",JSON.stringify(this.bookshelf.data));
    }
  }

  deleteBook(title: string){
    const RemoveBook = this.bookshelf.data.findIndex(item => item.title === title);
    if(RemoveBook == -1){
      alert("Book not found");
    }
    else{
      alert(RemoveBook + " has been deleted!")
      this.bookshelf.data.splice(RemoveBook,1);
      localStorage.setItem("savedAppointmentkey",JSON.stringify(this.bookshelf.data));
      this.bookshelf._updateChangeSubscription();
      this.binding = "";
    }
  }

}
