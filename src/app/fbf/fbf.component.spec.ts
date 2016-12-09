/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FbfComponent } from './fbf.component';

describe('FbfComponent', () => {
  let component: FbfComponent;
  let fixture: ComponentFixture<FbfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
