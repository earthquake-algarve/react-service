import "uikit/dist/js/uikit.min.js";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import './slider3.css'


export default function Slider3({ passeios }) {

    // console.log(passeios)

    return (
        <>
            <div className="uk-slider-container-offset" uk-slider="true" autoPlay={true} autoplay-interval="3000">

                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

                    <ul className="uk-slider-items uk-child-width-auto uk-grid">

                        {passeios.map((i, key) => {
                            return (
                                <li key={key}>
                                    <div className="uk-card-body uk-card-default" style={{ padding: 0 }}>
                                        <div className="uk-card-media-top">
                                            <img className="card__image" src={`http://entertours-ofertas.us-east-1.elasticbeanstalk.com/get/${i.id}`} alt="" />
                                            
                                            <div className="wr">

                                                <div className='sl-titulo'>
                                                    <b>{i.nome}</b>
                                                </div>

                                                <div className='sl-localizacao'>
                                                    {i.local} 
                                                </div>

                                                <div className='sl-duracao'>
                                                    1.5 horas
                                                </div>

                                                <div className='sl-rating'>
                                                    <img src='img/star-icon.svg' alt='stars'></img>
                                                    <img src='img/star-icon.svg' alt='stars'></img>
                                                    <img src='img/star-icon.svg' alt='stars'></img>
                                                    <img src='img/star-icon.svg' alt='stars'></img>
                                                    <img src='img/star-icon.svg' alt='stars'></img>
                                                    <span id='rating-number'>5.0 (140 avaliações)</span>
                                                </div>

                                                <div className='sl-preco'>
                                                    <b>{i.valor}€</b>
                                                </div>

                                            </div>
                                            
                                        </div>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>

                

            </div>
        </>
    )
}