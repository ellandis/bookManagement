import {createReducer, on} from '.@ngrx/store';
import  {addBook,removeBook} from './book.actions';
import {Book} from './models/book'

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(addBook, (state,{id,title,author}) => [...state, {id,title,author}] ),
  on(removeBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
);
