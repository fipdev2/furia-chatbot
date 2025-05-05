import { GuestEntity } from './guest.entity';
import { GuestService } from './guest.service';
import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('guest')
export class GuestController {
  constructor(private guestService: GuestService) {
  }

  @Post('create')
  createGuest(): GuestEntity {
    try {
      return this.guestService.createGuest();
    } catch (error) {
      console.error('Error creating guest:', error);
      throw new Error('Failed to create guest');
    }
  }

  @Get('/:guestId')
  findGuest(@Param('guestId') guestId: string): GuestEntity | undefined {
    try {
      return this.guestService.whereId(guestId);
    } catch (error) {
      console.error('Error finding guest:', error);
      throw new Error('Failed to find guest');
    }
  }
}