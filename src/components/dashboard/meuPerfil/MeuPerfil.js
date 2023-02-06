import React/* , { useState }  */from 'react';
import './MeuPerfil.css';

const data = {
	Nome: 'Tony Stark',
	NIF: '22222222',
	Morada: 'Costa da Flórida',
	Nacionalidade: 'Estadunidense',
	Fornecedor: 'Sim',
	IBAN: 'USA61 1960195520232021',
};

export default function MeuPerfil() {
/* 
	const [img, setImg] = useState('')

	const handleUpload = () =>{
		
		const { files } = document.querySelector('.upload-input');

		const formData = new FormData()
		formData.append("upload", files[0]) /upload é o nome que dei na minha db de teste 

		const options = {
			method: "POST",
			body: formData,
		}

		return fetch(`http://localhost:3306/teste_foto_perfil`, options)
			.then((res) => res.json())
			.then((res) => {
				setImg(res);
			})
			.catch((err) => console.log(err));
	}
 */

	return (
		<>
			<div className='dados-cadastrais'>
				<div className='user-photo'>
					<div className='photo'>
						<input
							type="file" 
							accept="image"
							className='upload-input'

						/>
					</div>
					<div className='edit-photo'>
						<button /* onClick={handleUpload} */>Inserir foto</button>
					</div>
				</div>

				{Object.entries(data).map(([key, value]) => {
					return (
						<div
							key={key}
							className={`dados-${key}`}
						>
							<span>{key}</span>
							<span>{value}</span>
						</div>
					);
				})}
			</div>
		</>
	);
}
