import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,MatCardModule, MatButtonModule, MatGridListModule ],
  entryComponents:[DialogComponent],
  declarations: [ AppComponent, HelloComponent, NewEmpComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
