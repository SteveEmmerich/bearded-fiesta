import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DataService {
  _users: FirebaseListObservable<any[]>;
  _pools: FirebaseListObservable<any[]>;
  _reports: FirebaseListObservable<any[]>;
  _company: string;
  constructor(private af: AngularFire) {
     let comp = localStorage.getItem("company");
     if (comp)
     {
       this._company = comp
       this.init();
     }
      
  }
  get Users()
  {
    return this._users;
  }
  get Pools()
  {
    return this._pools;
  }
  get Reports()
  {
    return this._reports;
  }
  get Company()
  {
    return this._company;
  }
  set Company(value: string)
  {
    this._company = value;
  }
  init()
  {
    this._users = this.af.database.list('/' + this._company + '/users');
    this._pools = this.af.database.list('/' + this._company + '/pools');
    this._reports = this.af.database.list('/' + this._company + '/reports');
    localStorage.setItem("company", this._company);
  }

}
