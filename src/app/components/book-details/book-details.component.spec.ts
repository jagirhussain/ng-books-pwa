import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';
import { CustMaterialModule } from '../../shared/cust-material/cust-material.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustMaterialModule, RouterTestingModule ],
      declarations: [ BookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
