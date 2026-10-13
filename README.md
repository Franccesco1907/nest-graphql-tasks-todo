# NestJS GraphQL tasks

In-memory todo API for learning NestJS/GraphQL. Tasks reset on restart.

- Install with `npm ci`, then run `npm run start:dev`.
- Endpoint: `http://localhost:3000/graphql`; schema: `src/schema.gql` (generated at startup).
- Queries expose todos, status filtering and counts; mutations create, update and remove todos.
- Production: `npm run build`, then `npm run start:prod`.
- Checks: `npm test -- --runInBand`, `npm run test:e2e -- --runInBand`, `npm run test:cov`.
