import express from 'express';
import debug from 'debug';
import couponsService from './coupons.service';

const log: debug.IDebugger = debug('app:users-controller');

class CouponsController {
    private static instance: CouponsController;

    static getInstance(): CouponsController {
        if (!CouponsController.instance) {
            CouponsController.instance = new CouponsController();
        }
        return CouponsController.instance;
    }

    public async getCoupons(req: express.Request, res: express.Response) {
        const coupons = await couponsService.list();
        res.status(200).send(coupons);
    }

    public async createCoupons(req: express.Request, res: express.Response) {
        const coupons = await couponsService.create();
        res.status(200).send(coupons);
    }
}

export default CouponsController.getInstance();