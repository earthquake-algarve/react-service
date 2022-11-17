import React from 'react'
import './login.css'


export default function Login() {

    return (
        <>
            <div className='login-container'>
                <div className="login-title">Login</div>

                <div className='login-logo'>
                    <img src="img/logoEnterTours.jfif" alt='logo'></img>
                </div>

                <div className='login-data'>
                    <form>
                        <label for="email-input">E-mail</label>
                        <input type="text" name="email" id="email-input " placeholder="example@example.com" className='email-input'/>

                        <label for="password-input">Password</label>
                        <input type="password" name="password" className='password-input' id="password-input"/>

                        <div className="button-div">
                            <input type="submit"  value="Login" className='button-submit'/>
                        </div> 

                        <div className='forgot'>
                            <a href="/recovery"> Forgot your password? </a>
                        </div>                       
                    </form>
                </div>

                <div className='signup-redirect'>
                    Not registered? <a href='/signup'> Sign up</a>
                </div>

            </div>
        </>
    )
}
