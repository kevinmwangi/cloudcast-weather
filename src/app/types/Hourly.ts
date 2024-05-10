import Base from "./Base";
import { OWMRain, OWMWeather } from "./Current";

export interface OWMHourly extends Base {
	dt: number,
	temp: number,
	feels_like: number,
	pressure: number,
	humidity: number,
	dew_point: number,
	uvi: number,
	clouds: number,
	visibility: number,
	wind_speed: number,
	wind_deg: number,
	pop: number,
	wind_gust: number,
	weather: OWMWeather[],
	rain: OWMRain
}

export default class Hourly extends Base {
	dt: number
	temp: number
	feels_like: number
	pressure: number
	humidity: number
	dew_point: number
	uvi: number
	clouds: number
	visibility: number
	wind_speed: number
	wind_deg: number
	pop: number
	wind_gust: number
	weather: OWMWeather[]
	rain: OWMRain

	constructor( config: OWMHourly ){
		super( config );
		this.dt = config.dt;
		this.temp = config.temp;
		this.feels_like = config.feels_like;
		this.pressure = config.pressure;
		this.humidity = config.humidity;
		this.dew_point = config.dew_point;
		this.uvi = config.uvi;
		this.clouds = config.clouds;
		this.visibility = config.visibility;
		this.wind_speed = config.wind_speed;
		this.wind_deg = config.wind_deg;
		this.wind_gust = config.wind_gust;
		this.weather = config.weather;
		this.pop = config.pop;
		this.rain = config.rain;
	}
}