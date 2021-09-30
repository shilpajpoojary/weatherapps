import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  ApiKey : string = "e90f87aa8c18498cc7ecbd5039bc901a";
  

  constructor(private http: HttpClient) { }
   
  getWeather(city:string){
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+ city + '&appid=' + this.ApiKey);
}
}