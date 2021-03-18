import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller()
@ApiTags('App模块')
export class AppController {
  // appService 注入
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @ApiOperation({
    summary: '这是一个测试的api'
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
