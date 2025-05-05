export class MessageEntity {
  id?: string;
  senderId?: string;
  receiverId?: string;
  isUser: boolean;
  message: string;
  timestamp: Date;

  constructor(
    message: string,
    timestamp: Date,
    isUser: boolean,
    id?: string,
    senderId?: string, //como dados não vão vir do banco, não é necessário
    receiverId?: string, //como dados não vão vir do banco, não é necessário
  ) {
    this.id = id;
    this.isUser = isUser;
    this.message = message;
    this.receiverId = receiverId;
    this.timestamp = timestamp;
    this.senderId = senderId;
  }
}
