import Base from "./Base";

export interface OWMAlerts extends Base {
	sender_name: string,
	event: string,
	start: number,
	end: number,
	description: string,
	tags: OWMAlertsTags[],
}

export interface OWMAlertsTags extends OWMAlerts {
	rain: string
}

export default class Alerts extends Base {
	sender_name: string
	event: string
	start: number
	end: number
	description: string
	tags: OWMAlertsTags[]

	constructor( config: OWMAlerts ){
		super( config );
		this.sender_name = config.sender_name;
		this.event = config.event;
		this.start = config.start;
		this.end = config.end;
		this.description = config.description;
		this.tags = config.tags;
	}
}