import './testimonials.css'
import { ArrowRight } from '../../Icons'

export default function Testimonials(){
    return (
        <>
            <div className='wrap-testimonials'>

                <div className='teste-testimonials'>

                    <div className='testimonials'>

                        <div className='testimonial-text'>
                            <span>Bran Stark</span>
                            <span>Wish to Walk</span>
                            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                        </div>

                        <div className='testimonial-rate'>
                            <span><b>4,9</b></span>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                        </div>

                    </div>


                    <div className='testimonials'>
                        <div className='testimonial-text'>
                            <span>Daniela Targeria</span>
                            <span>Vôo de Dragão</span>
                            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                        </div>

                        <div className='testimonial-rate'>
                            <span><b>4,9</b></span>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                        </div>

                    </div>
                    <div className='testimonials'>


                        <div className='testimonial-text'>
                            <span>João das Neves</span>
                            <span>The wall climbing</span>
                            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                        </div>

                        <div className='testimonial-rate'>
                            <span><b>4,9</b></span>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                            <img src='img/star-icon.svg' alt='stars'></img>
                        </div>

                    </div>
                    
                </div>

                <button className='redirect-all-testimonials'>
                    <a href='/allTestimonials'><b>Ver todos os testimonials</b></a>
                    <ArrowRight />
                </button>
            </div>


            
        </>
    )
}