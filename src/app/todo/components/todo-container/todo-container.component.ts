import { Component } from "@angular/core";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
	selector: "todo-container",
	standalone: true,
	imports: [AddTodoComponent],
	templateUrl: "./todo-container.component.html",
	styleUrl: "./todo-container.component.scss",
})
export class TodoContainerComponent {}
