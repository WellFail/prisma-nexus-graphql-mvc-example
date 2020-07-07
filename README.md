**`MVC` and `DDD` architecture example using: Prisma, Nexus, GraphQL**

Project structure:

- api.common - Basic entities of system

- api.user.schema - `Graphql` schema definition using `Nexus`

- api.user.domain - MVC domain model

- api.user.services - User service layer (business logic)

- api.user.repository - User repository layer using `prisma`

- api.user.mappers - Mappers for convert `repo` -> `domain` -> `nexus`
