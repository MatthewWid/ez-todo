import { Component, ViewEncapsulation } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TodoAppComponent } from "./todo-app/todo-app.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, TodoAppComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
	title = "ez-todo";
}
