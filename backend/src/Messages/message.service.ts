import { MessageEntity } from './message.entity';
import { v4 as uuidv4 } from 'uuid';
import { isString } from '@nestjs/common/utils/shared.utils';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const safeUUID: () => string = uuidv4;

export class MessagesService {
  static generateUUID(): string {
    const id = safeUUID();
    if (!isString(id)) {
      throw new Error('ID não é uma string');
    }
    return id;
  }

  static getFirstMessage(): MessageEntity {
    return new MessageEntity(
      'Olá! 👋 Eu sou o Furia Bot.\n' +
        '\n' +
        'Digite **/comandos** para ver tudo que posso responder. Bora trocar uma ideia sobre a FURIA! 🐆🔥',
      new Date(),
      false,
      this.generateUUID(),
      undefined,
      undefined,
    );
  }

  static getCommandList(): MessageEntity {
    return new MessageEntity(
      'Comandos disponíveis:\n' +
        '\n' +
        '**/probganho** – Probabilidade de ganhar o próximo jogo  \n' +
        '**/major** – Quando é o próximo Major  \n' +
        '**/jogo** – Quando é o próximo jogo da FURIA  \n' +
        '**/lineup** – Qual o lineup atual da FURIA  \n' +
        '**/mapadestaque** – Mapa onde a FURIA mais se destaca  \n' +
        '**/titulos** – Quantos títulos a FURIA tem  \n' +
        '**/ultimotitulo** – Qual foi o último título conquistado\n',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getWinProb(): MessageEntity {
    return new MessageEntity(
      'A FURIA tem 75% de chance de ganhar o próximo jogo! 🏆',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getMajorDate(): MessageEntity {
    return new MessageEntity(
      'O próximo Major será em dezembro de 2025! 🏆',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getNextGameDate(): MessageEntity {
    return new MessageEntity(
      'O próximo jogo da FURIA será dia 30/04 às 19h contra a paiN Gaming! 🏆',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getLineup(): MessageEntity {
    return new MessageEntity(
      'O lineup atual da FURIA é:\n' +
        '\n' +
        '1 - Yuri  \n' +
        '2 - Drop  \n' +
        '3 - Art  \n' +
        '4 - Vini  \n' +
        '5 - Cello  \n',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getMapHighlight(): MessageEntity {
    return new MessageEntity(
      'O mapa onde a FURIA mais se destaca é o Mirage! 🏆',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getTitles(): MessageEntity {
    return new MessageEntity(
      'A FURIA tem 5 títulos conquistados! 🏆',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getLastTitle(): MessageEntity {
    return new MessageEntity(
      'O último título conquistado pela FURIA foi o campeonato de CS:GO na Gamers8 2023! 🏆',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static defaultMessage(): MessageEntity {
    return new MessageEntity(
      'Desculpe, não entendi. Digite **/comandos** para ver tudo que posso responder.',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static createMessage(message: string, senderId: string): MessageEntity {
    return new MessageEntity(
      message,
      new Date(),
      true,
      this.generateUUID(),
      senderId,
      undefined,
    );
  }
}
