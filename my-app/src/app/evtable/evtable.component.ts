import {Component, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-evtable',
  templateUrl: './evtable.component.html',
  styleUrls: ['./evtable.component.css']
})
export class EvtableComponent {
  @Input() datasource: any;
  @Input() tableFieldAttribs: any;
  @Input() displayedColumns: any;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }
  //
  // ngOnInit() {
  //   this.datasource.paginator = this.paginator;
  // }
}
