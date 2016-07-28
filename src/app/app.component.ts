import { Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton, MdAnchor } from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { DataService } from './data.service'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdAnchor,
    MdButton,
    MdToolbar,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon],
  providers: [AngularFire,MdIconRegistry, DataService],
  styles: [`
    md-sidenav-layout {
      background: rgba(0,0,0,0.08);
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  auth: any = null;
  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment_ind"
    },
    {
      name: "Dashboard",
      description: "Over all view",
      icon: "pets"
    }
  ];
  constructor(private af: AngularFire) {}
  ngOnInit()
  {
    this.af.auth.subscribe(auth => {this.auth = auth});
  }
  logout()
  {
    this.af.auth.logout();
  }
}
