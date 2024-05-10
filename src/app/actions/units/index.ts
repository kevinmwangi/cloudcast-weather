import { createSlice } from '@reduxjs/toolkit';

const unitsSlice = createSlice({
	name: 'units',
	initialState: { units: 'metric' },
	reducers: {
		toggleUnits(state, action) {
			state.units = action.payload
		},
	},
});

export const { actions: unitsActions } = unitsSlice;
export default unitsSlice.reducer;
