import React from 'react';
import './details.css';
import { ArrowLeft, Calendar } from '../../Icons';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = (/*  passeios  */ props) => {
	const [data, setData] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		fetch(
			`http://entertours-ofertas.us-east-1.elasticbeanstalk.com/passeio/${id}`
		)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				/* console.log(data) */
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

			{data.map((i, key) => {
				return (
					<div
						key={key}
						className='container'
					>
						<div className='img-div'>
							<img
								className='benagil-img'
								alt='benagil img'
								src={`${process.env.REACT_APP_URL_IMG}${i.fotoId}`}
							/>
						</div>

						<div className='details'>
							<div className='title-price-div'>
								<div className='title'>{i.nome}</div>
								<div className='price'>{i.valor}€</div>
							</div>

							<div className='description'>{i.descricao}</div>

							<div className='duration'>{i.duracao} minutos</div>

							<div className='localidade'>
								{i.local.localidade}
							</div>

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
				);
			})}
		</div>
	);
};

export default Details;
