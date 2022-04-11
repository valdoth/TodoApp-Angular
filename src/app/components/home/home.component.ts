import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/models/todo-list.model';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  todoListArray: TodoList[] = [];
  selectedTodoList: TodoList = new TodoList('');
  
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoListArray = this.todoService.getTodoLists();
    this.selectedTodoList = this.todoListArray[0];
  }

  selectTodoList(todoList: TodoList) {
    this.selectedTodoList = todoList;
  }

  getTodoList() {
    return this.todoListArray;
  }

  onListAdded() {
    if (this.todoListArray.length > 0) {
      this.selectedTodoList = this.todoListArray[0];
    } 
  }
}
