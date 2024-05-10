import React, { useEffect, useState } from 'react';
import { useGetCurrentLocationQuery, useGetLocationByCityQuery } from '../../../app/actions/currentLocation';

const GeoLocation: React.FC = () => {
	const [city, setCity] = useState('');
	const { data: currentLocation, refetch:  refetchCurrentLocation } = useGetCurrentLocationQuery();
	const { data: locations, refetch: refetchLocationByCity } = useGetLocationByCityQuery( city, { skip: !city });

	useEffect(() => {
		if (currentLocation) {
			console.log(`Current location: ${currentLocation.lat}, ${currentLocation.lon}`);
		}
	}, [currentLocation]);

	const handleGetCurrentLocation = () => {
		refetchCurrentLocation();
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		refetchLocationByCity();
	};

	return (
		<div>
			<h2>Your Location</h2>
			<button onClick={handleGetCurrentLocation}>Get Current Location</button>
			<form onSubmit={handleSubmit}>
				<input type="text" value={city} onChange={( e ) => setCity( e.target.value )}/>
				<button type="submit">Search</button>
			</form>
			{currentLocation && (
				<div>
					<p>Current Latitude: {currentLocation.lat}</p>
					<p>Current Longitude: {currentLocation.lon}</p>
				</div>
			)}
			{locations && locations.map( ( location, index ) => (
				<div key={index}>
					<p>Latitude: {location.lat}</p>
					<p>Longitude: {location.lon}</p>
				</div>
			) )}
		</div>
	);
}

export default GeoLocation;