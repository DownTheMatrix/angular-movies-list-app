import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FilterPipe } from './filter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  FontAwesomeModule ],
  declarations: [ AppComponent, MoviesListComponent, FilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
