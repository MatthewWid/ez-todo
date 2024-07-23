import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
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
