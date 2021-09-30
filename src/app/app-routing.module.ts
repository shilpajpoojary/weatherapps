import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherCardComponent } from './weather/weather-card.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes =[
  { path : "" , component:WeatherComponent},
  {path : "card" , component:WeatherCardComponent },
  {path : "card/:CitySelected", component:ForecastComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
