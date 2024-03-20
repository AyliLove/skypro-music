import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { deleteUser, setAuth } from '../userSlice'
import { useParams } from 'react-router-dom'

// const HOST = 'https://skypro-music-api.skyeng.tech/'

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken  
      console.debug('Использую токен из стора', { token })
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  })

  

  const result = await baseQuery(args, api, extraOptions)
  console.debug('Результат первого запроса', { result })
  if (result?.error?.status !== 401) {
    return result
  }


  const forceLogout = () => {
    console.debug('Принудительная авторизация!')
    api.dispatch(deleteUser())
    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }

 
  const { auth } = api.getState()
  console.debug('Данные пользователя в сторе', { auth })
  if (!auth.refreshToken) {
    return forceLogout()
  }

  
  const refreshResult = await baseQuery(
    {
      url: '/user/token/refresh/',
      method: 'POST',
      body: {
        refresh: auth.refreshToken,
      },
    },
    api,
    extraOptions,
  )

  console.debug('Результат запроса на обновление токена', { refreshResult })
  if (!refreshResult.data.access) {
    return forceLogout()
  }
  api.dispatch(
    setAuth({
      accessToken: refreshResult.data.access,
      refreshToken: auth.refreshToken,
    }),
  )


  const retryResult = await baseQuery(args, api, extraOptions)
  if (retryResult?.error?.status === 401) {
    return forceLogout()
  }

  console.debug('Повторный запрос завершился успешно')

  return retryResult
}

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  tagTypes: ['Likes'],

  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getAllTracks: build.query({
      query: () => `catalog/track/all/`,
      transformResponse: (response) => {
        // console.log(response)
        let userId = localStorage.getItem('user')
        if (userId) {
          userId = JSON.parse(userId).id
        }
        // console.log(userId, 'All')

        const tracks = response.map((track) => {
          const user = track.stared_user.find((el) => el.id === userId)
          return {
            ...track,
            isLiked: !!user,
          }
        })

        return tracks
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Likes', id })),
              { type: 'Likes', id: 'LIST' },
            ]
          : [{ type: 'Likes', id: 'LIST' }],
    }),

    getFavoritesTracks: build.query({
      query: () => {
        const accessToken = localStorage.getItem('accessToken')
        return {
          url: `catalog/track/favorite/all/`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (response) => {
        const tracks = response.map((track) => {
          return {
            ...track,
            isLiked: true,
          }
        })

        return tracks
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Likes', id })),
              { type: 'Likes', id: 'LIST' },
            ]
          : [{ type: 'Likes', id: 'LIST' }],
    }),

    getCategoryTracks: build.query({
      query: (id) => {
        const accessToken = localStorage.getItem('accessToken')
        return {
          url: `catalog/selection/${id}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      },
      transformResponse: (response) => {
        console.log(response)
        let userId = localStorage.getItem('user')
        if (userId) {
          userId = JSON.parse(userId).id
        }
        console.log(userId, 'Category')

        const tracks = response.items.map((track) => {
          const user = track.stared_user.find((el) => el.id === userId)
          return {
            ...track,
            isLiked: !!user,
          }
        })

        return { name: response.name, tracks: tracks }
      },
      providesTags: (result) =>
        result.tracks
          ? [
              ...result.tracks.map(({ id }) => ({ type: 'Likes', id })),
              { type: 'Likes', id: 'LIST' },
            ]
          : [{ type: 'Likes', id: 'LIST' }],
    }),

    setLike: build.mutation({
      query: ({ id }) => {
        const accessToken = localStorage.getItem('accessToken')
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      },
      invalidatesTags: [{ type: 'Likes', id: 'LIST' }],
    }),

    setDisLike: build.mutation({
      query: ({ id }) => {
        const accessToken = localStorage.getItem('accessToken')
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      },
      invalidatesTags: [{ type: 'Likes', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetFavoritesTracksQuery,
  useGetCategoryTracksQuery,
  useSetLikeMutation,
  useSetDisLikeMutation,
} = tracksApi
