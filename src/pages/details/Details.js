import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './details.css';
import { ArrowLeft, Calendar } from '../../Icons';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
	const [dataPasseio, setDataPasseio] = useState({});
	const [dataImg, setDataImg] = useState([]);

	const location = useLocation();
	/* console.log(location); */

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL_PASSEIOS}/${location.state.id}`)
			.then((response) => response.json())
			.then((data) => {
				setDataPasseio(data);
				setDataImg(data.fotos)

			});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	return (
		<div className='details-page'>
			<a
				className='back'
				href='/'
			>
				<ArrowLeft />
			</a>
			<div className='container'>
				<div className='img-div'>
					<Carousel>
						{dataImg.map((i, key) => {
							return (
								<Carousel.Item key={key}>
								
									<img
										
										alt={location.state.nome}
										src={`${process.env.REACT_APP_URL_IMG}${i.id}`}
									/>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</div>

				<div className='details'>
					<div className='title-price-div'>
						<div className='title'>{location.state.nome}</div>
						<div className='price'>{location.state.valor}€</div>
					</div>

					<div className='description'>{dataPasseio.descricao}</div>

					<div className='duration'>
						{location.state.duracao} minutos
					</div>

					<div className='localidade'></div>

					<div className='date-div'>
						Data: 02/11/2022
						<button className='calendar'>
							<Calendar />
						</button>
					</div>

					<div className='horario'>Horário: 10:30</div>

					<div className='reviews'>Reviews</div>
				</div>

				<div className='button-adicionar'>
					<a
						href='/shoppingcart'
						className='add-to-cart'
					>
						Adicionar ao carrinho
					</a>
				</div>
			</div>
		</div>
	);
};

export default Details;
