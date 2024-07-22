import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: "add-todo",
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: "./add-todo.component.html",
	styleUrl: "./add-todo.component.scss",
})
export class AddTodoComponent {
	form = new FormGroup({
		text: new FormControl(""),
	});

	@Output() onSubmit = new EventEmitter<string>();

	handleSubmit() {
		this.onSubmit.emit(this.form.value.text as string);
		this.form.reset();
	}
}
