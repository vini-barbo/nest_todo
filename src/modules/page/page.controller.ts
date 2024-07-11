import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import type { IPageDTO } from './page.dto';
import { PageService } from './page.service';
import { PageEntity } from './page.entity';

@Controller('Page')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get('findall')
  async findPage(): Promise<PageEntity[]> {
    return await this.pageService.findPage();
  }

  @Get('findone')
  async findOnePage(@Body() pageToBeFound: Partial<PageEntity>): Promise<PageEntity> {
    return await this.pageService.findOnePage(pageToBeFound);
  }

  @Get('findmany')
  async findManyPage(@Body() pageToBeFound: Partial<PageEntity>): Promise<PageEntity[]> {
    return await this.pageService.findManyPage(pageToBeFound);
  }

  @Post('create')
  async savePage(@Body() pageSent: IPageDTO): Promise<PageEntity> {

    const pageToBeCreated: IPageDTO = {
      user_id: pageSent.user_id,
      content: pageSent.content,
    };

    return await this.pageService.createPage(pageToBeCreated);
  }

  @Delete('delete')
  async deletePage(@Body() id): Promise<String> {
  return await this.pageService.deletePage(id.id);
  }

}
