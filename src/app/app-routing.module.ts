import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBooksComponent } from 'app/pages/search-books/search-books.component';
import { BookDetailPageComponent } from 'app/pages/book-detail-page/book-detail-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    component: SearchBooksComponent
  },
  {
    path: 'book/:id',
    component: BookDetailPageComponent
  }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
