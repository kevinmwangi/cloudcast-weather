import Base from "./Base";
import { OWMWeather } from "./Current";

export interface OWMTemp extends OWMDaily {
	day: number,
	min: number,
	max: number,
	night: number,
	eve: number,
	morn: number
}

export interface OWMFeelsLike extends OWMDaily {
	day: number,
	night: number,
	eve: number,
	morn: number
}

export interface OWMDaily extends Base {
	dt: number,
	sunrise: number,
	sunset: number,
	moonrise: number,
	moonset: number,
	moon_phase: number,
	summary: string,
	temp: OWMTemp,
	feels_like: OWMFeelsLike,
	pressure: number,
	humidity: number,
	dew_point: number,
	wind_speed: number,
	wind_deg: number,
	wind_gust: number,
	weather: OWMWeather[],
	clouds: number,
	pop: number,
	rain: number,
	uvi: number,
}

export default class Daily extends Base {
	dt: number
	sunrise: number
	sunset: number
	moonrise: number
	moonset: number
	moon_phase: number
	summary: string
	temp: OWMTemp
	feels_like: OWMFeelsLike
	pressure: number
	humidity: number
	dew_point: number
	wind_speed: number
	wind_deg: number
	wind_gust: number
	weather: OWMWeather[]
	clouds: number
	pop: number
	rain: number
	uvi: number

	constructor( config: OWMDaily ){
		super( config );
		this.dt = config.dt;
		this.sunrise= config.sunrise;
		this.sunset= config.sunset;
		this.moonrise= config.moonrise;
		this.moonset= config.moonset;
		this.moon_phase= config.moon_phase;
		this.summary= config.summary;
		this.temp = config.temp;
		this.feels_like = config.feels_like;
		this.pressure = config.pressure;
		this.humidity = config.humidity;
		this.dew_point = config.dew_point;
		this.wind_speed= config.wind_speed;
		this.wind_deg= config.wind_deg;
		this.wind_gust= config.wind_gust;
		this.weather = config.weather;
		this.clouds = config.clouds;
		this.pop = config.pop;
		this.rain = config.rain;
		this.uvi = config.uvi;
	}
}