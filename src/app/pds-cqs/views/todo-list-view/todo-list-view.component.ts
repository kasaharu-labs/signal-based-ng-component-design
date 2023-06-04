import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.scss'],
})
export class TodoListViewComponent {
  @Input() todos: Todo[] = [];

  @Output() changeCompleted = new EventEmitter<{
    id: Todo['id'];
    completed: boolean;
  }>();
}
