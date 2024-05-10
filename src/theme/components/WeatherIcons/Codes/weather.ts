const weatherCodes = [
	{
		name: "Thunderstorm with light rain",
		codes: 200,
		icon: ["thunderstormsRain"],
	},
	{
		name: "Thunderstorm with rain",
		codes: 201,
		icon: ["thunderstormsRain"],
	},
	{
		name: "Thunderstorm with heavy rain",
		codes: 202,
		icon: ["thunderstormsExtremeRain"],
	},
	{
		name: "Light Thunderstorm",
		codes: 210,
		icon: ["thunderstormsRain"],
	},
	{
		name: "Thunderstorm",
		codes: 211,
		icon: ["thunderstorms"],
	},
	{
		name: "Heavy Thunderstorm",
		codes: 212,
		icon: ["thunderstormsExtreme"],
	},
	{
		name: "Ragged Thunderstorm",
		codes: 221,
		icon: ["thunderstormsExtreme"],
	},
	{
		name: "Thunderstorm with light drizzle",
		codes: 230,
		icon: ["thunderstormsRain"],
	},
	{
		name: "Thunderstorm with drizzle",
		codes: 231,
		icon: ["thunderstormsRain"],
	},
	{
		name: "Thunderstorm with heavy drizzle",
		codes: 232,
		icon: ["thunderstormsExtremeRain"],
	},
	{
		name: "Mist",
		codes: 701,
		icon: ["mist"],
	},
	{
		name: "Smoke",
		codes: 711,
		icon: ["smoke"],
	},
	{
		name: "Haze",
		codes: 721,
		icon: ["haze"],
	},
	{
		name: "Sand/Dust Whirls",
		codes: 731,
		icon: ["dustWind"], // Consider using "dust-wind" for better representation
	},
	{
		name: "Fog",
		codes: 741,
		icon: ["fog"],
	},
	{
		name: "Sand",
		codes: 751,
		icon: ["dust"],
	},
	{
		name: "Dust",
		codes: 761,
		icon: ["dust"],
	},
	{
		name: "Volcanic Ash",
		codes: 762,
		icon: ["smoke"], // Consider a more specific icon for volcanic ash
	},
	{
		name: "Squalls",
		codes: 771,
		icon: ["wind"], // Consider a more specific icon for squalls
	},
	{
		name: "Tornado",
		codes: 781,
		icon: ["tornado"],
	},
	{
		name: "Light Snow",
		codes: 600,
		icon: ["snow"],
	},
	{
		name: "Snow",
		codes: 601,
		icon: ["snow"],
	},
	{
		name: "Heavy Snow",
		codes: 602,
		icon: ["extremeSnow"], // Consider using "extreme-day-snow" or "extreme-night-snow"
	},
	{
		name: "Sleet",
		codes: 611,
		icon: ["sleet"],
	},
	{
		name: "Light Shower Sleet",
		codes: 612,
		icon: ["overcastSleet"], // Consider using "overcast-day-sleet" or "overcast-night-sleet"
	},
	{
		name: "Shower Sleet",
		codes: 613,
		icon: ["overcastSleet"], // Consider using "overcast-day-sleet" or "overcast-night-sleet"
	},
	{
		name: "Light Rain and Snow",
		codes: 615,
		icon: [ "rain", "snow" ]
	},
	{
		name: "Rain and Snow",
		codes: 616,
		icon: ["rain", "snow"],
	},
	{
		name: "Light Shower Snow",
		codes: 620,
		icon: ["overcastSnow"], // Consider using "overcast-day-snow" or "overcast-night-snow"
	},
	{
		name: "Shower Snow",
		codes: 621,
		icon: ["overcastSnow"], // Consider using "overcast-day-snow" or "overcast-night-snow"
	},
	{
		name: "Heavy Shower Snow",
		codes: 622,
		icon: ["extremeSnow"], // Consider using "extreme-day-snow" or "extreme-night-snow"
	},
	{
		name: "Light Rain",
		codes: 500,
		icon: ["rain"],
	},
	{
		name: "Moderate Rain",
		codes: 501,
		icon: ["rain"],
	},
	{
		name: "Heavy Intensity Rain",
		codes: 502,
		icon: ["extremeRain"], // Consider using "extreme-day-rain" or "extreme-night-rain"
	},
	{
		name: "Very Heavy Rain",
		codes: 503,
		icon: ["extremeRain"], // Consider using "extreme-day-rain" or "extreme-night-rain"
	},
	{
		name: "Extreme Rain",
		codes: 504,
		icon: ["extremeRain"],
	},
	{
		name: "Freezing Rain",
		codes: 511,
		icon: ["sleet"], // Consider using "extreme-rain" or a more specific icon
	},
	{
		name: "Light Intensity Shower Rain",
		codes: 520,
		icon: ["overcastRain"], // Consider using "overcast-day-rain" or "overcast-night-rain"
	},
	{
		name: "Shower Rain",
		codes: 521,
		icon: ["rain"], // Consider using "overcast-day-rain" or "overcast-night-rain"
	},
	{
		name: "Heavy Intensity Shower Rain",
		codes: 522,
		icon: ["extremeRain"], // Consider using "extreme-day-rain" or "extreme-night-rain"
	},
	{
		name: "Ragged Shower Rain",
		codes: 531,
		icon: ["extremeRain"], // Consider using "extreme-day-rain" or "extreme-night-rain"
	},
	{
		name: "Light Intensity Drizzle",
		codes: 300,
		icon: ["drizzle"],
	},
	{
		name: "Drizzle",
		codes: 301,
		icon: ["drizzle"],
	},
	{
		name: "Heavy Intensity Drizzle",
		codes: 302,
		icon: ["extremeDrizzle"], // Consider using "extreme-day-drizzle" or "extreme-night-drizzle"
	},
	{
		name: "Light Intensity Drizzle Rain",
		codes: 310,
		icon: ["drizzle", "rain"],
	},
	{
		name: "Drizzle Rain",
		codes: 311,
		icon: ["drizzle", "rain"],
	},
	{
		name: "Heavy Intensity Drizzle Rain",
		codes: 312,
		icon: ["extremeDrizzle", "rain"], // Consider using "extreme-day-rain" or "extreme-night-rain"
	},
	{
		name: "Shower Rain and Drizzle",
		codes: 313,
		icon: ["drizzle", "rain"],
	},
	{
		name: "Heavy Shower Rain and Drizzle",
		codes: 314,
		icon: ["extremeDrizzle", "extremeRain"], // Consider using "extreme-day-rain" or "extreme-night-rain"
	},
	{
		name: "Few Clouds",
		codes: 801,
		icon: ["partlyCloudy"], // Consider using "partly-cloudy-night" if needed
	},
	{
		name: "Scattered Clouds",
		codes: 802,
		icon: ["partlyCloudy"], // Consider using "partly-cloudy-night" if needed
	},
	{
		name: "Broken Clouds",
		codes: 803,
		icon: ["overcast"], // Consider using "overcast-day" or "overcast-night"
	},
	{
		name: "Overcast Clouds",
		codes: 804,
		icon: ["overcast"], // Consider using "overcast-day" or "overcast-night"
	},
	{
		name: "Clear Sky",
		codes: 800,
		icon: ["clear"], // Consider using "clear-night" if needed
	},
];

export default weatherCodes;