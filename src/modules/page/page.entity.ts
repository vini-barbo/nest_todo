import type { UUID } from 'crypto';
import { Entity, PrimaryColumn, Generated, Column } from 'typeorm';

@Entity({ name: 'page' })
export class PageEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: UUID;

  @Column()
  user_id: UUID;

  @Column()
  content: string;
}
