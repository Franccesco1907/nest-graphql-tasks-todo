import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType({description: 'Todo quick aggregations'})
export class AggregationsType {
  @Field(() => Int, { description: 'Total todos' })
  total: number;
  @Field(() => Int, { description: 'Pending todos' })
  pending: number;
  @Field(() => Int, { description: 'Completed todos' })
  completed: number;
  @Field(() => Int, { deprecationReason: 'Most use completed instead' })
  totalTodosCompleted: number;
}