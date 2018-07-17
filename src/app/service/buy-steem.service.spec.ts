import { TestBed, inject } from '@angular/core/testing';

import { BuySteemService } from './buy-steem.service';

describe('BuySteemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuySteemService]
    });
  });

  it('should be created', inject([BuySteemService], (service: BuySteemService) => {
    expect(service).toBeTruthy();
  }));
});
