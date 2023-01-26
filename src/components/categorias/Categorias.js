import './categorias.css';
import { useState, useEffect } from 'react';

export default function Categorias() {
	const [categoria, setCategoria] = useState([]);
/* 	const [icons, setIcons] = useState(); */

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/categoria`)
			.then((res) => res.json())
			.then((response) => {
				setCategoria(response);
			});
	}, []);

    console.log(categoria[0])

/* 	fetch(`${process.env.REACT_APP_URL}/categoria/icon/${categorias.id}`)
		.then((res) => res.json())
		.then((response) => {
			setCategorias(response);
		}); */

	return (
		<>
			<div className='categorias'>
				{categoria.map((i, key) => {
					return (
						<div
							key={key}
							className={categoria}
						>
							<b>{i.catName}</b>
							<img
								src={`${process.env.REACT_APP_URL}/categoria/icon/${i.id}`}
								alt={i.catName}
							></img>
						</div>
					);
				})}
			</div>
		</>
	);
}
