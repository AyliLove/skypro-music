import Bar from './components /Bar.jsx'
import Main from './components /Main.jsx'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Main />

          <Bar />

          <footer className="footer" />

        </div>
      </div>
    </div>
  )
}

export default App