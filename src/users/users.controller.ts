import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  users() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }
}
