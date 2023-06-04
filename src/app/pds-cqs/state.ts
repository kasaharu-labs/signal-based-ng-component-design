import { computed, signal } from '@angular/core';
import { SignalState } from '../shared/signal-state';
import { Todo } from './todo';

export type State = {
  todos: Todo[];
  incompletedTodos: Todo[];
  completedTodos: Todo[];
};

export class TodoListState implements SignalState<State> {
  todos = signal<Todo[]>([{ id: 1, title: 'Learn Signals', completed: false }]);

  completedTodos = computed(() => this.todos().filter((t) => t.completed));
  incompletedTodos = computed(() => this.todos().filter((t) => !t.completed));

  addTodo(title: string): void {
    this.todos.update((todos) => [
      { id: todos.length + 1, title, completed: false },
      ...todos,
    ]);
  }

  setCompleted(id: Todo['id'], completed: boolean): void {
    this.todos.mutate((todos) => {
      const item = todos.find((t) => t.id === id);
      if (item !== undefined) {
        item.completed = completed;
      }
    });
  }

  asReadonly() {
    return {
      todos: this.todos.asReadonly(),
      incompletedTodos: this.incompletedTodos,
      completedTodos: this.completedTodos,
    };
  }
}
