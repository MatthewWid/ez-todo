import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { faSolidPlus } from "@ng-icons/font-awesome/solid";
import { TodoService } from "../../todo.service";

@Component({
	selector: "add-todo",
	standalone: true,
	imports: [ReactiveFormsModule, NgIconComponent],
	providers: [provideIcons({ faSolidPlus })],
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
