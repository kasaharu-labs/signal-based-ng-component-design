import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoListUsecase } from './usecase';
import { TodoListViewComponent } from './views/todo-list-view/todo-list-view.component';

@Component({
  selector: 'app-pds-cqs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TodoListViewComponent],
  providers: [TodoListUsecase],
  templateUrl: './pds-cqs.component.html',
  styleUrls: ['./pds-cqs.component.scss'],
})
export default class PdsCqsComponent {
  usecase = inject(TodoListUsecase);

  newTodoInput = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true,
  });

  addTodo() {
    const title = this.newTodoInput.value;
    this.usecase.addTodo(title);
    this.newTodoInput.reset();
  }
}
