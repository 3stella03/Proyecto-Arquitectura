/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddAsistenciaService } from './add-asistencia.service';

describe('Service: AddAsistencia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddAsistenciaService]
    });
  });

  it('should ...', inject([AddAsistenciaService], (service: AddAsistenciaService) => {
    expect(service).toBeTruthy();
  }));
});
