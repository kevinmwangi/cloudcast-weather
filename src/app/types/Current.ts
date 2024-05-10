import Base from "./Base";

export interface OWMCurrent extends Base {
	dt: number,
	sunrise: number,
	sunset: number,
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
	weather: OWMWeather[],
	rain: OWMRain
}

export interface OWMWeather extends OWMCurrent {
	id: number,
	main: string,
	description: string,
	icon: string
}

export interface OWMRain extends OWMCurrent {
	'1h': number,
}

export default class Current extends Base {
	dt: number
	sunrise: number
	sunset: number
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
	weather: OWMWeather[]
	rain: OWMRain

	constructor( config: OWMCurrent ){
		super( config );
		this.dt = config.dt;
		this.sunrise = config.sunrise;
		this.sunset = config.sunset;
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
		this.weather = config.weather;
		this.rain = config.rain;
	}
}