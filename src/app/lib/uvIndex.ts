type UVIndexCategory = number[]

interface UVIndexProps {
	uvi: number;
}

const getUVIndex = ({ uvi }: UVIndexProps): number => {
	let uviRounded = Math.round(uvi);
	const uvIndexCategories: UVIndexCategory = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

	return  uvIndexCategories.findIndex((s) => uviRounded < s);
}

export default getUVIndex;