/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Fbf1Component } from './fbf1.component';

describe('Fbf1Component', () => {
  let component: Fbf1Component;
  let fixture: ComponentFixture<Fbf1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fbf1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fbf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
