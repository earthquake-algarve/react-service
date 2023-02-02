import './categorias.css';
import { useState, useEffect } from 'react';

export default function Categorias() {
	const [categoria, setCategoria] = useState([]);

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
	}

	return (
		<>
			<div className='categorias'>
				{categoria.map((cat, i) => {

					return (
						<div key={i} className="categoria">
							<b>{cat[2]}</b>
							<Image image={cat[0]} />
						</div>
					)
				})}

			</div>
		</>
	);
}

function Image({ image }) {
	return (
		<img src={image} alt="teste"></img>
	)
}
