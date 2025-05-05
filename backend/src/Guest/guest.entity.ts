import { v4 as uuidv4 } from 'uuid';

export class GuestEntity {
  id: string;

  constructor() {
    this.id = uuidv4();
  }
}