import React from 'react';
import { formatDate } from '../../../../app/lib';
import { iconCodes } from '../../WeatherIcons';
import { WeatherIcon, UVIndexIcon, WindSpeedIcon } from '../Icons'
import styles from './WeatherDetailItem.module.scss';


type Unit = 'metric' | 'imperial';
interface WeatherDetailItemProps {
	name: string;
	value: number,
	icon: string,
	units: Unit
}

const getConditionDetails = (icon: string, value: any, units: string): any => {
	switch (icon) {
		case "sunrise":
			return {
				name: 'sunrise',
				value: formatDate( { unixTimestamp: value, type: 'hour' })
			};
		case "sunset":
			return {
				name: 'sunset',
				value: formatDate( { unixTimestamp: value, type: 'hour' })
			};
		case "pressure":
			return {
				name: 'barometer',
				value: `${value} hPa`
			};
		case "humidity":
			return {
				name: 'humidity',
				value: `${value} %`
			};
		case "wind_speed":
			return {
				name: 'Wind Speed',
				value: units === 'metric' ? `${value} m/s` : `${value} mph`
			};
		case "uvi":
			return {
				name: 'UV Index',
				value: value
			};
		default:
			return {
				name: 'unknown',
				value: value
			};
	}
}

const getIconCodes = (icon: string): any => {
	switch (icon) {
		case "sunrise":
			return iconCodes.astronomicalCodes;
		case "sunset":
			return iconCodes.astronomicalCodes;
		case "visibility":
			return iconCodes.weatherCodes;
		default:
			return iconCodes.miscellaneousCodes;
	}
}

const WeatherDetailItem: React.FC<WeatherDetailItemProps> = ( { name, value, icon, units = 'metric' } ) => {
	const conditionDetails = getConditionDetails(icon, value, units);
	const iconCode = getIconCodes(icon);

	return (
		<div className={styles.col}>
			<div className={styles.condition_icon}>
				{icon === 'uvi' ? <UVIndexIcon uvIndex={value}/> : icon === 'wind_speed' ? <WindSpeedIcon wind_speed={value} unit={units}/> : <WeatherIcon code={conditionDetails.name} iconType={iconCode}/>}
			</div>
			<div className={styles.condition_details}>
				<div className={styles.title}>{name === 'Uvi' ? conditionDetails.name : name }</div>
				<div className={styles.value}>{conditionDetails.value}</div>
			</div>
		</div>
	)
}

export default WeatherDetailItem;