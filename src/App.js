import Bar from '/Users/aylilove/Desktop/3-nd course hw/skypro-music/src/components /Bar.jsx'
import Main from '/Users/aylilove/Desktop/3-nd course hw/skypro-music/src/components /Main.jsx'
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