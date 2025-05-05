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
      '🔮 Com base nas estatísticas recentes, histórico de confrontos diretos (H2H) e forma atual dos jogadores, a FURIA tem cerca de 63% de chance de vitória no próximo confronto. Mas no CS, tudo pode acontecer — principalmente com a agressividade tática da nossa line. Vamos pra cima!',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getMajorDate(): MessageEntity {
    return new MessageEntity(
      '🗓️ O próximo Major confirmado será o **Perfect World Shanghai Major 2025**, com início em **9 de novembro de 2025**. As classificatórias começam bem antes, então fica ligado que a corrida pelo Major já começou nos RMRs! É a chance de mais um capítulo épico na nossa história.',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getNextGameDate(): MessageEntity {
    return new MessageEntity(
      '🎮 Nosso próximo compromisso é contra a **Team Spirit**, pelas semifinais do **IEM Dallas 2025**, no dia **08/05 às 18h (horário de Brasília)**. Vai ser pedreira, mas a garra é garantida! Transmissão ao vivo nos canais oficiais da ESL.',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getLineup(): MessageEntity {
    return new MessageEntity(
      ' 🧑‍💻 Atualmente, a equipe principal de CS2 da FURIA conta com:  \n' +
        '- 🐗 **KSCERATO** – Clutch master, consagrado no rifle  \n' +
        '- 🧠 **yuurih** – O cérebro da equipe, constância absurda  \n' +
        '- 🎯 **chelo** – O mais explosivo, trazendo impacto desde o pistol  \n' +
        '- ⚔️ **arT** – Nosso capitão da agressividade, sempre surpreende  \n' +
        '- 👑 **FalleN** – Lenda viva, AWP e IGL, liderança e experiência  \n' +
        '- 💼 Coach: **guerri**, o estrategista por trás do estilo único da FURIA  ',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getMapHighlight(): MessageEntity {
    return new MessageEntity(
      '🗺️ Historicamente, a FURIA sempre se destacou em mapas como **Vertigo** e **Nuke**, com táticas ousadas e execuções rápidas. Atualmente, a equipe tem mostrado força também na **Ancient**, com setups bem definidos e forte domínio de CT.',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getTitles(): MessageEntity {
    return new MessageEntity(
      '🏆 A FURIA possui **mais de 15 títulos** conquistados desde 2017, incluindo troféus em torneios Tier 1 e Tier 2 como **ESL Pro League**, **DreamHack Open**, **IEM New York** e **CBCS**. A org se consolidou como uma das potências do CS nas Américas.',
      new Date(),
      false,
      this.generateUUID(),
      '0',
      undefined,
    );
  }

  static getLastTitle(): MessageEntity {
    return new MessageEntity(
      '🥇 O título mais recente foi no **ESL Challenger Melbourne 2023**, onde a FURIA mostrou dominância com vitórias consistentes e uma performance absurda do KSCERATO. Esse troféu mostrou que a fase de transição para o CS2 tá sendo bem sólida.',
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
