import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TodoService } from "../todo/todo.service";

@Component({
	selector: "add-todo",
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: "./add-todo.component.html",
	styleUrl: "./add-todo.component.scss",
})
export class AddTodoComponent {
	constructor(private todoService: TodoService) {}

	form = new FormGroup({
		text: new FormControl(""),
	});

	handleSubmit() {
		this.todoService.addTodo(this.form.value.text as string);
		this.form.reset();
	}
}
