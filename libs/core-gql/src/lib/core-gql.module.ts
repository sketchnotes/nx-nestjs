import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorsModule } from '@v-10/authors';
import { PostsModule } from '@v-10/posts';


@Module({
  imports: [
    AuthorsModule,
    PostsModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
      playground: process.env.NODE_ENV !== 'production'
    })
  ],
  exports: [],
})
export class CoreGqlModule {}
