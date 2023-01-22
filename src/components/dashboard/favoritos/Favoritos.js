import React from 'react';
import SearchBar from '../searchbar/SearchBar';
import './Favoritos.css';
import { EyeIcon, BinIcon } from '../../../Icons';

export default function Favoritos() {
	return (
		<>
			<SearchBar />

			<div className='container-ativos'>
				<div className='wrap-ativo'>
					<div className='left'>
						<div className='img-ativo'>
							<img
								src='img/jeri.png'
								alt='praia de jeri'
							></img>
						</div>

						<div className='details-ativo'>
							<div className='details-cima'>
								<div className='tour-preco'>
									<span>Praia de Jeri</span>
									<span>35€</span>
								</div>
							</div>
							<div className='details-baixo'>
								<span>Localização</span>
								<span>Jericoacara</span>
							</div>
						</div>
					</div>

					<div className='icons-button-ativo'>
						<div className='icons-cima'>
							<button>
								<EyeIcon />
							</button>
							<button>
								<BinIcon />
							</button>
						</div>

						<div className='button-baixo'>
							<button>Comprar</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
