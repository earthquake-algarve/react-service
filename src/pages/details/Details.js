import React from 'react'
import "./details.css";
import { ArrowLeft, Calendar } from '../../Icons';

const EventoDetalhes = () => {
  return (
    <div className="details-page">
        
        <a className="back" href='/'><ArrowLeft/></a>

        <div className="container">
            <div className="img-div">
                <img className="benagil-img" alt="benagil img" src="http://entertours-ofertas.us-east-1.elasticbeanstalk.com/get/20c0adc1-3d9c-4fe7-92af-1141ccc14eee" />
            </div>

            <div className="details">
                <div className='title-price-div'>
                    <div className="title">Título do passeio</div>
                    <div className="price">€</div>
                </div>

                
                <div className="description">Description</div>

                <div className="duration">Duração: 1h 25min</div>

                <div className="localidade">Localidade</div>

                <div className="date-div">

                    Data: 02/11/2022
                    <button className="calendar"><Calendar /></button>
                    
                </div>

                <div className="horario">Horário: 10:30</div>

                <div className="reviews">Reviews</div>

            </div>

            <div className="button-adicionar">
                <a  href="/shoppingcart" className="add-to-cart">Adicionar ao carrinho</a>
            </div>
        </div>

    </div>
  );
};

export default EventoDetalhes;

