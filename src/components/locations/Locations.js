import './locations.css'
import { ArrowRight } from '../../Icons'
import { useState, useEffect } from 'react';

export default function Locations(){

    const [localidade, setLocalidade] = useState([]);
    /* 	const [icons, setIcons] = useState(); */

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/localidade`)
            .then((res) => res.json())
            .then((response) => {
                setLocalidade(response);
            });
    }, []);
    return(
        <>
            <div className='locations'>
                {localidade.map((i,key) =>{
                    return(

                    <div key={key} className='location'>
                        <img src={`${process.env.REACT_APP_URL}/localidade/${i.id}`} alt={i.localidade}></img>
                        <span><b>{i.localidade}</b></span>
                    </div>
                    )
                })}
{/*                 <div className='location'>
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
                </div> */}
            </div>

            <button className='redirect-all-locations'>
                <a href='/allDestinations'><b>Ver todos os destinos</b></a>
                <ArrowRight />
            </button>
        </>
    )
}