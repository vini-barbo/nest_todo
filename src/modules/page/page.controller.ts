import { Controller, Get } from '@nestjs/common';
import type { IPageDTO } from './page.dto';
import { randomUUID } from 'crypto';
import { PageService } from './page.service';

@Controller('page')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get()
  getPage(): IPageDTO {
    return this.pageService.getPage();
  }
}
