import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerSlice'
import { tracksApi } from './api/tracksApi'
import { authApi } from './api/authApi'
import userReducer from './userSlice'

export default configureStore({
  reducer: {
    playerApp: playerReducer,
    auth: userReducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([tracksApi.middleware, authApi.middleware]),
    
})
