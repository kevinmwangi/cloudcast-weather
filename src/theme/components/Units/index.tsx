import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { unitsActions } from '../../../app/actions/units';

const UnitToggle: React.FC = () => {
	const dispatch = useAppDispatch();
	const units = useAppSelector((state) => state.units.units);
	const toggleUnits = () => {
		const newUnit =  units === 'metric' ? 'imperial' : 'metric';
		dispatch(unitsActions.toggleUnits(newUnit));
	};

	return (
		<div>
			<button onClick={toggleUnits}>Toggle Units</button>
		</div>
	);
};

export default UnitToggle;