import './locations.css'
import { ArrowRight } from '../../Icons'

export default function Locations(){
    return(
        <>
            <div className='locations'>
                <div className='location'>
                    <img src='img/Ellipse 5.png' alt=''></img>
                    <span><b>Faro</b></span>
                </div>
                <div className='location'>
                    <img src='img/Ellipse 6.png' alt=''></img>
                    <span><b>Porto</b></span>
                </div>
                <div className='location'>
                    <img src='img/Ellipse 7.png' alt=''></img>
                    <span><b>Lagos</b></span>
                </div>
                <div className='location'>
                    <img src='img/Ellipse 8.png' alt=''></img>
                    <span><b>Lisboa</b></span>
                </div>
            </div>

            <button className='redirect-all-locations'>
                <a href='/allDestinations'><b>Ver todos os destinos</b></a>
                <ArrowRight />
            </button>
        </>
    )
}