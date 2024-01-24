import { createContext, useEffect, useState } from 'react'
import * as S from './App.styles'
import { AppRoutes } from './routes'
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'
import { useDispatch } from 'react-redux'
import { setCurrentTrack, stopTrack, clearCurrentTrack } from './store/playerSlice'

export const userContext = createContext()

const App = () => {
  const dispatch = useDispatch()
  

  const [user, setUser] = useState(localStorage.getItem('user'))

  const handleLogoff = () => {
    setUser(null)
    dispatch(stopTrack())
    dispatch(clearCurrentTrack())
    localStorage.removeItem('user')
  }

  // useEffect(() => {
  //   localStorage.setItem('user', user)
  //   console.log(user)
  // }, [user])

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        handleLogoff,
      }}
    >
      <S.WrapperDiv>
        <GlobalStyle />
        <S.ContainerDiv>
          <AppRoutes />
        </S.ContainerDiv>
      </S.WrapperDiv>
    </userContext.Provider>
  )
}

export default App