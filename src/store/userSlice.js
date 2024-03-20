import { createSlice, current } from '@reduxjs/toolkit'
import { startTransition } from 'react'

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },

    deleteUser(state, action) {
      state.user = null
      state.accessToken = null
      state.refreshToken = null
    },

    setAuth(state, action) {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
  },
})

export const { setUser, deleteUser, setAuth } = userSlice.actions

export default userSlice.reducer
