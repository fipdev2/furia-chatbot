import { Injectable } from '@nestjs/common';
import { MessageEntity } from '../Messages/message.entity';
import { MessagesService } from '../Messages/message.service';
import { ChatEntity } from './chat.entity';
import { isString } from '@nestjs/common/utils/shared.utils';
import { GuestEntity } from '../Guest/guest.entity';

@Injectable()
export class ChatService {
  private chats: Map<string, ChatEntity> = new Map();

  getChatHistory(userId: string): MessageEntity[] {
    const chat = this.chats.get(userId);
    if (!chat) {
      const newChat = new ChatEntity(userId);
      this.chats.set(userId, newChat);
      return newChat.messages;
    }
    return chat.messages;
  }

  sendMessage(userId: string, input: string): MessageEntity {
    if (!userId) {
      throw new Error('Usuário não encontrado');
    }
    if (!isString(input)) {
      throw new Error('Mensagem inválida');
    }

    let chat = this.chats.get(userId);
    if (!chat) {
      chat = new ChatEntity(userId);
      this.chats.set(userId, chat);
    }

    const newMessage = MessagesService.createMessage(input, userId);
    chat.messages.push(newMessage);

    const commands: Record<string, () => MessageEntity> = {
      '/comandos': () => MessagesService.getCommandList(),
      '/probganho': () => MessagesService.getWinProb(),
      '/mapadestaque': () => MessagesService.getMapHighlight(),
      '/titulos': () => MessagesService.getTitles(),
      '/ultimotitulo': () => MessagesService.getLastTitle(),
      '/jogo': () => MessagesService.getNextGameDate(),
      '/lineup': () => MessagesService.getLineup(),
      '/major': () => MessagesService.getMajorDate(),
      default: () => MessagesService.defaultMessage(),
    };

    const botMessage = commands[input] ? commands[input]() : commands.default();
    chat.messages.push(botMessage);

    return botMessage;
  }
}

