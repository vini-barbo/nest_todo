import type { UUID } from 'crypto';
import { Entity, PrimaryColumn, Generated, Column, OneToMany } from 'typeorm';
import { PostEntity } from '../post/post.entity';

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryColumn({ type: 'uuid' })
    @Generated('uuid')
    @OneToMany(() => PostEntity, (post) => post.userId)
    id: UUID;

    @Column()
    name: string;

    @Column()
    birthDate: Date;

    @Column({ unique: true })
    cpf: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

}
