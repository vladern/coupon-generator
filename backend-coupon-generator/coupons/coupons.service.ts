import { CRUD } from "../common/interfaces/crud.interface";
import { CouponDto } from "./coupon.model";
import CouponsDAO from "./coupons.dao";
import * as fs from "fs";
import { CouponAlgorithms } from "../common/enums/coupon-alhorithms.enum";
import shortid from "shortid";

class CouponsService implements CRUD {
  private static instance: CouponsService;

  static getInstance(): CouponsService {
    if (!CouponsService.instance) {
      CouponsService.instance = new CouponsService();
    }
    return CouponsService.instance;
  }

  async create() {
    let config = this._getCouponsConfig();
    if (config.algorithm === CouponAlgorithms.sequential) {
      await this._generateConsecutiveCoupons();
    } else if (config.algorithm === CouponAlgorithms.random) {
      await this._generateRandomCoupons();
    }
    return CouponsDAO.list();
  }

  async readById(resourceId: string) {
    return await CouponsDAO.getById(resourceId);
  }

  async updateById(resource: CouponDto) {
    return await CouponsDAO.updateById(resource);
  }

  async deleteById(resourceId: string) {
    return await CouponsDAO.deleteById(resourceId);
  }

  async list() {
    return await CouponsDAO.list();
  }

  private _getCouponsConfig() {
    const rawdata = fs.readFileSync(`${process.env.COUPON_CONFIG_PATH}`);
    const couponConfig = JSON.parse(rawdata.toString());
    return couponConfig;
  }

  private async _generateConsecutiveCoupons() {
    const config = this._getCouponsConfig();
    const coupons = await CouponsDAO.list();
    const currentLenght = coupons.length;
    for (let index = 1; index <= config.quantity; index++) {
      const newCoupon = {
        id: "",
        coupon: `A0${currentLenght + index}`,
        creationDateTime: new Date(),
      };
      await CouponsDAO.addCoupon(newCoupon);
    }
  }

  private async _generateRandomCoupons() {
    const config = this._getCouponsConfig();
    for (let index = 1; index <= config.quantity; index++) {
      const newCoupon = {
        id: "",
        coupon: shortid.generate(),
        creationDateTime: new Date(),
      };
      await CouponsDAO.addCoupon(newCoupon);
    }
  }
}

export default CouponsService.getInstance();
