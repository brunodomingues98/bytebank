import { TestBed } from '@angular/core/testing';

import { TranferenciaService } from './transferencia.service';

describe('TranferenciaService', () => {
  let service: TranferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
