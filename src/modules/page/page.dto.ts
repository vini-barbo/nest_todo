import type { UUID } from 'crypto';

export interface IPageDTO {
  user_id: UUID;
  content: string;
}
