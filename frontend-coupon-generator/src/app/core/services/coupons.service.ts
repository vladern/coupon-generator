import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  private _path = environment.url_api + '/coupons';

  constructor(private _http: HttpClient) {}

  getAllCoupons() {
    return this._http.get<Coupon[]>(this._path);
  }

  generateNewCoupons() {
    return this._http.post<Coupon[]>(this._path, null);
  }
}
