import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import unitsReducer from '../actions/units';
import langReducer from '../actions/intl';
import { api } from './base'

export const store = configureStore( {
	reducer: {
		[api.reducerPath]: api.reducer,
		units: unitsReducer,
		lang: langReducer,
	},
	middleware: (gDM) => gDM().concat(api.middleware),
} )

// configure listeners using the provided defaults
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;