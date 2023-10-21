import { useState, useEffect } from 'react'
import Bar from './components/Bar'
import Main from './components/Main'
import './styles/App.css'
import loadingContext from './components/Context'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <loadingContext.Provider value={loading}>
      <div className="App">
        <div className="wrapper">
          <div className="container">
            <Main />
            <Bar />
            <footer className="footer" />
          </div>
        </div>
      </div>
    </loadingContext.Provider>
  )
}

export default App