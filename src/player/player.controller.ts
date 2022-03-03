import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { wait } from '@/common/helper/utils.helper';

@Controller('player')
export class PlayerController {
  @Get()
  public async getPlayer(): Promise<any> {
    await wait(1000);

    return {};
  }
}
