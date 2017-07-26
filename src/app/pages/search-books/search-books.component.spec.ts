import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksComponent } from './search-books.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { HttpModule } from '@angular/http';

describe('SearchBooksComponent', () => {
  let component: SearchBooksComponent;
  let fixture: ComponentFixture<SearchBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ FormsModule, HttpModule ],
      providers: [ BookService ],
      declarations: [ SearchBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
