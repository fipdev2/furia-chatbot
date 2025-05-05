import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { MessagesService } from '../Messages/message.service';

@Module({
  imports: [MessagesService],
  controllers: [ChatController],
  providers: [ChatService, MessagesService],
})
export class ChatModule {}
