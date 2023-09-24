import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cartAdminGuard } from '../adminallproducts/cart-admin.guard';

describe('cartAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => cartAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
