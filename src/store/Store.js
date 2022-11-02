import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './features/PlayerSlice'

export default configureStore({
  reducer: {
    player: playerReducer,
  },
})
