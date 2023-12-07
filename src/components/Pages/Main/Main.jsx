import { NavMenu } from '../../NavMenu/NavMenu'
import MainCenterBlock from '../../MainCenterBlock/MainCenterBlock'
import MainSideBar from '../../MainSideBar/MainSideBar'
import { MainDiv } from './Main.styles'
import AudioPlayer from '../../AudioPlayer/AudioPlayer'
import { useState, useEffect, useContext } from 'react'
import { loadingContext } from '../../Context'
import { userContext } from '../../../App'

export const Main = () => {
  const [loading, setLoading] = useState(true)
  const { currentTrack } = useContext(userContext)


  
  return (
    <loadingContext.Provider value={{ loading, setLoading }}>
      <MainDiv>
        <NavMenu />
        <MainCenterBlock />
        <MainSideBar />
        {currentTrack ? <AudioPlayer /> : null}
      </MainDiv>
    </loadingContext.Provider>
  )
}