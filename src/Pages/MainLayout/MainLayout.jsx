import { NavMenu } from '../../components/NavMenu/NavMenu'
import MainCenterBlock from '../../components/MainCenterBlock/MainCenterBlock'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
// import { MainDiv } from './MainLayout.styles'
import * as S from './MainLayout.styles'
import CenterBlockContent from '../../components/CenterBlockContent/CenterBlockContent'
import CenterBlockFilter from '../../components/CenterBlockFilter/CenterBlockFilter'
import CenterBlockSearch from '../../components/CenterBlockSearch/CenterBlockSearch'
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import { useState, useEffect, useContext } from 'react'
import { loadingContext } from '../../Context'
import { UserContext } from '../../App'
import { useDispatch, useSelector } from 'react-redux'
import { stopTrack } from '../../store/playerSlice'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  const [loading, setLoading] = useState(true)
  const [getTracksError, setGetTracksError] = useState(null)

  // const { currentTrack } = useContext(UserContext)
  const currentTrack = useSelector((state) => state.playerApp.currentTrack)

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)
  //   return () => {
  //     clearTimeout(timeoutId)
  //   }
  // }, [])

  return (
    <loadingContext.Provider
      value={{ loading, setLoading, getTracksError, setGetTracksError }}
    >
      <S.MainDiv>
        <NavMenu />

        {/* <MainCenterBlock /> */}
        <S.MainCenterBlockDiv>
          {/* <CenterBlockSearch /> */}
          {/* <S.CenterBlockH2>Треки</S.CenterBlockH2> */}
          <Outlet />
          {/* <CenterBlockFilter /> */}
          {/* <CenterBlockContent /> */}
        </S.MainCenterBlockDiv>

        <MainSideBar />
        {currentTrack && <AudioPlayer />}
      </S.MainDiv>
    </loadingContext.Provider>
  )
}
