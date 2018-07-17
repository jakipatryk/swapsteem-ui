import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {steemModel} from '../../models';
import {HttpClient} from '@angular/common/http'

import {take} from 'rxjs/operators'

@Injectable()
export class BuySteemService {

  constructor(public http : HttpClient) { }

  buyOnline(): Observable<any> {
      return this.http.get('../../assets/sample-buy-online.json');
  }

}