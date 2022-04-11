export class TodoItem {
    id: number = Date.now() + Math.round(Math.random() * 1000);
    title = "";
    dueDate: Date = new Date();
    completed = false;
    favourite = false;

    constructor(title: string) {
        this.title = title;
    }
}