import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
import { Flex } from '../flex.directive';
import { Layout } from '../layout.directive';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [Flex, Layout]
  //providers: [DataService]
})
export class DashboardComponent implements OnInit {
  users: any;
  reports: any;
  pools: any;
  constructor(private af: AngularFire, private _router: Router, private _data: DataService) {}

  ngOnInit() {
    this.users = this._data.Users;
    this.reports = this._data.Reports;
    this.pools = this._data.Pools;
    this.af.auth.subscribe((auth) => {
      console.log('Dashboard Auth State: ', auth);
      if(auth == null)
      {
        this._router.navigate(['/login']).catch((err) => {
          console.error('nav failed: ', err);
        })
      }
    })
  }

}
