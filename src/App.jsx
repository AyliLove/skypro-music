import { useState, useEffect } from 'react'
import Bar from './components/Bar/Bar'
import Main from './components/Main/Main'
import './App.css'
import loadingContext from './components/Context'
import * as S from './App.styles'

const App = () => {
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
      <S.WrapperDiv>
        <S.ContainerDiv>
          <Main />
          <Bar />
        </S.ContainerDiv>
      </S.WrapperDiv>
    </loadingContext.Provider>
  )
}

export default App