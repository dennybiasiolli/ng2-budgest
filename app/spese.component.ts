import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Spesa} from './spesa';
import {SpesaDetailComponent} from './spesa-detail.component';
import {SpesaService} from './spesa.service';

@Component({
  selector: 'my-spese',
  templateUrl: 'app/templates/spese.tpl.html',
  styleUrls: ['app/styles/spese.css'],
  directives: [SpesaDetailComponent]
})
export class SpeseComponent implements OnInit {
  spese: Spesa[];
  selectedSpesa: Spesa;

  constructor(
    private _router: Router,
    private _spesaService: SpesaService) { }

  getSpese() {
    this._spesaService.getSpese().then(spese => this.spese = spese);
  }

  ngOnInit() {
    this.getSpese();
  }

  onSelect(spesa: Spesa) { this.selectedSpesa = spesa; }

  gotoDetail() {
    this._router.navigate(['SpesaDetail', { id: this.selectedSpesa.id }]);
  }
}
