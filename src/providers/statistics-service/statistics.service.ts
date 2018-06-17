import { API } from './../../utils/api.util';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Statistics } from '../../models/statistics';

@Injectable()
export class StatisticsService {

  constructor(
    public http: HttpClient
  ) {}

  getAllStatisticsByData(year: string): Observable<any> {
    return this.http.get<Statistics[]>(`${API.URL}statistics/dados/${year}`);
  }

}
