import { CouponDto } from "./coupon.model";
import shortid from "shortid";

class CouponsDAO {
    private static instance: CouponsDAO;

    // WARNING: This array simulates access to BBDD in production replace to real access to BBDD
    private coupons: Array<CouponDto> = [];

    static getInstance(): CouponsDAO {
        if (!CouponsDAO.instance) {
            CouponsDAO.instance = new CouponsDAO();
        }
        return CouponsDAO.instance;
    }

    public addCoupon(coupon: CouponDto): string {
        coupon.id = shortid.generate();
        this.coupons.push(coupon);
        return coupon.id;
    }

    public getById(id: string): CouponDto | undefined {
        return this.coupons.find(coupon => coupon.id === id);
    }

    public updateById(coupon: CouponDto) {
        throw new Error('Feature not implemented yet!');
    }

    public deleteById(id: string) {
        throw new Error('Feature not implemented yet!');
    }
    
    public list(): CouponDto[] {
        return this.coupons;
    }
}

export default CouponsDAO.getInstance();