import { createContext, useEffect, useState } from 'react'
import * as S from './App.styles'
import { AppRoutes } from './routes'
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'

export const userContext = createContext()

const App = () => {
  const [currentTrack, setCurrentTrack] = useState(null)

  const [user, setUser] = useState(localStorage.getItem('user'))

  const handleLogoff = () => {
    setUser(null)
    setCurrentTrack(null)
    localStorage.removeItem('user')
  }

  // useEffect(() => {
  //   localStorage.setItem('user', user)
  //   console.log(user)
  // }, [user])

  return (
    <userContext.Provider
      value={{ user, setUser, handleLogoff, currentTrack, setCurrentTrack }}
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