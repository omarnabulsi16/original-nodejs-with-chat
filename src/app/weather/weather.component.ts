import { Component, OnInit } from '@angular/core';
import { WeatherService } from "src/services/weather.service";
import { Weather } from "src/models/weather.model";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  errorMessage: string;
  cityName: string;
  disabledForecastButton: boolean;
  weatherForecastData: any;
  cityInitial:string;

  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.cityInitial = "Sugar Land"
    this.ws.getWeatherForecast(this.cityInitial).subscribe(data =>{
      this.weatherForecastData = data, console.log(this.weatherForecastData)
    }, error => this.errorMessage)
    
  }  

  onSubmitDatabinding() {
    console.log('Inside the two way', this.cityName);
    this.ws.getWeatherForecast(this.cityName)
          .subscribe(data => { this.weatherForecastData = data ,console.log(this.weatherForecastData)} , error => this.errorMessage = <any>error );
    
         
     this.onResetControls();
}
  onSearchLocationWithEvent(event: Event) {
    console.log('Control event value', (<HTMLInputElement>event.target).value);
    this.cityName = (<HTMLInputElement>event.target).value;
    this.disabledForecastButton = false;
  }
  onResetControls() {
    //console.log(this.weatherForecastData);
    //this.cityName = '';
    this.disabledForecastButton = true;
  }


}
