import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput, UpdateTodoInput, StatusArgs } from './dto';
import { AggregationsType } from './dto/types/aggregations.type';

@Resolver()
export class TodoResolver {

  constructor(
    private readonly todoService: TodoService
  ) { }

  @Query(() => [Todo], { name: 'todos' })
  findAll(
    @Args() statusArgs: StatusArgs
  ): Todo[] {
    return this.todoService.findAll(statusArgs);
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo, { name: 'createTodo' })
  createTodo(
    @Args('createTodoInput') createTodoInput: CreateTodoInput
  ) {
    return this.todoService.create(createTodoInput);
  }

  @Mutation(() => Todo, { name: 'updateTodo' })
  updateTodo(
    @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  ) {
    return this.todoService.update(updateTodoInput);
  }

  @Mutation(() => Boolean)
  removeTodo(
    @Args('id', { type: () => Int }) id: number
  ) {
    return this.todoService.delete(id);
  }

  // Agregations

  @Query(() => Int, { name: 'totalTodos' })
  totalTodos() {
    return this.todoService.totalTodos;
  }

  @Query(() => Int, { name: 'pendingTodos' })
  pendingTodos() {
    return this.todoService.pendingTodos;
  }

  @Query(() => Int, { name: 'completedTodos' })
  completedTodos() {
    return this.todoService.completedTodos;
  }

  @Query(() => AggregationsType, { name: 'aggregations' })
  aggregations(): AggregationsType {
    return {
      total: this.todoService.totalTodos,
      pending: this.todoService.pendingTodos,
      completed: this.todoService.completedTodos,
      totalTodosCompleted: this.todoService.completedTodos,
    }
  }
}
