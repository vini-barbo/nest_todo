import type { UUID } from 'crypto';

export interface IPageDTO {
  name: string;
  birthDate: Date;
  cpf: string;
  email: string;
  pads: UUID[];
}
