import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../todo.service";
import { Todo } from "../../types/todo.type";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { FilterTodosPipe } from "./filter-todos.pipe";

@Component({
	selector: "todo-list",
	standalone: true,
	imports: [CommonModule, FilterTodosPipe, TodoItemComponent],
	templateUrl: "./todo-list.component.html",
	styleUrl: "./todo-list.component.scss",
})
export class TodoListComponent implements OnInit {
	tasksTodo: Todo[] = [];
	tasksCompleted: Todo[] = [];

	constructor(public todoService: TodoService) {}

	ngOnInit() {
		this.todoService.getTodos().subscribe((todos) => {
			this.tasksTodo = todos.filter((todo) => !todo.checked);
			this.tasksCompleted = todos.filter((todo) => todo.checked);
		});
	}
}
