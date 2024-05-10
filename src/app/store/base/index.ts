import { createApi, fetchBaseQuery, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { Location, GeoLocation, Base } from "../../types";

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	endpoints: () => ({})
});