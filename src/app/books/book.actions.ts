import {createAction, props} from "@ngrx/store";
import {Book} from "../models/book";

export const addBook = createAction('[Book] Add Book', props<Book>())
export const removeBook = createAction('[Book] Remove Book', props<{bookId: string}>())
