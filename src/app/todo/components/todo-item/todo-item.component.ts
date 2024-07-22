import { Component, Input } from "@angular/core";
import { TodoService } from "../../todo.service";
import { Todo } from "../../types/todo.type";

@Component({
	selector: "todo-item",
	standalone: true,
	imports: [],
	templateUrl: "./todo-item.component.html",
	styleUrl: "./todo-item.component.scss",
})
export class TodoItemComponent {
	@Input({ required: true }) todoItem!: Todo;

	constructor(private todoService: TodoService) {}

	handleCheck() {
		this.todoService.toggleCheckById(this.todoItem.id);
	}

	handleRemove() {
		this.todoService.removeTodoById(this.todoItem.id);
	}
}
