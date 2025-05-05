import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageEntity } from '../Messages/message.entity';
import { ChatService } from './chat.service';
import { GuestEntity } from '../Guest/guest.entity';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {
  }

  @Get('history/user/:userId')
  getChatHistory(@Param('userId') userId: string): MessageEntity[] {
    try {
      return this.chatService.getChatHistory(userId);
    } catch (error) {
      console.error('Error fetching chat history:', error);
      throw new Error('Failed to fetch chat history');
    }
  }

  @Post('send/user/:userId')
  sendMessage(@Body('input') input: string, @Param('userId') userId: string): MessageEntity {
    try {
      return this.chatService.sendMessage(userId, input);
    } catch (e) {
      console.error('Error sending message:', e);
      throw new Error('Failed to send message');
    }
  }
}
