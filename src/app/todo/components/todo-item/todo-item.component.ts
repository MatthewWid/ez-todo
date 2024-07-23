import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { faTrashCan } from "@ng-icons/font-awesome/regular";
import { faSolidCheck, faSolidRotateLeft } from "@ng-icons/font-awesome/solid";
import { TodoService } from "../../todo.service";
import { Todo } from "../../types/todo.type";

@Component({
	selector: "todo-item",
	standalone: true,
	imports: [CommonModule, NgIconComponent],
	providers: [provideIcons({ faSolidCheck, faSolidRotateLeft, faTrashCan })],
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
