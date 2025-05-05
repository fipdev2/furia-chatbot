import { Message } from '@/@types/message';

export interface Chat {
  id: string;
  userId: string;
  messages: Message[];
}