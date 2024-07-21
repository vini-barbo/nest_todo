import type { UUID } from 'crypto';

export interface IPostDTO {
  user_id: UUID;
  content: string;
  title:   string
}
