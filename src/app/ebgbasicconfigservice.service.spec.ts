import { TestBed } from '@angular/core/testing';

import { EbgbasicconfigserviceService } from './ebgbasicconfigservice.service';

describe('EbgbasicconfigserviceService', () => {
  let service: EbgbasicconfigserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbgbasicconfigserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
