import React from 'react'
//import { useState } from 'react';
import './signup.css'

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            nationality:"",
            email:'',
            password:'',
            /* message:'', */
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

/*     const [name, setName] = useState("");
    const [nationality, setNationality] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [message, setMessage] = useState(""); */

    handleChange(e){
        this.setState({value: e.target.value})
    }

    async handleSubmit(e){
        e.preventDefault()

        try {

            await fetch("http://localhost:8080/signup", {
                method: "POST",
                body:JSON.stringify({
                    name: this.state.name,
                    nationality: this.state.nationality,
                    email: this.state.email,
                    password: this.state.password
                }),
                headers:{'Content-Type': 'application/json'},
            })
            .then(response => {
                response.json()

                if (response.status === 200) {
                    this.state.name("");
                    this.state.nationality("");
                    this.state.email("");
                    this.state.password("");
                    /* this.state.message("Register created successfully");  */
                } 
                else {
                   /* this.state.message("Some error occured"); */
                }
                
            })
            
        }   
        catch (err) {
          console.log(err);
        }

    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleNationalityChange = (e) => {
        this.setState({ nationality: e.target.value });
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }
    
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    render(){
        return (
            <>
                <div className='signup-container'>
                    <div className="signup-title">Sign up</div>
    
                    <div className='signup-logo'>
                        <img src="img/logoEnterTours.jfif" alt='logo'></img>
                    </div>
    
                    <div className='signup-data'>
                        <form onSubmit={this.handleSubmit} method="POST">
                            <label htmlFor="name-input">Name</label>
                            <input type="text" name="name" className='name-input' id="name-input" value={this.state.name} onChange={this.handleNameChange}/>
    
                            <label htmlFor="nationality-input">Nationality</label>
                            <input type="text" name="nationality" className='nationality-input' id="nationality-input" value={this.state.nationality} onChange={this.handleNationalityChange}/>
    
                            <label htmlFor="email-input">E-mail</label>
                            <input type="text" name="email" id="email-input " placeholder="example@example.com" className='email-input' value={this.state.email} onChange={this.handleEmailChange}/>
    
                            <label htmlFor="password-input">Password</label>
                            <input type="password" name="password" className='password-input' id="password-input" value={this.state.password} onChange={this.handlePasswordChange}/>
                            
    
                            <div className="button-div">
                                <input type="submit"  value="Sign up" className='button-submit'/>
                            </div>        
    
                            {/* <div style={{margin: "0 auto"}} className="message">{this.state.message ? <p>{this.state.message}</p> : null}</div> */}             
                        </form>
                    </div>
    
                    <div className='signup-redirect'>
                        Already registered? <a href='/login'>Login</a>
                    </div>
    
                </div>
            </>
        )
    }
}

export default SignUp

/* 
export default function SignUp() {

    const [name, setName] = useState("");
    const [nationality, setNationality] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append("name", name)
        formData.append("nationality", nationality)
        formData.append("email", email)
        formData.append("password", password) 

       
      };


} */