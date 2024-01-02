import { createSlice, current } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    isPlaying: false,
    isShuffle: false,
    currentTrack: null,
    currentTrackId: null,
    playList: [],
    shuffledPlayList: [],
    ordinalPlayList: [],
  },
  reducers: {
    setCurrentTrack(state, action) {
      state.isPlaying = true
      state.currentTrack = action.payload.track
      state.currentTrackId = state.playList.findIndex(
        (el) => el.id === state.currentTrack.id,
      )
      console.log(state.currentTrackId)
    },

    setPlayList(state, action) {
      state.playList = action.payload.playList
      state.shuffledPlayList = action.payload.playList
      state.ordinalPlayList = action.payload.playList
    },

    playTrack(state, action) {
      state.isPlaying = true
    },

    stopTrack(state, action) {
      state.isPlaying = false
    },

    nextTrack(state, action) {
      if (state.playList[state.currentTrackId + 1]) {
        state.currentTrack = state.playList[state.currentTrackId + 1]
        state.currentTrackId++
      }
    },

    prevTrack(state, action) {
      if (state.playList[state.currentTrackId - 1]) {
        state.currentTrack = state.playList[state.currentTrackId - 1]
        state.currentTrackId--
      }
    },

    shuffleTrack(state, action) {
      const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1))
          ;[array[i], array[j]] = [array[j], array[i]]
        }
      }

      state.isShuffle = !state.isShuffle

      if (state.isShuffle) {
        shuffle(state.shuffledPlayList)
        state.playList = state.shuffledPlayList
      } else {
        state.playList = state.ordinalPlayList
      }
    },

  },
})

export const {
  setCurrentTrack,
  setPlayList,
  playTrack,
  stopTrack,
  nextTrack,
  prevTrack,
  shuffleTrack,
} = playerSlice.actions

export default playerSlice.reducer