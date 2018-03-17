import * as express from 'express';
import * as https from 'https';
import * as request from 'request';
import * as url from 'url';

export abstract class RemoteRequest {
    protected req: express.Request = null;

    constructor(req: express.Request) {
        this.req = req;
    }

    protected submitGet(uri: string): Promise<any> {
        const options = this.getRequestOptions();
        return new Promise((resolve, reject) => {
            request.get(uri, options, (error, response, body) => {
                error ? reject(error) : resolve(body);
            });
        });
    }

    protected parseSearchParams() {
        const urlParts = url.parse(this.req.url, true);
        return urlParts.search;
    }

    private getRequestOptions(): request.CoreOptions {
        return {
            agent: new https.Agent({
                rejectUnauthorized: false
            }),
            body: JSON.stringify(this.req.body),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
}
