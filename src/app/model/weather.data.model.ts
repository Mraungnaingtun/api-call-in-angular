interface Forecast {
    date: string;
    temperature: number;
    weather_description: string;
    humidity: number;
    wind_speed: number;
}

export interface WeatherDTO {
    id: number;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    temperature: number;
    weather_description: string;
    humidity: number;
    wind_speed: number;
    forecast: Forecast[];
}
