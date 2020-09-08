import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'employee', component: NewEmpComponent },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule ,MatCardModule, MatButtonModule, MatGridListModule,
      RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, DialogComponent, NewEmpComponent ],
  entryComponents:[ DialogComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
