import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../app.routes';
import PdsCqsComponent from './pds-cqs.component';
import { TodoListUsecase } from './usecase';

describe('PdsCqsComponent', () => {
  let harness: RouterTestingHarness;
  let component: PdsCqsComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [PdsCqsComponent],
      providers: [provideRouter(routes)],
    });

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('', PdsCqsComponent);

    harness.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input に値を入力してボタンを押すと usecase.addTodo() が呼ばれること', () => {
    const usecase = harness.routeDebugElement?.injector.get(TodoListUsecase)!;
    spyOn(usecase, 'addTodo');
    const hostElement: HTMLElement = harness.routeNativeElement!;
    const inputElm = hostElement.querySelector('input')!;
    inputElm.value = 'test';
    inputElm.dispatchEvent(new Event('input'));

    harness.detectChanges();

    const buttonElm = hostElement.querySelector('button')!;
    buttonElm.click();
    expect(usecase.addTodo).toHaveBeenCalled();
  });
});
