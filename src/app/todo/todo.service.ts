import { Injectable } from "@angular/core";
import { Todo } from "./types/todo.type";

@Injectable({
	providedIn: "root",
})
export class TodoService {
	todos: Todo[] = [];

	addTodo(text: string) {
		this.todos.push({
			id: crypto.randomUUID(),
			text,
			checked: false,
		});
	}
}
