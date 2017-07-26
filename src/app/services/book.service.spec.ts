import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BookService]
    });
  });

  it('should be created', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));
});
