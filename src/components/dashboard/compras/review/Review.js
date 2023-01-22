import React from 'react'
import './Review.css'

export default function Review() {
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


                        <div className='tour-preco'>
                            <span>Praia de Jeri</span>
                            <span>10/10/2022 10:30</span>
                        </div>

					</div>

					<div className='icons-button-ativo'>
						<div className='button-baixo'>
							<button>Review</button>
						</div>
					</div>
				</div>
			</div>
		</>
  );
}
