import { NavMenu } from '../../NavMenu/NavMenu'
import MainCenterBlock from '../../MainCenterBlock/MainCenterBlock'
import MainSideBar from '../../MainSideBar/MainSideBar'
import { MainDiv } from './Main.styles'
import Bar from '../../Bar/Bar'
import { useState, useEffect } from 'react'
import loadingContext from '../../Context'

export const Main = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <loadingContext.Provider value={loading}>
      <MainDiv>
        <NavMenu />
        <MainCenterBlock />
        <MainSideBar />
        <Bar />
      </MainDiv>
    </loadingContext.Provider>
  )
}