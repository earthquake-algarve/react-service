import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignIn } from 'react-auth-kit';


export default function SignUp2() {
	const [name, setName] = useState('');
	const [nationality, setNationality] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    /* const [message, setMessage] = useState('') */

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const signIn = useSignIn();

    const navigate = useNavigate();

	const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

	let handleClick = async (e) => {
		e.preventDefault();

		try {
			await fetch(`http://localhost:8082/signup`, {
				method: 'POST',
				body:JSON.stringify({
					name: name,
					nationality: nationality,
					email: email,
					password: password,
				}),
				headers: { 'Content-Type': 'application/json' },
			})
			.then((response) => {
				if(response.status === 200){
					console.log('User created');
					signIn({
						token: response.status,
						expiresIn: 60,
						tokenType: 'Bearer',
						authState: { 
							name: name,
							email: email,
						 },
					});
					navigate("/dashboard")
				}
				
			})

		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className='signup-container'>
				<div className='signup-title'>Sign up</div>

				<div className='signup-logo'>
					<img src='img/2.png' alt='logo'></img>
				</div>

				<div className='signup-data'>
					<form onSubmit={handleSubmit(onSubmit)} method='POST'>
						<label htmlFor='name-input'>Name</label>
						<input
							type='text'
							name='name'
							className='name-input'
							id='name-input'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>

						<label htmlFor='nationality-input'>Nationality</label>
						<input
							type='text'
							name='nationality'
							className='nationality-input'
							id='nationality-input'
							value={nationality}
							onChange={(e) => setNationality(e.target.value)}
							required
						/>

						<label htmlFor='email-input'>E-mail</label>
						<input
							type='text'
							name='email'
							id='email-input '
							placeholder='example@example.com'
							className='email-input'
							{...register('email', {
								required: true,
								pattern:
									/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							})}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{errors.emailLogin && (
							<span className='invalid-email'>Invalid email</span>
						)}

						<label htmlFor='password-input'>Password</label>
						<input
							type='password'
							name='password'
							className='password-input'
							id='password-input'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>

						<div className='button-div'>
							<button
								type='submit'
								className='button-submit'
								onClick={handleClick}>
								Sign up
							</button>
						</div>

						{/* <div style={{ margin: '0 auto' }} className='message'>
							{message ? <p>{message}</p> : null}
						</div> */}
					</form>
				</div>

				<div className='signup-redirect'>
					Already registered? <a href='/login'>Login</a>
				</div>
			</div>
		</>
	);
}

