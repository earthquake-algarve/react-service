import React from 'react'
import './Excluir.css'

export default function Excluir() {
  return (
		<>
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

								<div className='disponibilidade-cima'>
									<span>Disponibilidade</span>
									<span>seg - sex</span>
								</div>

								<div className='horarios-cima'>
									<span>Horários</span>
									<span>09:00 - 18:00</span>
								</div>
							</div>
							<div className='details-baixo'>
								<span>Meeting point</span>
								<span>
									https://goo.gl/maps/3rbDRBdKtGYfWD4F7
								</span>
							</div>
						</div>
					</div>

                    <div className='right'>

                        <div className='icons-button-ativo'>
                            <div className='button-excluir'>
                                <button>Excluir</button>
                            </div>
                        </div>

                    </div>
				</div>
			</div>
		</>
  );
}
