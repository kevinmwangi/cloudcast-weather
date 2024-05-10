export interface OWMGeoLocation {
	name: string,
	local_names: object,
	lat: number,
	lon: number,
	country: string,
	state: string,
}

export default class GeoLocation {
	name: string
	local_names: object
	lat: number
	lon: number
	country: string
	state: string

	constructor( config: OWMGeoLocation ){
		this.name = config.name;
		this.local_names = config.local_names;
		this.lat = config.lat;
		this.lon = config.lon;
		this.country = config.country;
		this.state = config.state;
	}
}