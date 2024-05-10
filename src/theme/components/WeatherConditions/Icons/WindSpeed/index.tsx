import React from 'react';
import { convertWindSpeedToBeaufort } from '../../../../../app/lib';
import WeatherIcon from "../Image";
import { iconCodes } from "../../../WeatherIcons";

type Unit = 'metric' | 'imperial';
interface WindSpeedIconProps {
	wind_speed: number;
	unit: Unit
}

const WindSpeedIcon: React.FC<WindSpeedIconProps> = ({ wind_speed, unit = 'metric' }) => {
	const beaufortScale = convertWindSpeedToBeaufort({ speed: wind_speed, unit });
	let iconName = `windBeaufort${beaufortScale}`;
	return <WeatherIcon code={iconName} iconType={iconCodes.beaufortWindCodes}/>
};

export default WindSpeedIcon;