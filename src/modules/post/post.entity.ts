import type { UUID } from 'crypto';
import { Entity, PrimaryColumn, Generated, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'post' })
export class PostEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: UUID;


  @ManyToOne(() => UserEntity, (user) => user.id)
  @Column({name:'user_id'})
  userId: UUID;

  @Column()
  content: string;

  @Column()
  title: string;

  @Column({name:'created_at'  } )
  createdAt: Date;

  
  @Column({name:'updated_at'})
  updated_at: Date;
}
