import React from 'react';
import { Icons, iconCodes }  from '../../../WeatherIcons'

interface WeatherIconProps {
	code: any;
	iconType?: typeof iconCodes.weatherCodes;
}

const getIconPath = (code: any, iconType: typeof iconCodes.weatherCodes = iconCodes.weatherCodes): any => {
	let weatherData = iconType === iconCodes.weatherCodes
		? iconType.find((item) => item.codes === code)
		: iconType.find((item) => item.icon.includes(code.toString()));
	const iconName = weatherData?.icon?.[0] ?? 'notAvailable';
	const iconPath = Icons.fill.svg[iconName as keyof typeof Icons.fill.svg]
	return { iconPath, weatherData };
}

const WeatherIcon: React.FC<WeatherIconProps> = ( { code, iconType = iconCodes.weatherCodes } ) => {
	const iconDetails = getIconPath(code, iconType);
	return ( <img src={iconDetails.iconPath} alt={iconDetails.weatherData?.name}/> );
};

export default WeatherIcon;