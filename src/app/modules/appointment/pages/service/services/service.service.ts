import { Injectable } from '@angular/core';
import { PrincipalRestService } from '../../../../../core/services/principal-rest.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { ServiceInterface } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService extends PrincipalRestService<ServiceInterface> {
  constructor(protected override readonly _httpClient: HttpClient) {
    super(_httpClient);
    this.url = environment.server.url;
    this.puerto = environment.server.puerto;
    this.segmento = 'prestaciones';
  }
}
