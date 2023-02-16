import './header2.css'
import { MagnifyingGlass, Menu, XMark, Login, Register} from '../../Icons'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';

export default function Header2(){
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }


    return (
		<>
			<div className='Navbar'>
				<div>
					<a href='/'>
						<img src='img/2.png' alt='logo' width='60'></img>
					</a>
				</div>

				<div className='wrap'>
					<div className='search'>
						<input
							type='text'
							className='searchTour'
							placeholder='Search here'
						/>

						<button type='submit' className='searchButton'>
							<i className='icon'>
								<MagnifyingGlass />
							</i>
						</button>
					</div>
				</div>

				<div className='container-menu'>
					<a href='/dashboard' className='avatar'>
						<Avatar
							sx={{ width: 35, height: 35 }}
							alt='G'
							src='/static/images/avatar/1.jpg'
						/>
					</a>

					<button onClick={handleToggle}>
						{' '}
						{navbarOpen ? <XMark /> : <Menu />}{' '}
					</button>

					<div>
						<ul
							className={`menuNav ${
								navbarOpen ? ' showMenu' : ''
							}`}>
							<a href='/signup'>
								<Register /> Register
							</a>
							<a href='/login'>
								<Login /> Login
							</a>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}