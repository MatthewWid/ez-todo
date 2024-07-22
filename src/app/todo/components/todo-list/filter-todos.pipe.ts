import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../../types/todo.type";

@Pipe({
	name: "filterTodos",
	standalone: true,
})
export class FilterTodosPipe implements PipeTransform {
	transform(todos: Todo[], checked: boolean): Todo[] {
		return todos.filter((todo) => todo.checked === checked);
	}
}
