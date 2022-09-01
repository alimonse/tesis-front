import { Injectable } from '@angular/core';
import { EnterpriseInterface } from '../interfaces/enterprise.interface';
import { PrincipalRestService } from '../../../../../core/services/principal-rest.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnterpriseService extends PrincipalRestService<EnterpriseInterface> {
  constructor(protected override readonly _httpClient: HttpClient) {
    super(_httpClient);
    this.url = environment.server.url;
    this.puerto = environment.server.puerto;
    this.segmento = 'empresa';
  }
}
