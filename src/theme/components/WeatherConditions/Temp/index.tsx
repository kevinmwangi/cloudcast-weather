import React, { useState } from 'react';
import "../../WeatherIcons/Icons/monochrome/font/Meteocons.css";
import styles from './Temp.module.scss';

interface TempProps {
	temp: number | null;
}

const Temperature: React.FC<TempProps> = ({ temp }) => {
	const [unit] = useState('metric'); // default unit

	return (
		<div className={styles.temp}>
			<span className={styles.tempNo}>{temp}</span>
			<span className={styles.tempSymbol}><i className={unit === 'metric' ? 'm-wi_celsius' : 'm-wi_fahrenheit'}/></span>
		</div>
	);
};

export default Temperature;