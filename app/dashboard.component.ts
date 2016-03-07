import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Spesa } from './spesa';
import { SpesaService } from './spesa.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/templates/dashboard.tpl.html',
  styleUrls: ['app/styles/dashboard.css'],
})
export class DashboardComponent implements OnInit {
  spese: Spesa[] = [];
  constructor(
    private _router: Router,
    private _spesaService: SpesaService) {
  }
  ngOnInit() {
    this._spesaService.getSpese()
      .then(spese => this.spese = spese.slice(1, 5));
  }
  gotoDetail(spesa: Spesa) {
    let link = ['SpesaDetail', { id: spesa.id }];
    this._router.navigate(link);
  }
}
