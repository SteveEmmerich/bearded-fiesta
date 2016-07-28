import { Component, Input, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdInput} from '@angular2-material/input';
import {MdProgressCircle} from '@angular2-material/progress-circle';
import { DataService } from '../data.service';

class User {
  email: string;
  password: string;
  constructor() {}
}

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MdIcon,
    MdButton,
    MdInput,
    MdProgressCircle
  ],
  providers: [MdIconRegistry],
})
export class LoginComponent implements OnInit {
  @Input()
  public user: User;
  auth: any = null;
  public loggingIn: boolean = false;
  public dismissed: boolean = false;
  constructor(private af: AngularFire, private _router: Router, public _data: DataService) {}

  ngOnInit() {
    this.user = new User();
    this.af.auth.subscribe((auth) => {
      if(auth != null)
      {
        this._router.navigate(['/dashboard']).catch((err) => {
          console.error('nav failed: ', err);
        });
      }
    });
  }
  login()
  {
    console.log('in login function', this.user);
    this.loggingIn = true;
    this.af.auth.login({email: this.user.email, password: this.user.password})
      .then((user) => {
        this.loggingIn = false;
        this.dismissed = true;
        console.log('shoud be navigating');
        this._data.init();
        this._router.navigate(['/dashboard']).catch((err) => {
          console.error('nav failed: ', err);
        });
      }, (err) => {
          console.log('error: ', err);
        })
  }
  signUp()
  {
    this.loggingIn = true;
    this.af.auth.createUser({email: this.user.email, password: this.user.password})
      .then((user) => {
        //TODO: Prompt for role
        //TODO: Login
        //TODO: Navigate to profile page
      })
  }
  change()
  {
    console.log("change");
  }

}
