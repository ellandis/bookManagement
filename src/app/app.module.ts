import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {StoreModule} from '@ngrx/store'
import {BookReducer} from './books/book.reducer'


@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    StoreModule.forRoot({book: BookReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
