import { RouterModule } from '@angular/router';
// import { BooksModule } from './books/books.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgServiceWorker, ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustMaterialModule } from './shared/cust-material/cust-material.module';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { BookService } from './services/book.service';
import { SearchBooksComponent } from './pages/search-books/search-books.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EllipsisPipe,
    SearchBooksComponent,
    BookPreviewComponent,
    BooksListComponent,
    BookDetailPageComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'ng-books'}),
    RouterModule,
    ServiceWorkerModule,
    AppRoutes,
    FormsModule,
    HttpModule,
    CustMaterialModule
  ],
  providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    },
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private sw: NgServiceWorker) {
    sw.registerForPush({
      applicationServerKey: 'BGSn9VlhizlenDmZbU53-cxBm67ZiR6-PN2Yf9r8rsslpt8nhsAUqxPSiKsuQ4gDmXDsiaxANFJD5wS6qnDFkD0'  // your push server key
    }).subscribe(sub => {
      console.log(sub.toJSON());
    })

    sw.push.subscribe(notif => {
      console.log(notif);
    })
  }
}
