import type { UUID } from 'crypto';

export interface IUserDTO {
  name: string;
  birthDate: Date;
  cpf: string;
  email: string;
}
