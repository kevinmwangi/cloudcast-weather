const degreeRoundOff = async (degree: number): Promise<string> => {
	if ((Math.round(degree * 10) / 10) % 1 === 0) {
		return `${(Math.round(degree * 10) / 10).toFixed(1)}°C`;
	} else {
		return `${Math.round(degree * 10) / 10}°C`;
	}
};

export default degreeRoundOff;