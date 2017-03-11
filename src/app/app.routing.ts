import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

const appRoutes: Routes = [
    { path: '', component: ListTodosComponent },    
    { path: 'add', component: AddTodoComponent }    
];

export const RoutingProviders: any[] = [

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);