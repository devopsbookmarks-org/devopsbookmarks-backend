import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './Bookmarks/Bookmark';
import { Tag } from './Tags/Tag';
import { Topic } from './Topics/Topic';

@Module({

    imports: [

        TypeOrmModule.forRoot({

            type: 'mysql',
            host: process.env.DB_HOSTNAME,
            port: Number.parseInt(process.env.DB_PORT) || 3306,
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || 'mysql',
            database: process.env.DB_NAME || 'bookmarks',
            synchronize: process.env.DB_SYNCHRONIZE === 'true' || true,
            connectTimeout: 30000,
            logging: process.env.DB_LOGGING === 'true',
            keepConnectionAlive: true,
            entities: [

                Bookmark,
                Tag,
                Topic

            ]

        }),

        TypeOrmModule.forFeature([])

    ],

    providers: [

        // BookmarksService

    ],

    controllers: [

        // BookmarksController

    ]

})
export class BackendModule {

}
