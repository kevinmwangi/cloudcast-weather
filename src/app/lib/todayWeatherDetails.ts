import { OWMCurrent } from '../types'

type ResultObject = {
	name: string;
	value: number;
	icon: string;
	units: string;
}

const convertWeatherData = (data?: OWMCurrent, units: string = 'metric'): ResultObject[] => {
	if (!data) { return []}

	return Object.keys(data)
	             .filter(key => key !== 'weather' && key !== 'rain' && key !== 'dt' && key !== 'temp' && key !== 'feels_like' && key !== 'wind_deg' && key !== 'clouds' && key !== 'dew_point' && key !== 'visibility')
	             .map(key => {
		             let name = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
		             return {
			             name: name,
			             value: data[key as keyof OWMCurrent] as unknown as number,
			             icon: key,
			             units: units
		             }
	             });
}

export default convertWeatherData;