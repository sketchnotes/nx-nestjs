import { createConnection } from 'typeorm';

import { DATABASE_CONNECTION } from '@v-10/api-shared';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { AuthorEntity } from '@v-10/authors';
import { PostEntity } from '@v-10/posts';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'denys',
      entities: [
        AuthorEntity,
        PostEntity,
      ],
      synchronize: process.env.NODE_ENV !== 'production',
      logging: process.env.NODE_ENV !== 'production',
    }),
  },
];