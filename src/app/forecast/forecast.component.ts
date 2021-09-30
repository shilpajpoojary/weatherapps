import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForecastService } from '../forecast.service';




@Component({
  selector: 'wa-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  forecastData: any;
  city: string | null = null ; 

  constructor(private route: ActivatedRoute,
    private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get("CitySelected")
    //console.log(this.City);
    if(!!this.city){
      this.forecastService.getForecast(this.city).subscribe((data: any) => {
        //.log(this.forecastData);
        this.forecastData = data.list;
        //console.log(this.ListArray);
      });
      
    }
    
  }
}