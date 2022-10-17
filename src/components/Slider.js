import "uikit/dist/js/uikit.min.js"; 
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import { Button } from 'react-bootstrap'
import './slider.css'


//mudar o width dos cards dentro do slider
export default function Slider(){
    return(
        <div className="uk-slider-container-offset" uk-slider = "true">

            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

                <ul className="uk-slider-items uk-child-width-1-4@s uk-grid">
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://contes-toten-api.herokuapp.com/passeio/get/5" width="100" height="150" alt=""/>
                            </div>
                            <div className="uk-card-body">
                                <h6 className="uk-card-title">Benagil</h6>
                                <Button>Book now</Button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://contes-toten-api.herokuapp.com/passeio/get/10" width="100" height="150" alt=""/>
                            </div>
                            <div className="uk-card-body">
                                <h5 className="uk-card-title">Foia Tour</h5>
                                <Button>Book now</Button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://contes-toten-api.herokuapp.com/passeio/get/9" width="100" height="150" alt=""/>
                            </div>
                            <div className="uk-card-body">
                                <h5 className="uk-card-title">Lagos Night Out</h5>
                                <Button>Book now</Button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://contes-toten-api.herokuapp.com/passeio/get/8" width="100" height="150" alt=""/>
                            </div>
                            <div className="uk-card-body">
                                <h5 className="uk-card-title">Slide Splash</h5>
                                <Button>Book now</Button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://contes-toten-api.herokuapp.com/passeio/get/7" width="100" height="150" alt=""/>
                            </div>
                            <div className="uk-card-body">
                                <h5 className="uk-card-title">Wine Tour</h5>
                                <Button>Book now</Button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://contes-toten-api.herokuapp.com/passeio/get/6" width="100" height="150" alt=""/>
                            </div>
                            <div className="uk-card-body">
                                <h5 className="uk-card-title">Zoo de Lagos</h5>
                                <Button>Book now</Button>
                            </div>
                        </div>
                    </li>
                </ul>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous = "true" uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next ="true" uk-slider-item="next"></a>

            </div>

            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

        </div>
    )
}