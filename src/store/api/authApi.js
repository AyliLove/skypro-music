import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
  }),
  endpoints: (build) => ({
    getToken: build.mutation({
      query: ({ email, password }) => ({
        url: '/user/token/',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
})

export const { useGetTokenMutation } = authApi
