import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrincipalRestService<Interfaz> {
  protected readonly _httpClient: HttpClient;
  url = '';
  puerto = '';
  segmento = '';

  constructor(_httpClient: HttpClient) {
    this._httpClient = _httpClient;
  }

  findAll(consulta?: string): Observable<[Interfaz[], number]> {
    let baseUrl = `${this.url}:${this.puerto}/${this.segmento}`;
    if (consulta) {
      baseUrl = `${baseUrl}?${consulta}`;
    }
    return this._httpClient.get<[Interfaz[], number]>(baseUrl);
  }

  updateOne(id: number, datos: Partial<Interfaz>): Observable<Interfaz> {
    return this._httpClient.put<Interfaz>(
      `${this.url}:${this.puerto}/${this.segmento}/${id}`,
      datos
    );
  }

  create(datos: Interfaz): Observable<Interfaz> {
    return this._httpClient.post<Interfaz>(
      `${this.url}:${this.puerto}/${this.segmento}`,
      datos
    );
  }

  finOneById(id: number): Observable<Interfaz> {
    return this._httpClient.get<Interfaz>(
      `${this.url}:${this.puerto}/${this.segmento}/${id}`
    );
  }

  delete(id: number): Observable<void> {
    return this._httpClient.delete<void>(
      `${this.url}:${this.puerto}/${this.segmento}/${id}`
    );
  }
}
