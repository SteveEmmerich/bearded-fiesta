/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { Flex } from './flex.directive';

describe('Flex Directive', () => {
  it('should create an instance', () => {
    let directive = new Flex();
    expect(directive).toBeTruthy();
  });
});
