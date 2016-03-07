import {Ambito} from './ambito';
export interface Spesa {
  id: number;
  dataSpesa: Date;
  dataRiferimento: Date;
  importo: number;
  descrizione: string;
  qta: number;
  idAmbito: number;
  // Ambito: Ambito;
  tags?: string;
}
