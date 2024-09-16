import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { APIService } from '../../service/Apiservice';
import { LanguageDTO } from '../../model/language.data.model';
import { WeatherDTO } from '../../model/weather.data.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  names = [
    { id: 0, name: "Languages" },
    { id: 1, name: "Weather" },
    { id: 2, name: "Currencies" },
    { id: 3, name: "Users" },
    { id: 4, name: "Books" },
    { id: 5, name: "Movies" },
    { id: 6, name: "Animals" },
    { id: 7, name: "Todos" },
    { id: 8, name: "Airlines" },
    { id: 9, name: "Destinations" },
    { id: 10, name: "Politicians" },
    { id: 11, name: "Actors" },
    { id: 12, name: "Sports" },
    { id: 13, name: "Countries" },
    { id: 14, name: "Foods" },
    { id: 15, name: "Cities" },
    { id: 16, name: "Music Genres" },
    { id: 17, name: "TV Shows" },
    { id: 18, name: "Fashion Brands" },
    { id: 19, name: "Video Games" },
    { id: 20, name: "Artists" },
    { id: 21, name: "Historical Figures" },
    { id: 22, name: "Science" },
    { id: 23, name: "Technologies" },
    { id: 24, name: "Inventions" },
    { id: 25, name: "Mythical Creatures" }
  ];

  languages: LanguageDTO[] = [];
  weather: WeatherDTO[] = [];
  jsonObj:any;

  selectedItem: string | null = null;

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
     this.getLanguages();
     this.getDataFromMyHost();
  }


  selectItem(item: string): void {
    this.selectedItem = item;
    if(this.selectedItem == "Weather"){
      this.getWeather();
    }else if(this.selectedItem == "Languages"){
      this.getLanguages();
    }
  }

  getLanguages(){
    this.apiService.getMethod("v1/languages?limit=5").subscribe({
      next: (languages) => {
        this.languages = languages;
        this.jsonObj = this.languages;
        console.log('Fetched languages:', this.languages);
      },
      error: (error) => {
        console.error('Error fetching languages:', error);
      },
      complete: () => {
        console.log('Language fetch complete');
      }
    });   
  }


  getWeather(){
    this.apiService.getMethod("v1/weathers?limit=5").subscribe({
      next: (data) => {
        this.weather = data;
        this.jsonObj = this.weather;
        console.log('Fetched weathers: data', this.weather);
      },
      error: (error) => {
        console.error('Error fetching weathers:', error);
      },
      complete: () => {
        console.log('weathers fetch complete');
      }
    });   
  }

  getDataFromMyHost(){
    this.apiService.getMethodFromHost("hello-docker").subscribe({
      next: (data) => {
        console.log('Fetched weathers:', data);
      },
      error: (error) => {
        console.error('Error fetching weathers:', error);
      },
      complete: () => {
        console.log('weathers fetch complete');
      }
    });   
  }

}
