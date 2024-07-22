import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StorageService } from "../storage/storage.service";
import { STORAGE_KEY } from "./todo.constants";
import { Todo } from "./types/todo.type";

@Injectable({
	providedIn: "root",
})
export class TodoService {
	private todos = new BehaviorSubject<Todo[]>([]);

	constructor(private storageService: StorageService) {
		this.todos.next(storageService.get(STORAGE_KEY) ?? []);

		this.todos.subscribe((todos) => {
			this.storageService.set(STORAGE_KEY, todos);
		});
	}

	getTodos() {
		return this.todos.asObservable();
	}

	addTodo(text: string) {
		this.todos.next(
			this.todos.value.concat({
				id: crypto.randomUUID(),
				text,
				checked: false,
			})
		);
	}

	removeTodoById(id: string) {
		this.todos.next(this.todos.value.filter((todo) => todo.id !== id));
	}

	toggleCheckById(id: string) {
		this.todos.next(
			this.todos.value.map((todo) =>
				todo.id === id ? { ...todo, checked: !todo.checked } : todo
			)
		);
	}
}
