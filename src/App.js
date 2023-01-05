import React from 'react'
//import Header from './components/header/Header'
import Header2 from './components/header/Header2'
import Details from './pages/details/Details'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Login from './pages/login/Login'
import RecoverPass from './pages/recover/RecoverPass'
import SignUp from './pages/signup/SignUp'
import Home from './pages/Home' 
import Checkout from './pages//checkout/Checkout' 
import Footer from './components/footer/Footer' 
import {Route , Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import InsertRecord from './pages/insertRecord/InsertRecord'

export default class App extends React.Component {

  render () {
    return (
      <>
        {/* <Header /> */}
        <Header2 />
        
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/shoppingcart' element={<ShoppingCart />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/recoverpass' element={<RecoverPass />} />
            <Route path='/insertRecord' element={<InsertRecord />} />
            <Route path='/footer' element={<Footer />} />
          </Routes>
        </div>
        <Footer/>

      </>
    )
  }
}
