import { TodoService } from './todo.service';

describe('TodoService', () => {
  it('creates a valid task after every existing task has been removed', () => {
    const service = new TodoService();
    for (const todo of service.findAll({})) service.delete(todo.id);

    const first = service.create({ description: 'First new task' });
    const second = service.create({ description: 'Second new task' });

    expect(Number.isInteger(first.id)).toBe(true);
    expect(first.id).toBeGreaterThan(0);
    expect(second.id).toBeGreaterThan(first.id);
    expect(service.findOne(first.id)).toEqual(first);
    expect(service.totalTodos).toBe(2);
    expect(first.done).toBe(false);
  });
});
