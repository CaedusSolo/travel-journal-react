import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Destination from "./components/Destination"

function App() {
  return (
    <div className='app--container'>
      <Header />
      <div className="destinations--container">
        <Destination />
      </div>
    </div>
  )
}

export default App