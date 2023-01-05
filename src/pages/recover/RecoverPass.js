import React from 'react'
import './recoverpass.css'


export default function Login() {

    return (
        <>
            <div className='recover-container'>
                <div className="recover-title">Recover Password</div>

                <div className='recover-logo'>
                    <img src="img/logoEnterTours.jfif" alt='logo'></img>
                </div>

                <div className='recover-data'>
                    <form>
                        <label htmlFor="email-input">E-mail</label>
                        <input type="text" name="email" id="email-input " placeholder="example@example.com" className='email-input'/>

                        <div className="button-div">
                            <input type="submit"  value="Recover" className='button-submit'/>
                        </div> 

                        <div className='back-login'>
                            <a href="/login">Login</a>
                        </div>
                     
                    </form>
                </div>


            </div>
        </>
    )
}