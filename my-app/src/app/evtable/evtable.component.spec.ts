import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EvtableComponent} from './evtable.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, SimpleChange} from "@angular/core";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

describe('EvtableComponent', () => {
  let component: EvtableComponent;
  let fixture: ComponentFixture<EvtableComponent>;
  const displayedColumns = ['A', 'B', 'C'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvtableComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(EvtableComponent);
    component = fixture.componentInstance;
    component.displayedColumns = displayedColumns;
    component.records = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should re order columns on drag and drop', () => {
    const event = {previousIndex: 1, currentIndex: 2} as CdkDragDrop<string[]>;
    component.drop(event);
    expect(component.displayedColumns[1]).toEqual('C');
  });

  it('should detect record input parameter', () => {
    // just confirming whether table has no records.
    expect(component.records.length).toBe(0);

    const records = [{name: 'A', position: 1, weight: 20, symbol: 'xyz'}];
    const changes = {'records': new SimpleChange(component.records, records, false)};

    component.ngOnChanges(changes);
    expect(component.records).toBe(records);
  });
});
