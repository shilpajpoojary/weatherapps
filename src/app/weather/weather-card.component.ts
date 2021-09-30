import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wa-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  celTemp: number = 0;

  @Input() weatherData:any;
  @Input() citySelected:any;
 
  constructor() { }

  ngOnInit(): void {
    this.celTemp = this.weatherData.main.temp - 272.15;
  
  }

  

}
