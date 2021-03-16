import { EntityBase } from '@nestjs.pro/common/dist/entities/EntityBase';
import { Entity, Column } from 'typeorm';

@Entity('bookmarks')
export class Bookmark extends EntityBase {

    @Column()
    public name: string;

    @Column()
    public description: string;

}
