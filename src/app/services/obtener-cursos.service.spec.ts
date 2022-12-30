/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObtenerCursosService } from './obtener-cursos.service';

describe('Service: ObtenerCursos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObtenerCursosService]
    });
  });

  it('should ...', inject([ObtenerCursosService], (service: ObtenerCursosService) => {
    expect(service).toBeTruthy();
  }));
});
