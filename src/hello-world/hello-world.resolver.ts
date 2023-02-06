import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { description: 'Hola Mundo es lo que retorna', name: 'hello' })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, { name: 'randomNumberFromZeroTo', description: 'From zero to argument TO (default 6)' })
  getRandomNumberFromZeroTo(@Args('to', { nullable: true, type: () => Int }) to: number): number {
    return Math.floor(Math.random() * to) + 1;
  }
}
