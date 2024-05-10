import { api } from '../../store/base';
import { Base, Constants } from "../../types";

export const CurrentWeather = api.injectEndpoints({
	endpoints: (build) => ({
		getCurrentWeather: build.query<Base, {lat: number, lon: number, key: string, units: string}>({
			query: ( { lat, lon, units, key } ) => ({
				url: `${Constants.OPENWEATHERMAP.BASE}?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`
			}),
			providesTags: [{ type: 'Weather', id: 'CW' }]
		}),
	}),
	overrideExisting: true,
})


export const { useGetCurrentWeatherQuery } = CurrentWeather;