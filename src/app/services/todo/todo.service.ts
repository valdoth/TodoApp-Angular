import { Injectable } from '@angular/core';
import { TodoItem } from '../../models/todo-items.model';
import { TodoList } from '../../models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  L_KEY_TODO_LIST = 'todo-list';
  todoListArray: TodoList[] = [];

  constructor() {
    
  }

  getTodoLists () {
    const todoListString = localStorage.getItem(this.L_KEY_TODO_LIST);
    if (todoListString) {
      this.todoListArray = JSON.parse(todoListString);
    } else {
      this.todoListArray = [];
    }
    return this.todoListArray;
  }

  addList(listName: string) {
    this.todoListArray.push(new TodoList(listName));
    localStorage.setItem(this.L_KEY_TODO_LIST, JSON.stringify(this.todoListArray));
  }

  addListItem(listId: number, itemName: string) {
    const listObject = this.todoListArray.filter(listItem => listItem.id === listId)[0];
    listObject.todos.push(new TodoItem(itemName));
    localStorage.setItem(this.L_KEY_TODO_LIST, JSON.stringify(this.todoListArray));
  }

}


