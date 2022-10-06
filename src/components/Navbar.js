import {Link} from 'react-router-dom'
import { MagnifyingGlass, Heart, ShoppingCart, Login, Menu } from '../Icons'


export default function Navbar() {
    function expandSearchBar(){
        const searchbar = document.getElementById('searchbar')
        const search = document.getElementById('search')
        const icon= document.getElementById('icon')
        searchbar.classList.toggle('active')
        search.classList.toggle('active')
        icon.classList.toggle('active')
    }

    //not working
    function expandMenu(){
        const exampleLinks = document.getElementsByClassName('example-links')
        if(exampleLinks.style.display === 'block'){
            exampleLinks.style.display = 'none'
        }
        else{
            exampleLinks.style.display='block'
        }
    }




    return (
        <>
            <nav className="topnav">
                <Link to="/" className="logo">
                    LOGO
                </Link>
                <ul>
                    {/* <form action="">
                        <input type="search"/>
                        <i className='fa fa-search' ><MagnifyingGlass /></i>
                    </form> */}
                    <div className="search-bar" id='searchbar'>
                        <Link>
                            <input type="text" className='search' id="search" />
                            <div className='icon' >
                                <i id='icon'  onClick={expandSearchBar} >
                                    <MagnifyingGlass />
                                </i>
                            </div>
                        </Link>
                    </div>

                    <div className='nav-items'>
                        <Link to='/favorites'><Heart /></Link>
                        <Link to='/shoppingcart'><ShoppingCart /></Link>
                        <Link to='/login'><Login /></Link>
                    </div>

                    <div className='example-links'>
                        <Link>News</Link>
                        <Link>About</Link>
                        <Link>Contact</Link>
                    </div>

                    <div className='menu-hamburger'>
                        <Link className='menu-icon' onClick={expandMenu}><Menu /></Link>
                    </div>
                    
                </ul>
            </nav>
        </>
    )
}