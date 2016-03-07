import {Spesa} from './spesa';
export interface Ambito {
  id: number;
  descrizione: string;
  spese: Spesa[];
}
