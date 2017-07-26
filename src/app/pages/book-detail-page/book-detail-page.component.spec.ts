import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailPageComponent } from './book-detail-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('BookDetailPageComponent', () => {
  let component: BookDetailPageComponent;
  let fixture: ComponentFixture<BookDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ RouterTestingModule, HttpModule ],
      providers: [
        BookService,
        { provide: ActivatedRoute, useValue: { params: Observable.of({id: 123})}} ],
      declarations: [ BookDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
