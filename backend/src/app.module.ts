import { Module } from '@nestjs/common';
import { ChatModule } from './Chat/chat.module';

@Module({
  imports: [ChatModule],
})
export class AppModule {}
