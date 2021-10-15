import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { Sample } from './sample';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor(private http: HttpClient) {}

  getSampleData(): Observable<Sample[]> {
    return this.http.get<Sample[]>(`${environment.API_URL}/sample-data`);
  }

  getSampleDataById(id: number): Observable<Sample> {
    return this.http.get<Sample>(`${environment.API_URL}/sample-data/${id}`);
  }
}
