import {Injectable} from 'angular2/core';
import {SPESE} from './mock-spese';

@Injectable()
export class SpesaService {
  getSpese() {
    return Promise.resolve(SPESE);
  }
  getSpesa(id: number) {
    return Promise.resolve(SPESE).then(
      spese => spese.filter(spesa => spesa.id === id)[0]
      );
  }
}
