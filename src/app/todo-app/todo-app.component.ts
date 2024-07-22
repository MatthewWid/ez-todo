import { Component } from "@angular/core";
import { Todo } from "../types/todo.type";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
	selector: "todo-app",
	standalone: true,
	imports: [AddTodoComponent],
	templateUrl: "./todo-app.component.html",
	styleUrl: "./todo-app.component.scss",
})
export class TodoAppComponent {
	todos: Todo[] = [];

	addTodo(text: string) {
		this.todos.push({
			id: crypto.randomUUID(),
			text,
			checked: false,
		});
	}
}
