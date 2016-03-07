import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Spesa } from './spesa';
import { SpesaService } from './spesa.service';

@Component({
  selector: 'my-spesa-detail',
  templateUrl: 'app/templates/spesa-detail.tpl.html',
  styleUrls: ['app/styles/spesa-detail.css'],
  inputs: ['spesa']
})
export class SpesaDetailComponent implements OnInit {
  spesa: Spesa;
  constructor(
    private _spesaService: SpesaService,
    private _routeParams: RouteParams) {
  }
  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._spesaService.getSpesa(id)
      .then(spesa => this.spesa = spesa);
  }
  goBack() {
    window.history.back();
  }
}
