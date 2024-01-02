import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './playerSlice'

export default configureStore({
    reducer: {
        playerApp: playerReducer
    }
})