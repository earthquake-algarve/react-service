import React from 'react'

import './DashboardCard.css'

export default function DashboardCard(props) {
  return (
		<>
			<div className='container-cards'>
				<div className='wrap-card'>
					<div className='left'>
						<div className='img-card'>
							<img
								src='img/jeri.png'
								alt=''
							></img>
						</div>

						<div className='details-card'>
							<div className='details-cima'>
								<div className='tour-preco'>
									<span>{props.tour}</span>
									<span>{props.preco}€</span>
								</div>

								<div className='disponibilidade-cima'>
									<span>{props.disponibilidade}</span>
									<span>{props.dias}</span>
								</div>

								<div className='data-cima'>
									<span>{props.data}</span>
									<span>{props.numeroData}</span>
								</div>

								<div className='horarios-cima'>
									<span>{props.horarios}</span>
									<span>{props.horas}</span>
								</div>
							</div>
							<div className='details-baixo'>
								<div className='meeting-point'>
									<span>{props.meetingPoint}</span>
									<span>{props.locationGoogle}</span>
								</div>

								<div className='localizacao'>
									<span>{props.localizacao}</span>
									<span>{props.city}</span>
								</div>
							</div>
						</div>
					</div>

					<div className='icons-button-ativo'>
						{props.showIcons && (
							<div className='icons-cima'>
								<button>{props.eyeIcon}</button>
								<button>{props.binIcon}</button>
							</div>
						)}

						{props.showButton && (
							<div className='button-baixo'>
								<button>{props.buttonText}</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
  );
}
