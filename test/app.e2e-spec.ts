import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('GraphQL API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns todo counts through GraphQL', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query: '{ totalTodos pendingTodos completedTodos }' })
      .expect(200)
      .expect({ data: { totalTodos: 4, pendingTodos: 3, completedTodos: 1 } });
  });
});
