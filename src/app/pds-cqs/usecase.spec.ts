import { TestBed } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoListUsecase } from './usecase';

describe('TodoListUsecase', () => {
  let usecase: TodoListUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListUsecase],
    });
    usecase = TestBed.inject(TodoListUsecase);
  });

  it('should create', () => {
    expect(usecase).toBeTruthy();
  });

  describe('addTodo()', () => {
    it('state の todos が引数で渡したテキストの title を持つ todo が追加された配列を返すこと', () => {
      const title = 'Hello Signals';
      const currentTodos = usecase.state.todos();

      usecase.addTodo(title);

      const expected: Todo[] = [
        { id: 2, title, completed: false },
        ...currentTodos,
      ];

      expect(usecase.state.todos()).toEqual(expected);
      expect(usecase.state.incompletedTodos()).toEqual(expected);
      expect(usecase.state.completedTodos()).toEqual([]);
    });
  });

  describe('setTodoCompleted()', () => {
    it('引数で渡した id を持つ todo の completed が true になった Todo を返すこと', () => {
      const currentTodos = usecase.state.todos();
      const targetTodo = currentTodos[0];

      usecase.setTodoCompleted(targetTodo.id, true);

      const expected: Todo[] = [{ ...targetTodo, completed: true }];

      expect(usecase.state.todos()).toEqual(expected);
      expect(usecase.state.incompletedTodos()).toEqual([]);
      expect(usecase.state.completedTodos()).toEqual(expected);
    });
  });
});
