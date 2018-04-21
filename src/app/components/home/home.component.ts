import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentTime = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';

  weatherData : WeatherData[];

  aboutShow : boolean;
  servicesShow : boolean;
  customersShow : boolean;

  constructor(private weatherService:WeatherService) { 
    console.log("constructor")
  }

  ngOnInit() {

    this.weatherService.getAlbums().subscribe(albums => {
      console.log("retrieved album")
      console.log(albums)
      this.weatherData = albums;
    });

    this.aboutShow = false;
    this.servicesShow = false;
    this.customersShow = false;

  }

  toggleAbout(){
    this.aboutShow = !this.aboutShow;
  }
  toggleServices(){
    this.servicesShow = !this.servicesShow;
  }
  toggleCustomer(){
    this.customersShow = !this.customersShow;
  }

}

interface WeatherData{

  city : string;
  temp : number;

}