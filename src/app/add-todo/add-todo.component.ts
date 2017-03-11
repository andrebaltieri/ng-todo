import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html'
})
export class AddTodoComponent implements OnInit {
  public todos: any = [];
  public todo: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
    this.clearTodo();
    this.loadLocal();
  }

  add() {
    this.todo.id = this.todos.length + 1;
    this.todos.push(this.todo);
    this.clearTodo();
    this.saveLocal();
    this.router.navigateByUrl('/');
  }

  clearTodo() {
    this.todo = {
      id: 0,
      title: '',
      done: false
    };
  }

  loadLocal() {
    this.todos = JSON.parse(localStorage.getItem('todos'));    
  }

  saveLocal() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
