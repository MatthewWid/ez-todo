import { Component } from "@angular/core";
import { TodoService } from "../../todo.service";
import { FilterTodosPipe } from "./filter-todos.pipe";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { CommonModule } from "@angular/common";

@Component({
	selector: "todo-list",
	standalone: true,
	imports: [CommonModule, FilterTodosPipe, TodoItemComponent],
	templateUrl: "./todo-list.component.html",
	styleUrl: "./todo-list.component.scss",
})
export class TodoListComponent {
	constructor(public todoService: TodoService) {}
}
