import { Resolver, Query, ResolveField, Parent, Mutation, Args } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { CreateAuthorDto } from './dto/create-author';
import { AuthorsService } from './authors.service';

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(
    private readonly authorsService: AuthorsService,
  ) {}

  @Query(returns => [Author])
  async authors(): Promise<Author[]> {
    const authors = await this.authorsService.getAll();
    return authors;
  }

  @Mutation(returns => Author)
  async createAuthor(
    @Args(
      { name: 'input', type: () => CreateAuthorDto }
    ) input: CreateAuthorDto
  ) {
    const author = await this.authorsService.create(input);

    return author;
  }

}
