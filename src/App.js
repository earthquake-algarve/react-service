import Header from './components/header/Header'
import Details from './pages/details/Details'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Login from './pages/Login'
import Home from './pages/Home' 
import {Route , Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <Header />
      
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Details />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </div>
    </>
  )
}

