# Beemo
Beemo is an application that allows you to create any project you want, and keep track of it.

You can create tasks, assign them to users, and keep track of the progress of each task. You can also create teams, and assign users to them, so you can keep track of the progress
of each team as well. All of this and more, in a simple and easy to use interface. Beemo is the perfect tool for your projects. A perfect companion for your team.

## Tabla de Contenidos

1. [Prerequisites](#prerequisites)
2. [Setup](#setup)
3. [Commands](#commands)
4. [Project Configuration](#project-configuration)
5. [Project Structure](#project-structure)


## Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.17 or higher). The runtime environment for the backend.
- [Docker](https://www.docker.com/) The containerization platform used for the database.
- [pnpm](https://pnpm.io/) The package manager used for the backend.
- [Git](https://git-scm.com/) The version control system used for the project.
- [VSCode](https://code.visualstudio.com/) (Optional) The code editor used for the project. You can use any code editor you want but VSCode is recommended for the best experience it comes with settings and extensions that are recommended for the project, we will cover that later.

## Setup

1. Clone the repository to your local machine.

```bash
git clone https://github.com/santiagohernandezs/beemo_backend.git
```

2. Install the dependencies.

```bash
pnpm install
```

3. Create a .env file in the root of the project, and add the following variables.

```bash
# DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>
DATABASE_URL=postgres://root:root@localhost:8080/root
```

You can change the values of the variables if you want by raplacing the values in the docker-compose.yml file.

```yml
db:
  container_name: postgres_db
  ports:
    - "PORT:5432"
  image: postgres:14
  environment:
    POSTGRES_USER: MY_USERNAME
    POSTGRES_PASSWORD: MY_PASSWORD
    POSTGRES_DB: MY_DATABASE
```

4. Run the database container.

```bash
docker-compose up -d
```

5. Run the migrations.

```bash
pnpm migrate:dev
```

6. Run the application.

```bash
pnpm dev
```

## Commands

There are several commands you can run to help you develop the application all of them gouped in categories.

### Project Commands

Commands related to the project itself. These commands are used to build, mantain, and run the project.

| Command | Description |
| --- | --- |
| `pnpm prepare` | Install husky. |
| `pnpm dev` | Runs the application in development mode. |
| `pnpm getready` | A quick way to get the project ready and running. |

### Format/Lint Commands

Commands related to the format and lint of the project.

| Command | Description |
| --- | --- |
| `pnpm format:check` | Checks the format of the project. |
| `pnpm format:write` | Fixes the format of the project. |
| `pnpm format:prisma` | Fixes the format of the schema.prisma file. |
| `pnpm lint:check` | Checks the lint of the project. |
| `pnpm lint:fix` | Fixes the lint of the project. |
| `pnpm lint:view` | Opens the lint report in the browser. |

### Database Commands

| Command | Description |
| --- | --- |
| `pnpm compose` | Runs the database container. |
| `pnpm studio` | Opens the Prisma Studio. |
| `pnpm migrate:dev` | Runs the migrations. |
| `pnpm migrate:reset` | Resets the database. |

### Test Commands

| Command | Description |
| --- | --- |
| `pnpm test` | Runs the tests and generates a coverage report. |

### Other Commands

| Command | Description |
| --- | --- |
| `pnpm doc:generates` | Generates the documentation. |
| `pnpm doc:serve` | Serves the documentation in the browser. |

## Project Configuration

As mentioned before, VSCode is recommended for the best experience developing this project. If you are using VSCode, you can take advantage of those settings.
I implemented settings for extensions, tasks, debugger, and project settings. You can find all of them in the `.vscode` folder. I recomend you to not change those settings,
but if you want to, just make sure you know what you are doing, and you are not breaking anything.

## Project Structure

The project is structured in a way that makes it easy to navigate and understand. The project is divided in five main folders, `docs`, `prisma`, `src`, `tests` and `utils`.

```
└── 📁beemo_backend
    └── 📁docs <- Project Documentation
    └── 📁prisma <- Prisma files
    └── 📁src <- Project Source
    └── 📁test <- Unit tests
    └── 📁utils <- Project Utilities
```

### Docs

The `docs` folder contains the documentation of the project. The documentation is generated using [TypeDoc](https://typedoc.org/). You can generate the documentation by running the `pnpm doc:generate` command, and serve it in the browser by running the `pnpm doc:serve` command.

### Prisma

The `prisma` folder contains the schema.prisma file. This file is used by [Prisma](https://www.prisma.io/) to generate the database client. You can learn more about Prisma [here](https://www.prisma.io/).

```
└── 📁prisma
    └── data.ts <- Data to seed the database
    └── 📁migrations <- Migrations
    └── schema.prisma <- Prisma schema
    └── seed.ts <- Seed the database
```

### Src

The `src` folder contains the source code of the project. This folder is divided in many subfolders, each one with a different purpose. Each subfolder is considered a module of the project and each module is separated in four subfolders, `application`, `domain`, `infrastructure` and `types`.

```
└── 📁src
    └── 📁module <- Module directory
        └── 📁application <- Application layer
        └── 📁domain <- Domain layer
        └── 📁infrastructure <- Infrastructure layer
        └── 📁types <- Type layer
```

#### Application

The `application` folder contains the application layer of the module. This layer is responsible for the business logic of the module. This layer is divided in two subfolders, `commands` and `queries`.

#### Domain

The `domain` folder contains the domain layer of the module. This layer is responsible for the domain logic of the module. This layer is divided in two subfolders, `entities` and `value-objects`.

#### Infrastructure

The `infrastructure` folder contains the infrastructure layer of the module. This layer is responsible for the infrastructure logic of the module. This layer is divided in two subfolders, `database` and `services`.

#### Types

The `types` folder contains the types of the module. This folder is divided in two subfolders, `input-types` and `output-types`.

### Tests

The `tests` folder contains the tests of the project. The tests are written using [Jest](https://jestjs.io/). You can run the tests by running the `pnpm test` command.

### Utils

The `utils` folder contains the utilities of the project.
