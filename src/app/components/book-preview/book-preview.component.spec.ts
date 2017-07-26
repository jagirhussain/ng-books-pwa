import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPreviewComponent } from './book-preview.component';
import { CustMaterialModule } from '../../shared/cust-material/cust-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { EllipsisPipe } from '../../pipes/ellipsis.pipe';

const dummyBook = {
  'id': 'U3ljjHts3b8C',
  'volumeInfo': {
    'title': 'Making Truth',
    'subtitle': 'Metaphor in Science',
    'authors': ['Theodore L. Brown'],
    'publisher': 'University of Illinois Press',
    'publishedDate': '2003',
    'description': 'InMaking Truth: Metaphor in ScienceTheodore L.',
    'averageRating': 4,
    'ratingsCount': 1,
    'imageLinks': {
      'smallThumbnail': 'http://books.google.com/books/content?id=U3ljjHts3b8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      'thumbnail': 'http://books.google.com/books/content?id=U3ljjHts3b8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'},
    }};

describe('BookPreviewComponent', () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustMaterialModule, RouterTestingModule ],
      declarations: [ BookPreviewComponent, EllipsisPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPreviewComponent);
    component = fixture.componentInstance;
    component.book = dummyBook;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
