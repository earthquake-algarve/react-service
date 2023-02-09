import React from 'react'
import Header2 from './components/header/Header2'
import Details from './pages/details/Details'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Login from './pages/login/Login'
import RecoverPass from './pages/recover/RecoverPass'
import SignUp from './pages/signup/SignUp'
import Home from './pages/Home' 
import Checkout from './pages//checkout/Checkout' 
import Footer from './components/footer/Footer' 
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
/* import InsertRecord from './pages/insertRecord/InsertRecord' */
import Dashboard from './pages/dashboard/Dashboard'
import { RequireAuth } from 'react-auth-kit'
/* import MeuPerfil from './components/dashboard/meuPerfil/MeuPerfil' */

export default class App extends React.Component {

  render () {
    return (
		<>
			<Header2 />

			<div className='App'>
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/details' element={<Details />} />
						<Route
							path='/checkout'
							element={
								<RequireAuth loginPath='/login'>
									<Checkout />
								</RequireAuth>
							}
						/>
						<Route
							path='/shoppingcart'
							element={<ShoppingCart />}
						/>
						<Route path='/signup' element={<SignUp />} />
						<Route path='/login' element={<Login />} />
						<Route path='/recoverpass' element={<RecoverPass />} />
						{/* <Route path='/insertRecord' element={<InsertRecord />} /> */}
						<Route
							path='/dashboard'
							element={
								<RequireAuth loginPath='/login'>
									<Dashboard />
								</RequireAuth>
							}
						/>
						{/* <Route path='/meuperfil' element={<MeuPerfil />} /> */}
					</Routes>
				</Router>
			</div>

			<Footer />
		</>
	);
  }
}
