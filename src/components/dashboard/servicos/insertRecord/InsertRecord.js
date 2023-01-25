import './insertRecord.css';
import { useState, useRef, useEffect } from 'react';

//fazer validações dos campos - todos os campos devem estar preenchidos
export default function InsertRecord() {
	const [name, setName] = useState('');
	const [localidades, setLocalidades] = useState([]);
	const [local, setLocal] = useState('');
	const [price, setPrice] = useState('');
	const [file, setFile] = useState();
	const [duracao, setDuracao] = useState('');
	const [descricao, setDescricao] = useState('');
	const [categoria, setCategoria] = useState('');
	const [categorias, setCategorias] = useState([]);
	const [message, setMessage] = useState('');

	const ref = useRef();

	const URL = 'http://entertours-ofertas.us-east-1.elasticbeanstalk.com';

	useEffect(() => {
		fetch(`${URL}/localidade`)
			.then((res) => res.json())
			.then((response) => {
				setLocalidades(response);
			});

		fetch(`${URL}/categoria`)
			.then((res) => res.json())
			.then((response) => {
				setCategorias(response);
			});
	}, []);


	let handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append('nome', name);
		formData.append('valor', price);
		formData.append('local', local);
		formData.append('duracao', duracao);
		formData.append('descricao', descricao);
 		formData.append('categoria', categoria); 
		formData.append('images', file);

		try {
			await fetch(
				'http://entertours-ofertas.us-east-1.elasticbeanstalk.com/passeio',
				{
					method: 'POST',
					body: formData,
				}
			).then((response) => {
				if (response.status === 200) {
					setName('');
					setPrice('');
					setLocal('');
					setDuracao('');
					setDescricao('');
					setCategoria('');
					setMessage('Tour created successfully');
				} else {
					setMessage('Some error occured');
				}
			});
		} catch (err) {
			console.log(err);
		}
	};

	function reset() {
		ref.current.value = '';
	}

	return (
		<>
			<div className='insert-container'>
				<div className='insert-title'>Insert new tour</div>

				<div className='logo'>
					<img
						src='img/logoEnterTours.jfif'
						alt='logo'
					></img>
				</div>

				<div className='insert-data'>
					<form
						onSubmit={handleSubmit}
						method='POST'
					>
						<label htmlFor='tour-name-input'>Nome do Tour</label>
						<input
							type='text'
							id='tour-name-input '
							className='tour-name-input'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<label htmlFor='localizacao-input'>Localização</label>
						<select
							defaultValue='localizacao'
							className=''
							onChange={(e) => setLocal(e.target.value)}
						>
							<option
								value='localizacao'
								disabled
							>
								Localização
							</option>
							{localidades.map((i, key) => {
								return (
									<option
										key={key}
										value='localidade'
									>
										{i.localidade}
									</option>
								);
							})}
						</select>

						<label htmlFor='price-input'>Preço</label>
						<input
							type='number'
							className='price-input'
							value={price}
							id='price-input'
							onChange={(e) => setPrice(e.target.value)}
						/>

						<label htmlFor='duracao-input'>Duração</label>
						<input
							type='text'
							className='duracao-input'
							id='price-input'
							onChange={(e) => setDuracao(e.target.value)}
						/>

						<label htmlFor='descricao-input'>Descrição</label>
						<input
							type='text'
							className='descricao-input'
							id='price-input'
							onChange={(e) => setDescricao(e.target.value)}
						/>

						<label htmlFor='categoria-input'>Categoria</label>

						<select
							defaultValue='categoria'
							className=''
							onChange={(e) => setCategoria(e.target.value)}
						>
							<option
								value='categoria'
								disabled
							>
								Categoria
							</option>
							{categorias.map((i, key) => {
								return (
									<option
										key={key}
										value='categoria'
									>
										{i.catName}
									</option>
								);
							})}
						</select>

						<label htmlFor='file-input'>Tour's image</label>
						<input
							type='file'
							className='file-input'
							id='file-input'
							onChange={(e) => setFile(e.target.files[0])}
							ref={ref}
						/>

						<div className='button-div'>
							<input
								type='submit'
								value='Insert'
								className='button-submit'
								onClick={reset}
							/>
						</div>

						<div
							className='message'
						>
							{message ? <p>{message}</p> : null}
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
