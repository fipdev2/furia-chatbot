import { MessageEntity } from '../Messages/message.entity';
import { v4 as uuidv4 } from 'uuid';
import { MessagesService } from '../Messages/message.service';
import { GuestEntity } from '../Guest/guest.entity';
import { GuestService } from '../Guest/guest.service';

export class ChatEntity {
  id?: string;
  user?: GuestEntity;
  messages: MessageEntity[];

  constructor(userId: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
    const guestService = new GuestService();
    this.id = uuidv4();
    this.user = guestService.whereId(userId);
    this.messages = [MessagesService.getFirstMessage()];
  }
}
