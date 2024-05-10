/** ----------------------------
 *  The Beaufort Wind Scale
 *  ----------------------------
 *  REF: https://www.rmets.org/metmatters/beaufort-wind-scale
 *  */

type Unit = 'metric' | 'imperial';

interface WindSpeedProps {
	speed: number;
	unit?: Unit;
}

const convertWindSpeedToBeaufort = ({ speed, unit = 'metric' }: WindSpeedProps): number => {
	const speedsKph = [1, 6, 12, 20, 29, 39, 50, 61, 74, 88, 102, 118];
	const speedsMph = [1, 4, 7, 12, 18, 24, 31, 38, 46, 55, 63, 73];
	const speeds = unit === 'imperial' ? speedsMph : speedsKph;

	return speeds.findIndex((s) => speed < s);
};

export default convertWindSpeedToBeaufort;