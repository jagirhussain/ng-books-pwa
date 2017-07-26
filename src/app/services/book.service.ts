import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  booksApiUrl = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: Http) { }

  searchBooks(query: string): Observable<any> {
    return this.http.get(`${this.booksApiUrl}/?q=${query}`)
          .map(res => res.json());
  }

  getBookById(id: string): Observable<any> {
    return this.http.get(`${this.booksApiUrl}/${id}`)
          .map((resp) => resp.json());
  }
}
