import { Module } from '@nestjs/common';
import { MessagesService } from './message.service';

@Module({
  exports: [MessagesService],
})
export class AppModule {}
