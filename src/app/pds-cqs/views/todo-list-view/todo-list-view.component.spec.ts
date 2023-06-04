import { render, screen } from '@testing-library/angular';
import { Todo } from '../../todo';
import { TodoListViewComponent } from './todo-list-view.component';

describe('TodoListViewComponent', () => {
  let component: TodoListViewComponent;

  it('should create', async () => {
    const { fixture } = await render(TodoListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('Input プロパティ todos の有無による表示の違い', () => {
    it('todos を渡した場合に、checkbox が表示されること', async () => {
      const todos: Todo[] = [{ id: 1, title: 'test', completed: false }];
      const { fixture } = await render(TodoListViewComponent, {
        componentInputs: { todos },
      });
      component = fixture.componentInstance;
      fixture.detectChanges();

      expect(screen.getByRole('checkbox', { suggest: true })).toBeTruthy();
    });

    it('todos を渡さなかった場合に、checkbox が表示されないこと', async () => {
      const todos: Todo[] = [];
      const { fixture } = await render(TodoListViewComponent, {
        componentInputs: { todos },
      });
      component = fixture.componentInstance;
      fixture.detectChanges();

      expect(screen.queryByRole('checkbox', { suggest: true })).toBeNull();
    });
  });
});
