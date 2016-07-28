/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { Layout } from './layout.directive';

describe('Layout Directive', () => {
  it('should create an instance', () => {
    let directive = new Layout();
    expect(directive).toBeTruthy();
  });
});
