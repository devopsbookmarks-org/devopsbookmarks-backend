import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { Entity, Column } from 'typeorm';

@Entity('topics')
export class Topic extends EntityBase {

    @Column()
    public name: string;

    @Column()
    public description: string;

}
