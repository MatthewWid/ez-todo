import { Injectable } from "@angular/core";
import { StorageService } from "../storage/storage.service";
import { STORAGE_KEY } from "./todo.constants";
import { Todo } from "./types/todo.type";

@Injectable({
	providedIn: "root",
})
export class TodoService {
	todos: Todo[];

	constructor(private storageService: StorageService) {
		this.todos = storageService.get(STORAGE_KEY) ?? [];
	}

	addTodo(text: string) {
		this.todos = this.todos.concat({
			id: crypto.randomUUID(),
			text,
			checked: false,
		});

		this.storageService.set(STORAGE_KEY, this.todos);
	}

	removeTodoById(id: string) {
		this.todos = this.todos.filter((todo) => todo.id !== id);

		this.storageService.set(STORAGE_KEY, this.todos);
	}

	toggleCheckById(id: string) {
		this.todos = this.todos.map((todo) =>
			todo.id === id ? { ...todo, checked: !todo.checked } : todo
		);

		this.storageService.set(STORAGE_KEY, this.todos);
	}
}
