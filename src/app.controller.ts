import { Controller, Get,ParseArrayPipe,
  Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateItemsDto } from './create-item.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

    @Post('/items')
  async createItems(
    @Body(
      new ParseArrayPipe({ items: CreateItemsDto, forbidNonWhitelisted: true }),
    )
    items: CreateItemsDto,
  ) {
    console.log(items);
  }
}
