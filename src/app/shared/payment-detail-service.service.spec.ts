import { TestBed } from '@angular/core/testing';

import { PaymentDetailServiceService } from './payment-detail-service.service';

describe('PaymentDetailServiceService', () => {
  let service: PaymentDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
