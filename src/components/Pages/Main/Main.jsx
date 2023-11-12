import { NavMenu } from '../../NavMenu/NavMenu'
import MainCenterBlock from '../../MainCenterBlock/MainCenterBlock'
import MainSideBar from '../../MainSideBar/MainSideBar'
import { MainDiv } from './Main.styles'
import AudioPlayer from '../../AudioPlayer/AudioPlayer'
import { useState, useEffect } from 'react'
import loadingContext from '../../Context'

export const Main = () => {
  const [loading, setLoading] = useState(true)
  const [currentTrack, setCurrentTrack] = useState(null)

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)
  //   return () => {
  //     clearTimeout(timeoutId)
  //   }
  // }, [])

  return (
    <loadingContext.Provider value={{loading, setLoading, currentTrack, setCurrentTrack}}>
      <MainDiv>
        <NavMenu />
        <MainCenterBlock />
        <MainSideBar />
        {currentTrack ? <AudioPlayer /> : null}
      </MainDiv>
    </loadingContext.Provider>
  )
}