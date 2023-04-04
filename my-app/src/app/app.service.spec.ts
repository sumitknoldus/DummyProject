import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('AppService', () => {
  let service: AppService;
  let testController: HttpTestingController;
  const mockData = [{
    "position": 1,
    "name": "Hydrogen",
    "weight": 1.0079,
    "symbol": "H"
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(AppService);
    testController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return elements', () => {
    service.getElements().subscribe(response => {
      expect(response).toBe(mockData);
    });

    const req = testController.expectOne({
      method: "GET",
      url: '/assets/elements.json'
    });

    req.flush(mockData);
  });
});


