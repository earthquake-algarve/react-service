import './insertRecord.css';

import { useState, useRef, useEffect } from 'react';

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const diasSemana = [
	'Segunda-feira',
	'Terça-feira',
	'Quarta-feira',
	'Quinta-feira',
	'Sexta-feira',
	'Sábado',
	'Domingo',
];

//fazer validações dos campos - todos os campos devem estar preenchidos
export default function InsertRecord() {
	const [name, setName] = useState('');
	const [localidades, setLocalidades] = useState([]);
	const [local, setLocal] = useState('localidade');
	const [price, setPrice] = useState('');
	const [fileList, setFileList] = useState([]);
	const [duracao, setDuracao] = useState('');
	const [descricao, setDescricao] = useState('');
	const [categoria, setCategoria] = useState('categoria');
	const [categorias, setCategorias] = useState([]);
	const [dia, setDia] = useState([]);
	const [weekDay, setWeekDay] = useState([]);
	const [horarios, setHorarios] = useState('');
	const [message, setMessage] = useState('');

	
	const handleMultipleSelect = (event) => {
		const {
			target: { value },
		} = event;
		setWeekDay(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		);
	};

	const ref = useRef();

	const URL = `${process.env.REACT_APP_URL}`;

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
		/* fetch(`${URL}/calendario`)
			.then((res) => res.json())
			.then((response) => {
				setHorario(response);
			}); */
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append('nome', name);
		formData.append('valor', price);

		const localId = localidades.filter((l) => l.localidade === local);
		if (localId.length === 0) {
			throw Error('Undefined local');
		}
		formData.append('local', localId[0].id);

		formData.append('duracao', duracao);
		formData.append('descricao', descricao);

		const catId = categorias.filter((c) => c.catName === categoria);
		if (catId.length === 0) {
			throw Error('Undefined categoria');
		}
		formData.append('categoria', catId[0].id);

		let day = weekDay.map((dia) => ({
			week: dia,
				hours: [
					horarios
				]
		}))

		console.log(day)

		setDia(day)

		formData.append('day', dia);


		

		/* fileList.forEach((file, i) => {
			formData.append(`file-${i}`, file, file.name)
		}) */
		/* formData.append('images', file); */
		
		formData.append('images', fileList);
		
		console.log(formData);

		try {
			await fetch(`${process.env.REACT_APP_URL_PASSEIOS}`, {
				method: 'POST',
				body: formData,
			})
			.then((response) => {
				if (response.status === 200) {
					setName('');
					setPrice('');
					setLocal('Localização');
					setDuracao('');
					setDescricao('');
					setCategoria('');
					setHorarios('');
					setMessage('Tour created successfully');
				} else {
					setMessage('Some error occured');
				}
			});
		} catch (err) {
			console.log(err);
		}
	};

	function resetFileInput() {
		ref.current.value = '';
	}

	return (
		<>
			<div className='insert-container'>
				<div className='insert-title'>Insert new tour</div>

				<div className='logo'>
					<img src='img/2.png' alt='logo'></img>
				</div>

				<div className='insert-data'>
					<form onSubmit={handleSubmit} method='POST'>
						<label htmlFor='tour-name-input'>Nome do Tour</label>
						<input
							type='text'
							id='tour-name-input '
							className='tour-name-input'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>

						<label htmlFor='localizacao-input'>Localização</label>
						<select
							defaultValue='localizacao'
							className=''
							onChange={(e) => setLocal(e.target.value)}
							ref={ref}
							required>
							<option value='localizacao' disabled>
								Localização
							</option>
							{localidades.map((i, key) => {
								return (
									<option key={key} value={i.localidade}>
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
							required
						/>

						<label htmlFor='duracao-input'>Duração</label>
						<input
							type='text'
							className='duracao-input'
							id='price-input'
							value={duracao}
							onChange={(e) => setDuracao(e.target.value)}
							required
						/>

						<label htmlFor='descricao-input'>Descrição</label>
						<input
							type='text'
							className='descricao-input'
							id='price-input'
							value={descricao}
							onChange={(e) => setDescricao(e.target.value)}
							required
						/>

						<label htmlFor='categoria-input'>Categoria</label>

						<select
							defaultValue='categoria'
							className=''
							onChange={(e) => setCategoria(e.target.value)}
							ref={ref}
							required>
							<option value={categoria} disabled>
								Categoria
							</option>
							{categorias.map((i, key) => {
								return (
									<option key={key} value={i.catName}>
										{i.catName}
									</option>
								);
							})}
						</select>

						<label htmlFor='dias-input'>Dias disponíveis</label>

						<FormControl sx={{ m: 1, width: 390, margin: 0 }}>
							<Select
								labelId='demo-multiple-chip-label'
								id='demo-multiple-chip'
								multiple
								value={weekDay}
								onChange={handleMultipleSelect}
								input={
									<OutlinedInput
										id='select-multiple-chip' label='Chip'
									/>
								}
								renderValue={(selected) => (
									<Box
										sx={{
											display: 'flex',
											flexWrap: 'wrap',
											gap: 0.5,
										}}>
										{selected.map((value) => (
											<Chip key={value} label={value} />
										))}
									</Box>
								)}
								MenuProps={MenuProps}>
								{diasSemana.map((weekDay) => 
								(
									<MenuItem key={weekDay} value={weekDay}	>
										{weekDay}
									</MenuItem>
								))}
							</Select>
						</FormControl>

						<label htmlFor='horarios-input'>Horários</label>
						<input
							type='text'
							className='horarios-input'
							id='horarios-input'
							value={horarios}
							onChange={(e) => setHorarios(e.target.value)}
							required
							placeholder='hh:mm,'
						/>

						<label htmlFor='file-input'>Imagens do Tour</label>
						<input
							type='file'
							className='file-input'
							id='file-input'
							onChange={(e) => setFileList(e.target.files)}
							ref={ref}
							multiple
							
						/>

						<div className='button-div'>
							<input
								type='submit'
								value='Inserir'
								className='button-submit'
								onClick={resetFileInput}
							/>
						</div>

						<div className='message'>
							{message ? <p>{message}</p> : null}
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
