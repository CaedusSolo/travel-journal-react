import './App.css'
import Header from './components/Header'
import Destination from "./components/Destination"
import Footer from "./components/Footer"
import destinationsData from "./data"

function App() {
  const destinations = destinationsData.map(destination => {
    return <Destination 
            key={destination.id}
            destination={destination}
    />
  })
  
  return (
    <div className='app--container'>
      <Header />
      <div className="destinations--container">
        {destinations}
      </div>
      <Footer />
    </div>
  )
}

export default App