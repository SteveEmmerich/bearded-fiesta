import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS,
  defaultFirebase, 
  AngularFire, 
  AuthMethods, 
  AuthProviders, 
  firebaseAuthConfig } from 'angularfire2';
import { appRouterProviders } from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyCsIepYzOtsWTmadec0EmLAjq-sHTQxzW4",
    authDomain: "poolmaster.firebaseapp.com",
    databaseURL: "https://poolmaster.firebaseio.com",
    storageBucket: "project-2186781083173168700.appspot.com",
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  }),
  appRouterProviders,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]).catch(err => console.error(err));;

