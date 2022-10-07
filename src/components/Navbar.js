import {Link} from 'react-router-dom'
import { MagnifyingGlass, Heart, ShoppingCart, Login, Menu } from '../Icons'



export default function Navbar() {
    function expandSearchBar(){
        const searchBar = document.getElementById('searchbar')
        const searchLink = document.getElementById('search-link')
        const search = document.getElementById('search')
        const icon= document.getElementById('icon')
        searchBar.classList.toggle('active')
        searchLink.classList.toggle('active')
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
                        <Link id='search-link'>
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

                    {/* <div className='menu-hamburger'>
                        <Link className='menu-icon' onClick={expandMenu}><Menu /></Link>
                    </div> */}

                    <nav class="navbar navbar-dark bg-dark">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                            <h5 class="text-white h4">Collapsed content</h5>
                            <span class="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                    
                </ul>
            </nav>
        </>
    )
}