import { RemoteRequest } from './remote-request';

export class PropertyFetch extends RemoteRequest {
    public fetch(): Promise<string> {
        const params = this.parseSearchParams();
        const McMaklerAPI = `https://api.mcmakler.de/v1/advertisements`;
        return this.submitGet(McMaklerAPI);
    }
}
