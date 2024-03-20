import { createContext, useEffect, useState } from 'react'
import * as S from './App.styles'
import { AppRoutes } from './routes'
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'
import { useDispatch } from 'react-redux'
import {
  setCurrentTrack,
  stopTrack,
  clearCurrentTrack,
} from './store/playerSlice'
import { setAuth } from './store/userSlice'

export const UserContext = createContext()

const App = () => {
  const dispatch = useDispatch()

  const localstorageUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : ''
  const [user, setUser] = useState(localstorageUser)

  const handleLogoff = () => {
    setUser(null)
    dispatch(stopTrack())
    dispatch(clearCurrentTrack())
    localStorage.removeItem('user')
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    dispatch(setAuth({ accessToken, refreshToken }))
  }, [])

  return (
    <UserContext.Provider
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
    </UserContext.Provider>
  )
}

export default App
