import {TestBed} from '@angular/core/testing';
import {CanActivateFn} from '@angular/router';
import {beforeEach, describe, expect, it} from '@jest/globals';
import {authGuard} from '@app/auth/service/auth.guard';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
