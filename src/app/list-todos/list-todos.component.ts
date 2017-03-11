import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html'
})
export class ListTodosComponent implements OnInit {
  public todos: any = [];

  constructor() { }

  ngOnInit() {
    this.loadLocal();
  }

  loadLocal() {
    this.todos = JSON.parse(localStorage.getItem('todos'));
  }

  saveLocal() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    alert('Itens salvos');
  }
}
