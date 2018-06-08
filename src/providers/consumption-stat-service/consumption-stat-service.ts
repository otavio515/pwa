import { Injectable } from '@angular/core';
import { ApiServiceProvider } from '../api-service/api-service';

@Injectable()
export class ConsumptionStatServiceProvider {

  private _api: string

  constructor(
    private _apiService: ApiServiceProvider
  ) {
      this._api = this._apiService.url;
  }

}