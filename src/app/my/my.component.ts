import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MyService } from '../my.service';
import { Sample } from '../sample';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent implements OnInit, OnDestroy {
  multiSampleData$: Observable<Sample[]> | undefined;
  singleSampleData$: Observable<Sample> | undefined;
  subComponentOutput = '';

  private unsubscribe$ = new Subject<void>();

  constructor(private myService: MyService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  fetchData(): void {
    this.singleSampleData$ = this.myService
      .getSampleDataById(0)
      .pipe(takeUntil(this.unsubscribe$));
    this.multiSampleData$ = this.myService
      .getSampleData()
      .pipe(takeUntil(this.unsubscribe$));
  }

  writeOutput(outputValue: string): void {
    this.subComponentOutput = outputValue;
  }
}
