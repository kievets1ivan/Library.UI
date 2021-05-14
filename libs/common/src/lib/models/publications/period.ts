import { Publication } from './publication';

export interface Period {
  id?: number;
  year?: string;
  publications?: Publication[];
}
