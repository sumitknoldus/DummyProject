import {Component, OnInit} from '@angular/core';
import {EvolvingWebAttributes} from "./fieldAttributes";
import {Element} from "./element";
import {HttpClient} from "@angular/common/http";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'evolving-web';


  constructor() {
  }

}
