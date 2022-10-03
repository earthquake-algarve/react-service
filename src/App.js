import Navbar from './components/Navbar'
import Favorites from './pages/Favorites'
import ShoppingCart from './pages/ShoppingCart'
import Login from './pages/Login'
import Home from './pages/Home' 
import {Route , Routes} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </div>
    </>
  )
}

