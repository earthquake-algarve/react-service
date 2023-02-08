import './categorias.css';
import { useState, useEffect } from 'react';

export default function Categorias() {
	/* 	const [categoria, setCategoria] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/categoria`)
			.then(res => res.json())
			.then(response => getIcon(response))
	}, []);

	function getIcon(info) {
		info.map(async i => {

			fetch(
				`http://localhost:5000/categoria/icon/${i.id}`)
				.then(res => res.blob())
				.then(blob => {
					let iconDetails = []

					const fr = new FileReader()
					fr.readAsDataURL(blob)
					fr.addEventListener('load', () => {
						iconDetails.push(fr.result)
						iconDetails.push(i.id)
						iconDetails.push(i.catName)
						categoria.push(iconDetails)
					})
				})
		})
	} */

	return (
		<>
			{/* 			<div className='categorias'>
				{categoria.map((cat, i) => {

					return (
						<div key={i} className="categoria">
							<b>{cat[2]}</b>
							<Image image={cat[0]} />
						</div>
					)
				})}

			</div> */}
			<div className='categorias'>
				<div className='barcos'>
					<b>Barcos</b>
					<img src='img/boat-icon.svg' alt='' />
				</div>
				<div className='kayak'>
					<b>Kayak</b>
					<img src='img/kayak-icon.svg' alt='' />
				</div>
				<div className='surf'>
					<b>Surf</b>
					<img src='img/surf-icon.svg' alt='' />
				</div>
				<div className='trilhas'>
					<b>Trilhas</b>
					<img src='img/hike-icon.svg' alt='' />
				</div>
				<div className='city'>
					<b>City Tour</b>
					<img src='img/bus-icon.svg' alt='' />
				</div>
			</div>
		</>
	);
}

/* function Image({ image }) {
	return (
		<img src={image} alt="teste"></img>
	)
} */
