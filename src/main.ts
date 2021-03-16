import { Server } from '@nestjs.pro/common/dist/server/Server';
import { BackendModule } from './BackendModule';

const serverUrls = [];

if (Server.getEnvironment() === 'local') {

    serverUrls.push(`http://localhost:${ process.env.PORT || 8080 }`);

} else if (Server.getEnvironment() === 'docker') {

    serverUrls.push('http://localhost:18080');

}

Server.bootstrap(BackendModule, 'bookmarks', Number(process.env.PORT) || 8080, {

    path: '/bookmarks/swagger',
    title: 'DevOps Bookmarks API',
    description: 'DevOps Bookmarks Management API',
    version: '0.0.1',
    tags: [],
    contactName: 'DevOps Bookmarks',
    contactEmail: 'support@devopsbookmarkgs.org',
    contactUrl: 'https://devopsbookmarkgs.org',
    docsDescription: 'docs',
    docsUrl: 'https://devopsbookmarkgs.org',
    serverUrls

}, [

    'http://localhost:4200'

], []);
