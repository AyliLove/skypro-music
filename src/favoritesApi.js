import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const HOST = 'https://skypro-music-api.skyeng.tech/'

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

// export async function getAllTracks() {
//   const response = await fetch(`${HOST}catalog/track/all/`)

//   if (!response.ok) {
//     throw new Error('Ошибка сервера')
//   }

//   const data = await response.json()

//   return data
// }