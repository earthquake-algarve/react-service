/* eslint-disable jsx-a11y/anchor-is-valid */
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/css/uikit-core.min.css';
import './slider3.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Slider3 =({ passeios }) => {
    const navigate = useNavigate();


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
								>
									{/* Tiramos essa div para resolver a responsividade dos cards em telefones pequenos */}
									{/* <div className="uk-card-body uk-card-default" > */}

									<a
										onClick={() => {
											navigate('/details', {
												state: {
													id: i.id,
													fotoId: i.fotoId,
													nome: i.nome,
													valor:i.valor,
													descricao: i.descricao,
													duracao: i.duracao,
												},
											});
										}}
									>
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
									</a>

									{/* </div> */}
								</li>
							);
						})}
					</ul>
				</div>
				
				<ul className='uk-slider-nav uk-dotnav uk-flex-center uk-margin'></ul>
			</div>
		</>
	);
}

export default Slider3;