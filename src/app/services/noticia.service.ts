import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  API_KEY: string = '4df68b7c345d4376a75653cef8f3c508';

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any):Observable<any[]>{
    const url = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=${this.API_KEY}`;

    return this.http.get<any[]>(url);
  }
}
