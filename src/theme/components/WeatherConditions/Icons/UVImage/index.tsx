import React from 'react';
import WeatherIcon from '../Image'
import { getUVIndex } from "../../../../../app/lib";
import { iconCodes } from "../../../WeatherIcons";

interface UVIndexIconProps {
	uvIndex: number;
}

const UVIndexIcon: React.FC<UVIndexIconProps> = ( { uvIndex } ) => {
	const uvi = getUVIndex( { uvi: uvIndex })
	let iconName = (uvi > 0 && uvi <= 11) ? `uvIndex${uvi}` : 'uvIndex';
	return <WeatherIcon code={iconName} iconType={iconCodes.uvIndexCodes}/>
};

export default UVIndexIcon;