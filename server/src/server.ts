import * as path from 'path';
import * as express from 'express';

import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import * as url from 'url';

import * as https from 'https';
import * as request from 'request';

import { PropertyFetch } from './routes/property.route';

export class Server {

    public app = express();

    constructor() {
        this.config();
        this.routes();
    }

    public config() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }

    public routes() {
        const router: express.Router = express.Router();

        router.use('/', express.static('public', { redirect: false }));

        router.get('^/api/get-property-results$', (req, res) => {
            const request = new PropertyFetch(req);
            request.fetch()
                .then((body) => res.status(200).send(body))
                .catch((error) => res.status(500).send(error));
        });

        this.app.use(router);
    }
}
