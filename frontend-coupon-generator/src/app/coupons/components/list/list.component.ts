import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/core/models/coupon.model';
import { CouponsService } from 'src/app/core/services/coupons.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'coupon', 'dateTime'];
  public dataSource: Coupon[] = [];

  constructor(private _couponService: CouponsService) { 

  }

  ngOnInit() {
    this._couponService.getAllCoupons().subscribe(coupons => {
      this.dataSource = coupons;
    });
  }

  public generateNewCoupons(): void {
    this._couponService.generateNewCoupons().subscribe(coupons => {
      this.dataSource = coupons;
    });
  }

}
