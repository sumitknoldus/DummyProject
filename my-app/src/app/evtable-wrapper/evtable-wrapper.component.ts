import { Component } from '@angular/core';
import {Element} from "../element";
import {AppService} from "../app.service";
import {EvolvingWebAttributes} from "../fieldAttributes";

@Component({
  selector: 'app-evtable-wrapper',
  templateUrl: './evtable-wrapper.component.html',
  styleUrls: ['./evtable-wrapper.component.css']
})
export class EvtableWrapperComponent {
  elements: Element[] = [];
  tableFieldAttributes: any[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private appService: AppService) {
    this.tableFieldAttributes = EvolvingWebAttributes.fieldAttributes;
  }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.appService.getElements().subscribe(response => this.elements = response || []);
  }
}
