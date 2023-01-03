import './slider4.css'
import { motion } from 'framer-motion'
import CardTour from '../cardTour/CardTour'

import { useState, useEffect, useRef } from 'react'


export default function Slider4({ passeios }){
    const carousel = useRef()

    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])


    return (
        <>
            <motion.div ref={carousel} className='carousel4' whileTap={{cursor: "grabbing"}}>

                <motion.div 
                className='inner' 
                drag="x" 
                dragConstraints={{right: 0, left: -width}}>
                    {passeios.map((card, i) => (
                        <motion.div  key={i} className='item'>
                            <CardTour />
                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>
        </>
    )
}