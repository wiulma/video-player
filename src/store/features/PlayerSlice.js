import { createSlice } from '@reduxjs/toolkit'

export const PlayerSlice = createSlice({
  name: 'player',
  initialState: {
    isPlaying: false,
    volume: 0.5,
    duration: 0,
    currentTime: 0,
  },
  reducers: {
    startPlaying: (state) => {
      state.isPlaying = true
    },
    stopPlaying: (state) => {
      state.isPlaying = false
    },
    setVolume: (state, action) => {
      state.volume = action.payload
    },
    setDuration: (state, action) => {
      state.duration = action.payload
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload
    },
  },
})

export const { startPlaying, stopPlaying, setVolume, setDuration, setCurrentTime } =
  PlayerSlice.actions

export const selectIsPlaying = (state) => state.isPlaying

export default PlayerSlice.reducer
