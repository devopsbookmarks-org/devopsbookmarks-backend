import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { Entity, Column } from 'typeorm';

@Entity('tags')
export class Tag extends EntityBase {

    @Column()
    public name: string;

    @Column()
    public description: string;

}
