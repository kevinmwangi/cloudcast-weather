import React, { useState, useEffect } from 'react'
import { useGetCurrentWeatherQuery } from '../../../app/actions/currentWeather'
import { useGetCurrentLocationQuery } from '../../../app/actions/currentLocation'
import { convertWeatherData } from '../../../app/lib'
import WeatherCondition from './Condition'
import WeatherDetailItem from './WeatherDetailItem'
import styles from './MainConditions.module.scss'

export const MainConditions = () => {
	const [permissionStatus, setPermissionStatus] = useState('prompt');
	const [unit] = useState('metric');
	const { data: currentLocation } = useGetCurrentLocationQuery( undefined,{
		skip: permissionStatus === 'denied',
	});
	const { data: weather, isError, isLoading } = useGetCurrentWeatherQuery({
		lat: currentLocation?.lat ?? -1.286389,
		lon: currentLocation?.lon ?? 36.817223,
		key: 'd4f22f21c407060d7df4a925b396a59a',
		units: unit
	});
	const todayWeatherDetails = convertWeatherData(weather?.current, unit);

	useEffect(() => {
		navigator.permissions.query({ name: 'geolocation' }).then(({ state }) => {
			setPermissionStatus(state);
		});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError || !weather) {
		return <div>Error fetching weather</div>;
	}

	return(
		<section className={styles.main_conditions}>
			<h1>Main Conditions</h1>
			<div className={styles.current_weather}>
				<div className={styles.current_conditions}>
					<WeatherCondition weather={weather?.current?.weather} location={weather?.timezone} temp={weather?.current?.temp} dateTime={weather?.current?.dt} />
				</div>
				<div className={styles.current_conditions_details}>
					<div className={styles.todays_weather_details}>
						{todayWeatherDetails.map((item, index) =>
							<WeatherDetailItem
								key={index}
								name={item.name}
								value={item.value}
								icon={item.icon}
								units={item.units as 'metric' | 'imperial'}
							/>
						)}
					</div>
					<div className={styles.hourly_forcast}></div>
				</div>
			</div>
		</section> )
}