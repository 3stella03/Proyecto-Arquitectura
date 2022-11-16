/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstructuraHomeCursoComponent } from './estructura-HomeCurso.component';

describe('EstructuraHomeCursoComponent', () => {
  let component: EstructuraHomeCursoComponent;
  let fixture: ComponentFixture<EstructuraHomeCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstructuraHomeCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraHomeCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
