/* import React from 'react';
import './details.css';
import { ArrowLeft, Calendar } from '../../Icons';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Details = () => {
	const [data, setData] = useState([]);

	let { id } = useParams(); 

	const location = useLocation();
	console.log('location', location)

 	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL_PASSEIOS}/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				
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
 */

import React from 'react';
import './details.css';
import { ArrowLeft, Calendar } from '../../Icons';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
	const [dataPasseio, setDataPasseio] = useState([]);
/* 	const [dataPasseios, setDataPasseios] = useState([]); */

	const location = useLocation();
	console.log(location) 

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL_PASSEIOS}/${location.state.id}`)
			.then((response) => response.json())
			.then((data) => {
				setDataPasseio(data);
			});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);



/* 	console.log("---------------------------")
	console.log(dataPasseios[5]); */

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
					<img
						alt={dataPasseio.nome}
						src={`${process.env.REACT_APP_URL_IMG}${location.state.fotoId}`}
					/>
				</div>

				<div className='details'>
					<div className='title-price-div'>
						<div className='title'>{dataPasseio.nome}</div>
						<div className='price'>{dataPasseio.valor}€</div>
					</div>

					<div className='description'>{dataPasseio.descricao}</div>

					<div className='duration'>
						{dataPasseio.duracao} minutos
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
