import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import couponsController from "./coupons.controller";

export class CouponRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "CouponRoutes");
  }

  public configureRoutes(): express.Application {
    this.app
      .route(`/coupons`)
      .get((req: express.Request, res: express.Response) => {
        couponsController.getCoupons(req, res);
      });
    this.app
      .route(`/coupons`)
      .post((req: express.Request, res: express.Response) => {
        couponsController.createCoupons(req, res);
      });
    return this.app;
  }
}
