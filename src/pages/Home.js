import React from 'react'
import MainCard from '../components/mainCard/MainCard'
import Slider from '../components/slider/Slider'
import { useState, useEffect } from 'react'


export default function Home() {

    const [passeios, setPasseios] = useState([])
    const [mainCard, setMainCard] = useState({})


    useEffect(() => {
        showTours()
    }, [])

    async function showTours() {
        fetch('http://entertours-ofertas.us-east-1.elasticbeanstalk.com/get')
            .then(response => response.json())
            .then(data => {
                setPasseios(data)
                showMainCard(data)
            })
    }

    function showMainCard(data){
        let x = data.length

        let y = Math.floor(Math.random()*(x-1))

        setMainCard(data[y])
    }

    function handlePasseio(e){
        e.preventDefault()

        passeios.map(p => {
            if(e.target.id === p.id){
                setMainCard(p)
            }
        })
    }

    return (
        <>
            <MainCard mainCard={mainCard}/>
            <Slider passeios={passeios} handlePasseio={handlePasseio}/>
        </>
    )
}
