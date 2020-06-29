import { Module } from '@nestjs/common';
import { DatabaseModule } from '@v-10/database';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { authorProviders } from './author.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...authorProviders,
    AuthorsService,
    AuthorsResolver,
  ],
  exports: [
    AuthorsService,
    AuthorsResolver,
  ],
})
export class AuthorsModule {}
