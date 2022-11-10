import React from 'react'
import './shoppingCart.css'
import { Heart,BinIcon, ArrowDown } from '../../Icons';


export default function ShoppingCart() {

    return (
        <>
            <div className="page-shoppingcart">

                <div className="resumo-top">
                    <div className="page-title">
                        <span className="span">Shopping Cart</span>
                    </div>

                    <div className="items-price">
                        <span className='span'>2 items</span>
                        <span className="span"> | 60€</span>
                    </div>
                </div> 

                <div className="item1">
                
                    <div className="img1">
                        <img alt="" className='image'
                        src="https://contes-toten-api.herokuapp.com/passeio/get/2"
                        />
                    </div>

                    <div className="conteudo-item1">
                        <div className='tour-price'>
                            <span className="tour">Zoo de Lagos</span>
                            <span className="price">30€</span>
                        </div>

                        <div className="date">
                            <span>Data: </span>
                            <span>31/11/2022</span>                
                        </div>

                        <div className="quantidade">
                            Quantidade: 

                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>

                        <div className="icons-heart-bin">
                            <Heart />
                            <BinIcon />
                        </div>

                    </div>

                </div>
                
                <div className="item1">
                
                    <div className="img1">
                        <img alt="" className='image'
                        src="https://contes-toten-api.herokuapp.com/passeio/get/4"
                        />
                    </div>

                    <div className="conteudo-item1">
                        <div className='tour-price'>
                            <span className="tour">Slide Splash</span>
                            <span className="price">30€</span>
                        </div>

                        <div className="date">
                            <span>Data: </span>
                            <span>31/11/2022</span>                
                        </div>

                        <div className="quantidade">
                            Quantidade: 

                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>

                        <div className="icons-heart-bin">
                            <Heart />
                            <BinIcon />
                        </div>

                    </div>

                </div>


                <div className="summary-div">
                    <div className="summary-title">Summary</div>

                    <div className="conteudo-summary">
                        <div className="promo-code">
                            Do you have a promo code?
                            <ArrowDown/>
                        </div>

                        <div className="subtotal">
                            <span>Subtotal:</span>
                            <span >60€</span>
                        </div>

                        <div className="taxes">
                            <span>Taxes:</span>
                            <span>0€</span>
                        </div>

                        <div className="total">
                            <span>Total:</span>
                            <span>60€</span>
                        </div>

                        <div className="redirect-div">
                            <div className='continuar-compra'>
                                <a href="/" className="continuar-compra-link">Continuar compra</a>
                            </div>
                            
                            <div className='finalizar-compra'>
                                <a href="/checkout" className="finalizar-compra-link">Finalizar compra</a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
  );
}



