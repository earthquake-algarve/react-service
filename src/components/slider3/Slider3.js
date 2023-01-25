import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/css/uikit-core.min.css';
import './slider3.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Slider3 =({ passeios , props /* ,handlePasseio */}) => {

    const [isSelected, setIsSelected] = useState(false);

    const navigate = useNavigate();

		
    useEffect(() => {
		setIsSelected(false);

        if(isSelected){
            navigate(`/details/${props.id}`);
        }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSelected]);

/* 	function teste(e){
		console.log(e.target)
	} */
	return (
		<>
			<div
				className='uk-slider-container-offset'
				uk-slider='true'
				autoPlay={true}
				autoplay-interval='6000'
			>
				<div
					className='uk-position-relative uk-visible-toggle uk-light'
					tabIndex='-1'
				>
					<ul className='uk-slider-items uk-child-width-auto uk-grid'>
						{passeios.map((i, key) => {
							return (
								<li
									key={key}
									data-id={i.id}
									/* onClick={teste} */
									onClick={() => setIsSelected(!isSelected)}
									/* onClick={handlePasseio} */
								>
									{/* Tiramos essa div para resolver a responsividade dos cards em telefones pequenos */}
									{/* <div className="uk-card-body uk-card-default" > */}
									<Link to={`/details/${i.id}`}>
										<div className='uk-card-media-top'>
											<img
												className='card__image'
												src={`${process.env.REACT_APP_URL_IMG}${i.fotoId}`}
												alt=''
											/>

											<div className='wr'>
												<div className='sl-titulo'>
													<b>{i.nome}</b>
												</div>

												<div className='sl-localizacao'>
													{i.local}
												</div>

												<div className='sl-duracao'>
													{i.duracao} minutos
												</div>

												<div className='sl-rating'>
													<img
														src='img/star-icon.svg'
														alt='stars'
													></img>
													<img
														src='img/star-icon.svg'
														alt='stars'
													></img>
													<img
														src='img/star-icon.svg'
														alt='stars'
													></img>
													<img
														src='img/star-icon.svg'
														alt='stars'
													></img>
													<img
														src='img/star-icon.svg'
														alt='stars'
													></img>
													<span id='rating-number'>
														5.0 (140 avaliações)
													</span>
												</div>

												<div className='sl-preco'>
													<b>{i.valor}€</b>
												</div>
											</div>
										</div>
									</Link>

									{/* </div> */}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Slider3;