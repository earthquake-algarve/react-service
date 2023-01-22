import React from 'react'
import './HistoricoDeCompras.css'

export default function HistoricoDeCompras() {
  return (
		<>
			<div className='container-gerenciamento'>
				<div className='wrap-compra'>
					<div className='left'>
						<div className='img-compra'>
							<img
								src='img/jeri.png'
								alt='praia de jeri'
							></img>
						</div>

						<div className='details-cima'>
							<div className='tour-preco'>
								<span>Praia de Jeri</span>
								<span>35€</span>
							</div>

							<div className='disponibilidade-cima'>
								<span>Disponibilidade</span>
								<span>seg - sex</span>
							</div>

							<div className='horarios-cima'>
								<span>Data</span>
								<span>10/10/2022 09:00</span>
							</div>
						</div>
					</div>

					<div className='icons-button-ativo'>
						<div className='button-baixo'>
							<button>Editar</button>
						</div>
					</div>
				</div>

				{/* outro wrap sem o botao editar para simular que o passeio ja foi realizado */}

				<div className='wrap-compra'>
					<div className='left'>
						<div className='img-compra'>
							<img
								src='img/jeri.png'
								alt='praia de jeri'
							></img>
						</div>

						<div className='details-cima'>
							<div className='tour-preco'>
								<span>Praia de Jeri</span>
								<span>35€</span>
							</div>

							<div className='disponibilidade-cima'>
								<span>Disponibilidade</span>
								<span>seg - sex</span>
							</div>

							<div className='horarios-cima'>
								<span>Data</span>
								<span>01/9/2022 09:00</span>
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
  );
}
