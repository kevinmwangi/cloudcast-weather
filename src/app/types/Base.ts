import { OWMCurrent } from "./Current";
import { OWMDaily } from "./Daily";
import { OWMHourly } from "./Hourly";
import { OWMAlerts } from "./Alerts";

export interface Location {
	lat: number | null;
	lon: number | null;
}

export interface OWMBase {
	lat: number
	lon: number
	timezone: string
	timezone_offset: number
	current: OWMCurrent
	hourly: OWMHourly
	daily: OWMDaily
	alerts: OWMAlerts
}

export default class Base {
	lat : number
	lon : number
	timezone : string
	timezone_offset : number
	current: OWMCurrent
	hourly: OWMHourly
	daily:OWMDaily
	alerts: OWMAlerts

	constructor(config: OWMBase) {
		this.lat = config.lat;
		this.lon = config.lon;
		this.timezone = config.timezone;
		this.timezone_offset = config.timezone_offset;
		this.current = config.current;
		this.hourly = config.hourly;
		this.daily = config.daily;
		this.alerts = config.alerts;
	}
}