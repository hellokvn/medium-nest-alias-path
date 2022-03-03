import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [PlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
