/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PremiumcalcService } from './premiumcalc.service';

describe('Service: Premiumcalc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PremiumcalcService]
    });
  });

  it('should ...', inject([PremiumcalcService], (service: PremiumcalcService) => {
    expect(service).toBeTruthy();
  }));
});
