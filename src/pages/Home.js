import React from 'react'
import Slogan from '../components/slogan/Slogan'
import Categorias from '../components/categorias/Categorias'
import Slider3 from '../components/slider3/Slider3'
import Testimonials from '../components/testimonials/Testimonials'
import Locations from '../components/locations/Locations'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            passeios: [],
            cardTour: {}
        }
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_URL_PASSEIOS}`)
            .then(response => response.json())
            .then(passeios => {
                let qtdPasseios = passeios.length
                let passeioIndex = Math.floor(Math.random() * (qtdPasseios - 1))
                this.setState(() => (
                    {
                        passeios: passeios,
                        cardTour: passeios[passeioIndex]
                    }
                ))
            })
    }

/*     handlePasseio = e => {
        e.preventDefault()
        this.setState(() => ({ cardTour: this.state.passeios.find(p => e.target.id === p.id) }))
    } */


    render() {

        return (
			<>
				{/* <MainCard mainCard={this.state.mainCard} teste={this.teste} />
                <Slider passeios={this.state.passeios} handlePasseio={this.handlePasseio} /> */}
				<Slogan />
				<Categorias />
				{/* <CardTour  cardTour={this.state.cardTour} /> */}
				<Slider3
					passeios={this.state.passeios}
					/* handlePasseio={this.handlePasseio} */
				/>
				<Testimonials />
				<Locations />
			</>
		);
    }
}