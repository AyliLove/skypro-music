import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerSlice'
import { favoritesApi } from '../favoritesApi'

export default configureStore({
  reducer: {
    playerApp: playerReducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(favoritesApi.middleware)
})