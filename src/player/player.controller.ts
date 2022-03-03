import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
// import { randomInt } from '../common/helper/utils.helper'; <- would be the normal way
import { randomInt } from '@Helper/utils.helper';
// import { randomInt } from '../common/helper/utils.helper'; <- would be the normal way
import { wait } from '@/common/helper/utils.helper';

@Controller('player')
export class PlayerController {
  @Get()
  public async getPlayer(): Promise<number> {
    await wait(1000);

    return randomInt(0, 100);
  }
}
