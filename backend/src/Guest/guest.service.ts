import { GuestEntity } from './guest.entity';

export class GuestService {
  // This service is responsible for managing guest users.
  // It handles the creation and management of guest user sessions.
  private guests: Map<string, GuestEntity> = new Map();

  createGuest(): GuestEntity {
    const guest: GuestEntity = new GuestEntity();
    this.guests.set(guest.id, guest);
    return guest;
  }

  whereId(guestId: string): GuestEntity | undefined {
    return this.guests.get(guestId);
  }
}