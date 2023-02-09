import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignIn } from 'react-auth-kit';
import { statusForbidden, statusOK } from '../../mock';

import './login.css';

export default function Login() {
	const [emailLogin, setEmailLogin] = useState('');
	const [passwordLogin, setPasswordLogin] = useState('');

	const signIn = useSignIn();

	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

	let userData = { emailLogin, passwordLogin };

	const handleClick = async (e) => {
		e.preventDefault();

		console.log('email: ', emailLogin, 'password: ', passwordLogin);

		try {
			const result = await fetch('http://localhost:8081/passeio', {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}).then(
				(response) => {
					if (response.status === 200) {
                        signIn({
							token: response.status,
							expiresIn: 60,
							tokenType: 'Bearer',
							authState: { email: emailLogin },
						});
						navigate('/dashboard')
					}
                    else{
                        navigate("/login")
                    }
                   
				},

				/* if (response.json().includes(userData)) {
					navigate('/');
				} */
			);

			/*  signIn({
                token: result.data.token,
                expiresIn: 60,
                tokenType: 'Bearer',
                authState: {email: emailLogin}
            }) */
		} catch (err) {
			console.log(err);
		}
	};

	/* console.log(statusOK().status); */

	return (
		<>
			<div className='login-container'>
				<div className='login-title'>Login</div>

				<div className='login-logo'>
					<img src='img/2.png' alt='logo'></img>
				</div>

				<div className='login-data'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor='email-input'>E-mail</label>
						<input
							type='text'
							{...register('emailLogin', {
								required: true,
								pattern:
									/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							})}
							id='email-input '
							placeholder='example@example.com'
							className='email-input'
							onChange={(e) => setEmailLogin(e.target.value)}
						/>
						{errors.emailLogin && (
							<span className='invalid-email'>Invalid email</span>
						)}

						<label htmlFor='password-input'>Password</label>
						<input
							type='password'
							{...register('passwordLogin', {
								required: true,
							})}
							className='password-input'
							id='password-input'
							onChange={(e) => setPasswordLogin(e.target.value)}
						/>

						<div className='button-div'>
							<input
								type='submit'
								value='Login'
								className='button-submit'
								onClick={handleClick}
							/>
						</div>

						<div className='forgot'>
							<a href='/recoverpass'> Forgot your password? </a>
						</div>
					</form>
				</div>

				<div className='signup-redirect'>
					Not registered? <a href='/signup'> Sign up</a>
				</div>
			</div>
		</>
	);
}
