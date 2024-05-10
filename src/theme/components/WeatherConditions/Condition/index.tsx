import React from 'react';
import { OWMWeather } from '../../../../app/types'
import { formatDate } from '../../../../app/lib'
import WeatherIcon from '../Icons/Image'
import Temperature from '../Temp'
import styles from './Condition.module.scss'


type WeatherProps = {
	weather: OWMWeather[];
	temp: number | null;
	dateTime: number ;
	location: string
};

const Weather: React.FC<WeatherProps> = ({ weather, location, temp, dateTime }) => (

	<div className={styles.currentWeather}>
		{weather.map(( item ) => (
			<div className={styles.conditionCard} key={item.id}>
				<div className={styles.weatherImage}>
					<WeatherIcon code={item.id} />
				</div>
				<div className={styles.conditionDescription}>
					<div className={styles.currentWeatherTemp}>
						<Temperature temp={temp}/>
						<div className={styles.weatherDescription}>{item.description}</div>
					</div>

					<div className={styles.locationTime}>
						<div className={styles.location}>{location}</div>
						<div className={styles.time}>{formatDate( { unixTimestamp: dateTime, type: 'short' })}</div>
					</div>
				</div>
			</div> ) )}
	</div> );

export default Weather;