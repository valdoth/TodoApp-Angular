import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList: any;

  constructor() { }

  ngOnInit(): void {
  }

  getfavouriteTasks(isFavourite: boolean) {
    return this.todoList.filter((item: any) => item.favourite === isFavourite)
  }

}
