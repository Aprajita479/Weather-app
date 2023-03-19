import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  cityName?: string = 'Wellington';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherdata(this.cityName as string);
    this.cityName = '';
  }
  onSubmit() {
    this.getWeatherdata(this.cityName as string);
    this.cityName = '';
  }
  private getWeatherdata(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
}
