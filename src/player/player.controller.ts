import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { randomInt } from '@Helper/utils.helper';
// import { randomInt } from '@/common/helper/utils.helper'; // this works too
// import { randomInt } from 'src/common/helper/utils.helper'; // original

@Controller('player')
export class PlayerController {
  @Get()
  public async getPlayer(): Promise<number> {
    return randomInt(0, 100);
  }
}
