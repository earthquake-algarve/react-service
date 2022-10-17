import "uikit/dist/js/uikit.min.js";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import { Button } from 'react-bootstrap'
import './slider.css'


//mudar o width dos cards dentro do slider
export default function Slider() {

    const array = [1,2,3,4,5,6]

    return (
        <>
        <div className="uk-slider-container-offset" uk-slider="true">

            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

                <ul className="uk-slider-items uk-child-width-1-2 uk-grid">

                    {array.map(i => {
                        return (
                            <li>
                                <div className="uk-card-body uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img src={`https://contes-toten-api.herokuapp.com/passeio/get/${i}`} width="100%" height="150" alt="" />
                                        <p className="uk-card-title">Benagil</p>
                                        <Button>Book now</Button>
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