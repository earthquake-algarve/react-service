import "uikit/dist/js/uikit.min.js";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import { Button } from 'react-bootstrap'
import './slider.css'
import { useState, useEffect } from 'react'

export default function Slider() {

    const [passeios, setPasseios] = useState([])

    useEffect(() => {
        showTours()
    }, [])

    async function showTours() {
        fetch('http://entertours-ofertas.us-east-1.elasticbeanstalk.com/get')
            .then(response => response.json())
            .then(data => setPasseios(data))
    }

    return (
        <>
            <div className="uk-slider-container-offset" uk-slider="true">

                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

                    <ul className="uk-slider-items uk-child-width-1-2 uk-grid">

                        {passeios.map((i, key) => {
                            return (
                                <li key={key}>
                                    <div className="uk-card-body uk-card-default" style={{ padding: 0 }}>
                                        <div className="uk-card-media-top">
                                            <img className="card__image" src={`http://entertours-ofertas.us-east-1.elasticbeanstalk.com/get/${i.id}`} alt="" />
                                            <p className="uk-card-title">{i.nome}</p>
                                            <Button href="/details" id="btn-book-slider">Book now</Button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>

                <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

            </div>
        </>
    )
}