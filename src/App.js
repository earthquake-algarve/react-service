import Navbar from './components/Navbar'
/* import Services from './pages/Services'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Careers from './pages/Careers'*/
import Home from './pages/Home' 
import {Route , Routes} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          {/*<Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/contact' element={<Contacts />} /> */}
        </Routes>

      </div>
    </>
  )
}

