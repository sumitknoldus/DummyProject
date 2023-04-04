import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvDocComponent } from './ev-doc.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";

describe('EvDocComponent', () => {
  let component: EvDocComponent;
  let fixture: ComponentFixture<EvDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvDocComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
