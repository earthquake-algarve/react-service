import './cardTour.css';

export default function CardTour({ cardTour }) {
	const { id, nome, valor, local,duracao, imgName } = { ...cardTour };

	const URL =
		'http://entertours-ofertas.us-east-1.elasticbeanstalk.com/passeio/';
	let url = id !== undefined ? `${URL}${id}/${imgName}` : '';

	return (
		<>
			<div className='teste'>
				<div className='card-tour'>
					<div className='card-img'>
						<img
							src={url}
							alt='card-img'
						></img>
					</div>

					<div className='informacoes'>
						<div className='titulo'>
							<b>{nome}</b>
						</div>

						<div className='localizacao'>{local}</div>

						<div className='duracao'>{duracao} minutos</div>

						<div className='rating'>
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
							<span id='rating-number'>5.0 (140 avaliações)</span>
						</div>

						<div className='preco'>
							<b>{valor}€</b>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
