**`MVC` and `DDD` architecture example using: Prisma, Nexus, GraphQL**

![asd](https://graphql.org/img/diagrams/business_layer.png)

Project structure:

- api.common - Basic entities of system

- api.user.domain - MVC domain model

- api.user.services - User service layer (business logic)

- api.user.repository - User repository layer using `prisma`

- api.user.mappers - Mappers for convert `repo` -> `domain` -> `nexus`

- graphql.schema.user - `Graphql` schema definition using `Nexus`

TODO: 
- DI (dependency injection)
- Error handling
