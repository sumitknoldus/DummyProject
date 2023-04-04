import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Element} from "./element";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {
  }

  getElements(): Observable<Element[]> {
    return this.httpClient.get<Element[]>('/assets/elements.json');
  }
}
