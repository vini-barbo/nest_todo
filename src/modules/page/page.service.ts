import { randomUUID, UUID } from 'crypto';
import { IPageDTO } from './page.dto';
import { Inject, Injectable } from '@nestjs/common';
import { PageEntity } from './page.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PageService {
  constructor(
    @InjectRepository(PageEntity)
    private readonly pageRepository: Repository<PageEntity>,
  ) {}

  async findPage(): Promise<PageEntity[]> {
    return await this.pageRepository.find();
  }

  async findOnePage(pageToBeFound: Partial<PageEntity>): Promise<PageEntity> {
    return await this.pageRepository.findOne({ where: pageToBeFound });
  }

  async findManyPage(pageToBeFound: Partial<PageEntity>): Promise<PageEntity[]> {
    return await this.pageRepository.find({where:pageToBeFound })
  }

  async createPage(pageToBeCreated: IPageDTO): Promise<PageEntity> {
    const newPageID = randomUUID();

    await this.pageRepository.save({ ...pageToBeCreated, id: randomUUID() });

    const createdPage = await this.pageRepository.findOne({
      where: {
        id: newPageID,
      },
    })


    return createdPage ;
  }

  async deletePage(pageId : String): Promise<string> {


    try {
      await this.pageRepository.createQueryBuilder().delete().from(PageEntity).where("id = :id", { id: pageId })
      .execute()
      return `page with id: ${pageId} has been deleted sucessfully`
    } catch (error) {
      return `fail attempt to delete page with id: ${pageId}`
    }
  }

}
