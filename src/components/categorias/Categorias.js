import './categorias.css';
import { useState, useEffect } from 'react';

export default function Categorias() {
	const [categoria, setCategoria] = useState([]);
	

	useEffect(() => {
		fetch(`${process.env.REACT_APP_URL}/categoria`)
			.then((res) => res.json())
			.then((response) => {
				setCategoria(getIcon(response));
			});

		/* getIcon(categoria) */	
	}, []);

	function getIcon(categoria) {
		return categoria.map(async (i) => {
			const id = i.id

			const name = i.catName

			const iconUrl = await fetch(
							`${process.env.REACT_APP_URL}/categoria/icon/${i.id}`)
							.then((res) => res.blob())
							.then((blob) =>	URL.createObjectURL(blob)
							)	
							
						return {id, iconUrl, name} 
				})
	} 

/* 	categoria.map(categoria  => console.log(categoria)) */
/* console.log(typeof(categoria)) */
/* console.log(categoria[0]) */
	return (
		<>
			 <div className='categorias'>
 				{Object.keys(categoria).forEach((key) => {
					const key1 = categoria[key]
					for (const [key,value] of Object.entries(categoria[key1])){
						console.log(key);
					}
					/* console.log(categoria[key]);  */
					
					/* return(

						 <div
							key={i.id}
							className={i.name}
						>
							<b>{i.name}</b>
							<img
								src={i.iconUrl}
								alt={i.name}
							></img>
						</div>

					) */
				})
				}
				
			</div>
		</>
	);
}
