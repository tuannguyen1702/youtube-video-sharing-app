import { Entity, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { User } from '../users/users.entity';

@Entity()
export class Video extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'text',
  })
  sharedLink: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  youtubeId: string;

  @ManyToMany(() => User)
  @JoinTable()
  likeBy: User[];

  @ManyToMany(() => User)
  @JoinTable()
  dislikeBy: User[];

  @ManyToOne(() => User, (user) => user.id)
  createdBy: User;
}
