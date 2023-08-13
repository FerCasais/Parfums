import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../contants/firebase';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }),
  tagTypes: ['user'],
  endpoints: (builder) => ({
    
    getProfile: builder.query({
      query: () => `/user.json`,
      transformResponse: (response) => {
        if (!response) return [];
        return Object?.keys(response)?.map((key) => ({
          id: key,
          ...response[key],
        }));
      },
    
    }),
  }),
});

export const {  useGetProfileQuery } = profileApi;