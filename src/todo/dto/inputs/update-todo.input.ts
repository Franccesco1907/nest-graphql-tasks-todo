import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsString, IsNotEmpty, MaxLength, Min, IsOptional, IsBoolean } from "class-validator";

@InputType()
export class UpdateTodoInput {

  @Field(() => Int, { description: 'Id of the task' })
  @IsInt()
  @Min(1)
  id:number;

  @Field(() => String, { description: 'What needs to be done', nullable: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @IsOptional()
  description?: string;

  @Field(() => Boolean, { description: 'Is the task completed', nullable: true })
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}