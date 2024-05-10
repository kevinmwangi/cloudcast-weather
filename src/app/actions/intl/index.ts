import { createSlice } from '@reduxjs/toolkit';

const intlSlice = createSlice({
	name: 'intlLang',
	initialState: { lang: 'eng' },
	reducers: {
		toggleLang(state, action) {
			state.lang = action.payload
		},
	},
});

export const { actions: langActions } = intlSlice;
export default intlSlice.reducer;
