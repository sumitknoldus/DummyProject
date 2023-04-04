import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EvtableWrapperComponent} from './evtable-wrapper.component';
import createSpyObj = jasmine.createSpyObj;
import {of} from "rxjs";
import {AppService} from "../app.service";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";

describe('EvtableWrapperComponent', () => {
  let component: EvtableWrapperComponent;
  let fixture: ComponentFixture<EvtableWrapperComponent>;
  let appServiceMock = {
    getElements:() => {
      return of([{
        "position": 1,
        "name": "Hydrogen",
        "weight": 1.0079,
        "symbol": "H"
      }])
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvtableWrapperComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: AppService, useValue: appServiceMock}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EvtableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
