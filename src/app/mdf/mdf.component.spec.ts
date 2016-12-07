/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MdfComponent } from './mdf.component';

describe('MdfComponent', () => {
  let component: MdfComponent;
  let fixture: ComponentFixture<MdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
