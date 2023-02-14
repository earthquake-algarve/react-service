import React, { useState , useEffect} from 'react';
import './MeuPerfil.css';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';

/* const data = {
	Nome: 'Tony Stark',
	NIF: '22222222',
	Morada: 'Costa da Flórida',
	Nacionalidade: 'Estadunidense',
	Fornecedor: 'Sim',
	IBAN: 'USA61 1960195520232021',
}; */

export default function MeuPerfil() {
	const [image, setImage] = useState('img/camera.png');
	const [click, setClick] = useState('');
		const [data, setData] = useState([])

		useEffect(() => {
		fetch(`http://localhost:8082/signup/082f602c-f93a-45c0-8b10-bc6c9c662052`)
		.then((response) => response.json())
		.then(data => setData(data))
	
	}, []);

	return (
		<>
			<div className='dados-cadastrais'>
				<div className='user-photo'>
					<Figure className='my-0'>
						<Form.Group controlId='formUser'>
							<Form.Control
								className='arquivo'
								type='file'
								ref={(input) => setClick(input)}
								onChange={(e) => {
									setImage(
										URL.createObjectURL(click.files[0]),
									);
								}}
							/>
							<Figure.Image
								className='my-0 picture'
								src={image}
								roundedCircle
								onClick={(e) => {
									click.click();
								}}
							/>
						</Form.Group>
					</Figure>
				</div>

				<div className='editar-perfil'>
					<button>Editar perfil</button>
				</div>

				{Object.entries(data).map(([key, value]) => {
					return (
						<div key={key} className={`dados-${key}`}>
							<span>{key}</span>
							<span>{value}</span>
						</div>
					);
				})}
				{/* 				{data.map((i,key) =>{
					console.log(i)
					return (
						 <div key={key} className={`dados-${key}`}>
							<span>{i.}</span>
							<span>{value}</span>
						</div>
					);
				})} */}
			</div>
		</>
	);
}
