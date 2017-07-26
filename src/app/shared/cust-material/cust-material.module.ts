import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdSidenavModule,
  MdListModule,
  MdTabsModule,
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdCardModule,
  MdRadioModule,
  MdGridListModule,
  MdInputModule,
  MdIconModule,
  MdChipsModule,
  MdMenuModule,
  MdSelectModule,
  MdProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MdSidenavModule,
    MdListModule,
    MdTabsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdCardModule,
    MdRadioModule,
    MdGridListModule,
    MdInputModule,
    MdIconModule,
    MdChipsModule,
    MdMenuModule,
    MdSelectModule,
    MdProgressSpinnerModule
  ],
  exports: [
    MdSidenavModule,
    MdListModule,
    MdTabsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdCardModule,
    MdRadioModule,
    MdGridListModule,
    MdInputModule,
    MdIconModule,
    MdChipsModule,
    MdMenuModule,
    MdSelectModule,
    MdProgressSpinnerModule
  ]
})

export class CustMaterialModule { };
