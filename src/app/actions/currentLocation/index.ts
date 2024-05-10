import { api } from "../../store/base";
import { Location, GeoLocation } from "../../types";

export const locationApi = api.injectEndpoints( {
	endpoints: ( build ) => ( {
		getCurrentLocation: build.query<Location, void>({
			queryFn: async () => {
				return new Promise((resolve) => {
					navigator.geolocation.getCurrentPosition((position) => {
						resolve({ data: {
							lat: position.coords.latitude,
							lon: position.coords.longitude,
						}});
					}, () => {
						// If user denies location permission, return default location
						resolve({ data: {
							lat: -1.286389, // Default latitude for Nairobi
							lon: 36.817223, // Default longitude for Nairobi
						}});
					});
				});
			},
			invalidatesTags: [{ type: 'CurrentWeather', id: 'CW' }]
		}),
		getLocationByCity: build.query<GeoLocation[], string>({
			query: (city) => `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=d4f22f21c407060d7df4a925b396a59a`,
			invalidatesTags: [{ type: 'CurrentWeather', id: 'CW' }]
		}),
	} ),
	overrideExisting: true,
});

export const { useGetCurrentLocationQuery, useGetLocationByCityQuery } = locationApi;