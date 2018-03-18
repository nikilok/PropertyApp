import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PropertyServiceXHR {
  private readonly NODE_API_URL = `${environment.ROOT_PATH}/api/get-property-results`;

  constructor(private client: HttpClient) {}

  public fetchData() {
    return this.client.get(this.NODE_API_URL, {});
  }
}
