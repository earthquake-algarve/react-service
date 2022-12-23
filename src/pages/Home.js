import React from 'react'
import MainCard from '../components/mainCard/MainCard'
import Slider from '../components/slider/Slider'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            passeios: [],
            mainCard: {}
        }
    }

    componentDidMount() {
        fetch('http://entertours-ofertas.us-east-1.elasticbeanstalk.com/get')
            .then(response => response.json())
            .then(passeios => {
                let qtdPasseios = passeios.length
                let passeioIndex = Math.floor(Math.random() * (qtdPasseios - 1))
                this.setState(() => (
                    {
                        passeios: passeios,
                        mainCard: passeios[passeioIndex]
                    }
                ))
            })
    }

    handlePasseio = e => {
        e.preventDefault()
        this.setState(() => ({ mainCard: this.state.passeios.find(p => e.target.id === p.id) }))
    }

    render() {

        return (
            <>
                <MainCard mainCard={this.state.mainCard} teste={this.teste} />
                <Slider passeios={this.state.passeios} handlePasseio={this.handlePasseio} />
            </>
        )
    }
}