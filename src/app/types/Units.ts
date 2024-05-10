export interface OWMUnits {
	units: string,
}

export default class Units {
	units: string

	constructor( config: OWMUnits ){
		this.units = config.units;
	}
}