import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import {CommonRoutesConfig} from './common/common.routes.config';
import {CouponRoutes} from './coupons/coupons.routes.config';
import debug from 'debug';
import * as dotenv from 'dotenv';

dotenv.config();

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: number = Number(process.env.PORT);
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

// middleware to parte incoming request as JSON
app.use(bodyparser.json());

// we are allowing cors
app.use(cors());

// configuring expressWindston middelware
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

// adding routes to routes array
routes.push(new CouponRoutes(app));

// configuring expressWindston error-logging 
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

// run server to listen
server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});