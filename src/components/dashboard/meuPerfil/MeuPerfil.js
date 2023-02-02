import React from 'react';
import './MeuPerfil.css';

const data = {
	Nome: 'Tony Stark',
	NIF: '22222222',
	Morada: 'Costa da Flórida',
	Nacionalidade: 'Estadunidense',
	Fornecedor: 'Sim',
	IBAN: 'USA61 1960195520232021',
};

export default function MeuPerfil() {
	return (
		<>
			<div className='dados-cadastrais'>
				<div className='user-photo'>
					<div className='photo'>
						<img
							src='img/user-image.png'
							alt='profile'
						/>
					</div>
					<div className='edit-photo'>
						<button>Editar foto</button>
					</div>
				</div>

				{Object.entries(data).map(([key, value]) => {
					return (
						<div
							key={key}
							className={`dados-${key}`}
						>
							<span>{key}</span>
							<span>{value}</span>
						</div>
					);
				})}
			</div>
		</>
	);
}
