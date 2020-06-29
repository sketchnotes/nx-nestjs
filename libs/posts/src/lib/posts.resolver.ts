import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

import { Post } from './models/post.model';
import { PostsService } from './posts.service';

@Resolver(of => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
  ) {}

  @Query(returns => [Post])
  async posts(): Promise<Post[]> {
    const posts = await this.postsService.getAll();
    return posts;
  }
}