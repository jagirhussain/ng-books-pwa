import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Book } from '../models/book.model';

@Injectable()
export class BookService {
  booksApiUrl = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: Http) { }

  private replaceHttpsInProps(book: Book): Book {
    const propsToModify = ['thumbnail', 'smallThumbnail'];
    propsToModify.forEach((prop) => {
      if (book.volumeInfo && book.volumeInfo.imageLinks) {
        book.volumeInfo.imageLinks[prop] = book.volumeInfo.imageLinks[prop].replace('http://', 'https://');
      }
    })
    return book;
  }
  searchBooks(query: string): Observable<any> {
    return this.http.get(`${this.booksApiUrl}/?q=${query}`)
          .map((res: any) => {
            res = res.json();
            return res.items.map(this.replaceHttpsInProps)
          });
  }

  getBookById(id: string): Observable<any> {
    return this.http.get(`${this.booksApiUrl}/${id}`)
          .map((resp) => {
            const book = resp.json()
            return this.replaceHttpsInProps(book);
          });
  }
}
