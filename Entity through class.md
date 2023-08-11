# Entity through class
With this approach we can create a class that will be responsible for creating the entity in the database.

## Entity

```ts
import json from './prisma/json-schema/json-schema.json'

const user = json.

type CreateArgs<T> = {
  data: Prisma.CreateInput<T>
}

class Entity {
  name: string

  constructor(name: string) {
    this.name = name
  }

  async create(args: Prisma.CreateArgs<T> /*idea of type*/ ) {
    return await prisma[this.name].create(args)
  }
}

const ticketEntity = new Entity('ticket')
```

```ts
 return await ticketEntity.create({
    data: {
      ...args,
      author: {
        connect: { id: args.author.id }
      },
      services: {
        connect: args.services.map(service => ({ id: service.id }))
      },
      editors: {
        connect: args.editor?.map(editor => ({ id: editor.id })) ?? []
      }
    }
  })
```

## Reminders

- [ ] Create a class that will be responsible for creating the entity in the database.
- [ ] Ensure that the method have to be a valid and usefull type.
- [ ] Ensure that the class have all the required methods.