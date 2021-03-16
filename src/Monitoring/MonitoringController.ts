import { Controller, Get } from '@nestjs/common';

@Controller('/monitoring')
export class MonitoringController {

    @Get('/ping')
    public async ping(): Promise<string> {

        return 'pong';

    }

}
