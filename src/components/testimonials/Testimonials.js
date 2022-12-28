import './testimonials.css'
import { ArrowRight } from '../../Icons'

export default function Testimonials(){
    return (
        <>
            <div className='wrap-testimonials'>

                <div className='teste-testimonials'>

                    <div className='testimonials'>
                        <div className='img-client'>
                            <img src='img/image 2.png' alt=''></img>
                        </div>

                        <div className='testimonial-text'>
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
                        <div className='img-client'>
                            <img src='img/image 2.png' alt=''></img>
                        </div>

                        <div className='testimonial-text'>
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
                        <div className='img-client'>
                            <img src='img/image 2.png' alt=''></img>
                        </div>

                        <div className='testimonial-text'>
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