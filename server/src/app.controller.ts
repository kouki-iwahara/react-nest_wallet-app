import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // FIXME: 疎通確認
  @Post('/regist')
  registUser(@Body() req): any {
    const testUser = { id: 'testID', userName: 'testName' };
    return testUser;
  }
}
