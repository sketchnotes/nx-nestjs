import { Connection } from 'typeorm';
import {
  POST_REPOSITORY,
  DATABASE_CONNECTION
} from '@v-10/api-shared';
import { PostEntity } from './typeorm/post.entity';

export const postProviders = [
  {
    provide: POST_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(PostEntity),
    inject: [DATABASE_CONNECTION],
  },
];