import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiData} from "../common/interfaceComics";

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
private readonly http: HttpClient= inject(HttpClient);
private readonly urlBase = 'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=de4936375b2f60caca31e72756cabaab&hash=14477f62c252b0847f9077365d40fc22&offset=20';
  constructor() { }

  getComics(): Observable<ApiData> {
    return this.http.get<ApiData>(this.urlBase);
  }


}
