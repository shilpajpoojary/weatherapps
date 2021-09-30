import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  ApiKey : string = "3ffb39d1e45790815d1a054c2c03717b";

  constructor(private http: HttpClient) {}
  getForecast(CitySelected:string){
    return this.http.get( " http://api.openweathermap.org/data/2.5/forecast?q="+ CitySelected + '&appid=' + this.ApiKey);
}
}
