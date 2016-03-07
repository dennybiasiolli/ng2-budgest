import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { SpesaService } from './spesa.service';
import { DashboardComponent } from './dashboard.component';
import { SpeseComponent } from './spese.component';
import { SpesaDetailComponent } from './spesa-detail.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.tpl.html',
  styleUrls: ['app/styles/app.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, SpesaService]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '/spese',
    name: 'Spese',
    component: SpeseComponent,
    useAsDefault: true
  },
  {
    path: '/spese/detail/:id',
    name: 'SpesaDetail',
    component: SpesaDetailComponent
  }
])

export class AppComponent implements OnInit {
  public title: string = 'Gestione Spese';
  constructor() { }
  ngOnInit() {
  }
}
