import { Component, ViewEncapsulation } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TodoContainerComponent } from "./todo/components/todo-container/todo-container.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, TodoContainerComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
	title = "ez-todo";
}
