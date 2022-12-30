/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddNotasService } from './add-notas.service';

describe('Service: AddNotas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNotasService]
    });
  });

  it('should ...', inject([AddNotasService], (service: AddNotasService) => {
    expect(service).toBeTruthy();
  }));
});
