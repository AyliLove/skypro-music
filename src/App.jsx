import { createContext, useEffect, useState } from 'react'
import * as S from './App.styles'
import { AppRoutes } from './components/routes'
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'

export const userContext = createContext()

const App = () => {
  const [currentTrack, setCurrentTrack] = useState(null)

  const getUser = localStorage.getItem('user')
  const [user, setUser] = useState(getUser)

  const handleLogoff = () => {
    setUser(null)
  }

  useEffect(() => {
    localStorage.setItem('user', user)
  }, [user])


  return (
    <userContext.Provider value={{ user, setUser, handleLogoff, currentTrack, setCurrentTrack }}>
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