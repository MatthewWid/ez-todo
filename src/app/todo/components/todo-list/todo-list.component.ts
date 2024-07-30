import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { filter, map, Observable } from "rxjs";
import { TodoService } from "../../todo.service";
import { Todo } from "../../types/todo.type";
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
	selector: "todo-list",
	standalone: true,
	imports: [CommonModule, TodoItemComponent],
	templateUrl: "./todo-list.component.html",
	styleUrl: "./todo-list.component.scss",
})
export class TodoListComponent implements OnInit {
	tasksTodo!: Observable<Todo[]>;
	tasksCompleted!: Observable<Todo[]>;

	constructor(public todoService: TodoService) {}

	ngOnInit() {
		const todos$ = this.todoService.getTodos();

		this.tasksTodo = todos$.pipe(
			map((todos) => todos.filter((todo) => !todo.checked))
		);
		this.tasksCompleted = todos$.pipe(
			map((todos) => todos.filter((todo) => todo.checked))
		);
	}
}
