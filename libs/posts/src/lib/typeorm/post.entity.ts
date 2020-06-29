import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { PostInterace } from '../models/post';
import { AuthorEntity } from '@v-10/authors';

@Entity({ name: 'post' })
export class PostEntity extends BaseEntity implements PostInterace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne('AuthorEntity', 'posts', { eager: false, nullable: true })
  author: AuthorEntity;
}
