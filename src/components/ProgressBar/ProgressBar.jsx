import React, { useEffect, useState } from 'react'
import * as S from './ProgressBar.styles'
import { forwardRef } from 'react'

export const ProgressInputTrackDefault = () => {
  return <S.ProgressInput type="range" value={0} />
}

export const ProgressInputTrack = forwardRef((props, ref) => {
  ProgressInputTrack.displayName = 'ProgressInputTrack'

  const [currentTime, setCurrentTime] = useState(0)

  const handleCurrentTime = (value) => {
    setCurrentTime(value)
    ref.current.currentTime = value
  }

  useEffect(() => {
    setCurrentTime(ref.current.currentTime)
    if (ref.current.currentTime === ref.current.duration) {
      setCurrentTime(0)
    }
  }, [ref.current.currentTime])

  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={ref.current.duration ? ref.current.duration : 0}
      value={currentTime}
      step={0.01}
      onChange={(e) => handleCurrentTime(e.target.value)}
    />
  )
})

export const ProgressInputVolume = forwardRef((props, ref) => {
  ProgressInputVolume.displayName = 'ProgresInputVolume'

  const [volume, setVolume] = useState(0.1)

  // const handleVolume = (value) => {
  //   setVolume(value)
  //   ref.current.volume = value
  // }

  useEffect(() => {
    ref.current.volume = volume
  }, [volume])

  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={1}
      value={volume}
      step={0.01}
      onChange={(e) => setVolume(e.target.value)}
    />
  )
})