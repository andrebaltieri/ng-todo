import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

import { Routing, RoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    AddTodoComponent,
    ListTodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
