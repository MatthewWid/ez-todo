import { Component } from "@angular/core";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
	selector: "todo-app",
	standalone: true,
	imports: [AddTodoComponent],
	templateUrl: "./todo-app.component.html",
	styleUrl: "./todo-app.component.scss",
})
export class TodoAppComponent {}
