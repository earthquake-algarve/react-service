import "uikit/dist/js/uikit.min.js";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import { Button } from 'react-bootstrap'
import './slider.css'
import { useState, useEffect } from 'react'

export default function Slider() {

    const [passeios, setPasseios] = useState([])

    useEffect(() => {
        fetch('https://contes-toten-api.herokuapp.com/passeio/getall')
            .then(response => response.json())
            .then(data => setPasseios(data))
    },[])

    return (
        <>
            <div className="uk-slider-container-offset" uk-slider="true">

                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

                    <ul className="uk-slider-items uk-child-width-1-2 uk-grid">

                        {passeios.map(i => {
                            console.log(i)
                            return (
                                <li>
                                    <div className="uk-card-body uk-card-default" style={{padding: 0}}>
                                        <div className="uk-card-media-top">
                                            <img src={`https://contes-toten-api.herokuapp.com/passeio/get/${i.id}`} style={{width:"100%", height:"150px", borderRadius:"5px"}} alt="" />
                                            <p className="uk-card-title">{i.nome}</p>
                                            <Button id="btn-book-slider">Book now</Button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })};

                    </ul>
                </div>

                <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

            </div>
        </>
    )
}