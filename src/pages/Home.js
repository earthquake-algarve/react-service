import React from 'react'
import MainCard from '../components/mainCard/MainCard'
import Slider from '../components/slider/Slider'
import { useState, useEffect } from 'react'

export default function Home() {

    const [passeios, setPasseios] = useState([])
    const [mainCard, setMainCard] = useState({})

    useEffect(() => {
        fetch('http://entertours-ofertas.us-east-1.elasticbeanstalk.com/get')
            .then(response => response.json())
            .then(passeios => {
                setPasseios(passeios)
                let qtdPasseios = passeios.length
                let passeioIndex = Math.floor(Math.random() * (qtdPasseios - 1))
                setMainCard(passeios[passeioIndex])
            })
    }, [])

    function handlePasseio(e) {
        e.preventDefault()
        setMainCard(() => passeios.find( p => e.target.id === p.id ))
    }

    return (
        <>
            <MainCard mainCard={mainCard} />
            <Slider passeios={passeios} handlePasseio={handlePasseio} />
        </>
    )
}
