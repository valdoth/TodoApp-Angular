import { TodoItem } from "./todo-items.model";

export class TodoList {
    id: number = Date.now() + Math.round(Math.random() * 1000);
    name = "";
    todos: TodoItem[] = [];

    constructor(name: string) {
        this.name = name;
    }
}