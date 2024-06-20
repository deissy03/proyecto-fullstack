import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, firstValueFrom, map } from 'rxjs';
import { Ejemplo } from '../model/ejemplo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  //otro metodo//

  async getDatos(): Promise<Ejemplo[]> {
    return await firstValueFrom(
      this.http
        .get<any>(`http://localhost:3000/productos/`)
        .pipe(map((DataService) => DataService.datos as Ejemplo[]))
    );
  }
  //fin otro metodo//
  //API_URL: string = "localhost:3000/productos";//

  /*httpClient = inject(HttpClient);

  obtenerDatos(){
    return this.httpClient.get(this.API_URL);
  }*/
}
