/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TdfComponent } from './tdf.component';

describe('TdfComponent', () => {
  let component: TdfComponent;
  let fixture: ComponentFixture<TdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
