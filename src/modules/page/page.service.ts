import { randomUUID } from 'crypto';
import { IPageDTO } from './page.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
  getPage(): IPageDTO {
    const page: IPageDTO = {
      name: 'vinicius',
      cpf: '07736565422',
      email: 'vinicius2508@hotmail.com',
      birthDate: new Date(),
      pads: [randomUUID(), randomUUID()],
    };
    return page;
  }
}
