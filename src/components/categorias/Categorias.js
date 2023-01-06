import './categorias.css'

//fazer aparecer as categorias dinamicamente

export default function Categorias(){
    return (
        <>
            <div className='categorias'>
                <div className='barcos'>
                    <b>Barcos</b>
                    <img src='img/boat-icon.svg' alt="boat"></img>
                </div>

                <div className='surf'>
                    <b>Surf</b>
                    <img src='img/surf-icon.svg' alt="boat"></img>
                </div>

                <div className='kayak'>
                    <b>Kayak</b>
                    <img src='img/kayak-icon.svg' alt="boat"></img>
                </div>

                <div className='trilhas'>
                    <b>Trilhas</b>
                    <img src='img/hike-icon.svg' alt="boat"></img>
                </div>

                <div className='city'>
                    <b>City-Tours</b>
                    <img src='img/bus-icon.svg' alt="boat"></img>
                </div>
            </div>
        </>
    )
}