import { Module } from '@nestjs/common';
import { DatabaseModule } from '@v-10/database';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { postProviders } from './post.providers';


@Module({
  imports: [DatabaseModule],
  providers: [
    ...postProviders,
    PostsService,
    PostsResolver,
  ],
  exports: [
    PostsService,
    PostsResolver,
  ],
})
export class PostsModule {}
