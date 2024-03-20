import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
  }),
  endpoints: (build) => ({
    getFavoritesTracks: build.query({
      query: () => `catalog/track/all/`,
    }),
  }),
})

export const { useGetFavoritesTracksQuery } = favoritesApi

