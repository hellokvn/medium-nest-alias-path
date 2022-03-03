import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';

@Module({
  controllers: [PlayerController],
})
export class PlayerModule {}
