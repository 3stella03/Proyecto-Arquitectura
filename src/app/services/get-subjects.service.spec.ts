/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetSubjectsService } from './get-subjects.service';

describe('Service: GetSubjects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSubjectsService]
    });
  });

  it('should ...', inject([GetSubjectsService], (service: GetSubjectsService) => {
    expect(service).toBeTruthy();
  }));
});
