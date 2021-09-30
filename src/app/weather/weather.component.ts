import { Component, OnInit } from '@angular/core';
import { cities } from '../city';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'wa-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cities = cities;
  weatherData: any;
  weatherSearchForm!: FormGroup;
  citySelected: string = "";
  

  constructor(private formBuilder: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      city: ['']
    });
  }

  onSubmitWeatherForm(formValues: any) {
    this.weatherService.getWeather(formValues.city).subscribe((data: any) => {
      console.log(data);
      this.citySelected = formValues.city;
      this.weatherData = data.weather;
      
    });
  }
}
