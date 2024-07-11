import type { UUID } from 'crypto';
import { Entity, PrimaryColumn, Generated, Column, ManyToOne } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    id: UUID;

    @Column()
    name: string;

    @Column()
    birthDate: Date;

    @Column()
    cpf: string;

    @Column()
    email: string;
}
