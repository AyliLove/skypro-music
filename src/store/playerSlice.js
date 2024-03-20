import { createSlice, current } from '@reduxjs/toolkit'
import { tracksApi } from './api/tracksApi'

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
    filteredPlayList: [],
    filters: {
      authors: [],
      dateOrder: 'По умолчанию',
      genre: [],
    },
    searchString: [],
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

    clearCurrentTrack(state) {
      state.isPlaying = false
      state.isShuffle = false
      state.currentTrack = null
      state.currentTrackId = null
    },

    setPlayList(state, action) {
      state.playList = action.payload.playList
      state.shuffledPlayList = action.payload.playList
      state.ordinalPlayList = action.payload.playList
    },

    playTrack(state) {
      state.isPlaying = true
    },

    stopTrack(state) {
      state.isPlaying = false
    },

    nextTrack(state) {
      if (state.playList[state.currentTrackId + 1]) {
        state.currentTrack = state.playList[state.currentTrackId + 1]
        state.currentTrackId++
      }
    },

    prevTrack(state) {
      if (state.playList[state.currentTrackId - 1]) {
        state.currentTrack = state.playList[state.currentTrackId - 1]
        state.currentTrackId--
      }
    },

    shuffleTrack(state) {
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

    changeTrackLike(state, action) {
      const { isLiked } = action.payload
      state.currentTrack.isLiked = isLiked
    },

    setFilters(state, action) {
      const { filterName, filterValue } = action.payload

      if (filterName === 'dateOrder') {
        state.filters[filterName] = filterValue
        return
      }

      if (state.filters[filterName].includes(filterValue)) {
        state.filters[filterName] = state.filters[filterName].filter(
          (el) => el.toLowerCase() !== filterValue.toLowerCase(),
        )
        // console.log(Object.values(state.filters[filterName]))
      } else {
        state.filters[filterName].push(filterValue)
        // console.log(Object.values(state.filters[filterName]))
      }
    },

    searchTracks(state, action) {
      state.searchString = action.payload.value
    },
  },
})

export const {
  setCurrentTrack,
  clearCurrentTrack,
  setPlayList,
  playTrack,
  stopTrack,
  nextTrack,
  prevTrack,
  shuffleTrack,
  setFilters,
  changeTrackLike,
  searchTracks,
} = playerSlice.actions

export default playerSlice.reducer
