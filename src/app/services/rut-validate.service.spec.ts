/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RutValidateService } from './rut-validate.service';

describe('Service: RutValidate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RutValidateService]
    });
  });

  it('should ...', inject([RutValidateService], (service: RutValidateService) => {
    expect(service).toBeTruthy();
  }));
});
