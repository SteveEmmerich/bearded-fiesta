/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PoolDetailsComponent } from './pool-details.component';

describe('Component: PoolDetails', () => {
  it('should create an instance', () => {
    let component = new PoolDetailsComponent();
    expect(component).toBeTruthy();
  });
});
