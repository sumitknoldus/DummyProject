import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Element} from "../element";

@Component({
  selector: 'app-evtable',
  templateUrl: './evtable.component.html',
  styleUrls: ['./evtable.component.css']
})
export class EvtableComponent implements OnChanges, AfterViewInit {

  @Input() tableFieldAttribs: any;
  @Input() displayedColumns: any;
  @Input() records: Element[] = [];
  recordCount = 0;
  datasource: MatTableDataSource<Element> = new MatTableDataSource<Element>([]);

  @ViewChild(MatSort, {static: false}) matSort!: MatSort;
  @ViewChild(MatPaginator, {static: false}) matPaginator!: MatPaginator;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['records']) {
      this.records = changes['records'].currentValue || [];

    }
    this.initializeGridData(this.records);
  }

  ngAfterViewInit() {
    this.initializeGridData(this.records);
  }

  private initializeGridData(records: Element[]): void {
    this.datasource = new MatTableDataSource<Element>(records);
    this.datasource.sort = this.matSort;
    this.datasource.paginator = this.matPaginator;
    this.recordCount = records.length;
  }


  //
  // ngOnInit() {
  //   this.datasource.paginator = this.paginator;
  // }
}
