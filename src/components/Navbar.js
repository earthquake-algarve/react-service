import {Link} from 'react-router-dom'
import { MagnifyingGlass, Heart, ShoppingCart, Login, Menu } from '../Icons'


export default function Navbar() {

    return (
        <>
            <nav className="topnav">
                <Link to="/" className="logo">
                    LOGO
                </Link>
                <ul>
                    <form action="">
                        <input type="search"/>
                        <i className='fa fa-search' ><MagnifyingGlass /></i>
                    </form>
                    <Link to='/favorites'><Heart /></Link>
                    <Link to='/shoppingcart'><ShoppingCart /></Link>
                    <Link to='/login'><Login /></Link>
                    <Link ><Menu /></Link>
                </ul>
            </nav>
        </>
    )
}