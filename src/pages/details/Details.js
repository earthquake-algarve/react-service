import React from 'react'
import "./details.css";
import { ArrowLeft, Calendar } from '../../Icons';

const EventoDetalhes = () => {
  return (
    <div className="evento-detalhes-div">
        
        <a className="voltar-b" href='/'><ArrowLeft/>Voltar</a>

        <div className="card-detalhes-div">
            <div className="card-detalhes-div1">
                <div className="img-div">
                <img className="benagil-2-icon" alt="" src="https://contes-toten-api.herokuapp.com/passeio/get/1" />
                </div>
                <div className="detalhes-div">
                    <div className="titulo-div">
                    <b className="ttulo-do-passeio">Título do passeio</b>
                    </div>
                    
                    <div className="preo-div">
                    <b className="b">€</b>
                    </div>
                    
                    <div className="descrio-div">
                    <b className="descrio-b">Descrição</b>
                    </div>

                    <div className="durao-div">
                    <b className="durao-1h-25min">Duração: 1h 25min</b>
                    </div>

                    <div className="localidade-div">
                    <b className="localidade-b">Localidade</b>
                    </div>

                    <div className="data-div">

                        <div className="data-02112022-b">Data: 02/11/2022
                        </div>
                        <div className="calendario"><Calendar /></div>
                        
                    </div>

                    <div className="horrio-div">
                        <b className="horrio-1030-b">Horário: 10:30</b>
                    </div>

                </div>
                <div className="button-adicionar-div1">
                    <a  href="/shoppingcart" className="your-text-in-here">Adicionar ao carrinho</a>
                </div>
            </div>



        </div>
      
    </div>
  );
};

export default EventoDetalhes;

