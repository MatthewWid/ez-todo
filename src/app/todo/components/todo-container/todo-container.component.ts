import { Component } from "@angular/core";
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
	selector: "todo-container",
	standalone: true,
	imports: [AddTodoComponent, TodoListComponent],
	templateUrl: "./todo-container.component.html",
	styleUrl: "./todo-container.component.scss",
})
export class TodoContainerComponent {}
