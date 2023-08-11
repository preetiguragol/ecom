import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './NavBar';
import './Login.css';
const Login = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            window.alert('Enter Valid Username and password')
        });
       
      
        
       
    }

  return (
    <div className='page'>
       <div className='cover'>
        
       <form>                                              
            <div>
                <h1 className='sign-up'>LOGIN</h1>
                 <label htmlFor="Email-address">
                     Email address
                </label>
                        <input className='style-input'
                         id="email-address"
                         name="email"
                        type="email"                                    
                        required                                                                                
                        placeholder="Email address"
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        </div>

                        <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input className='style-input'
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                        />
                        </div>
                                                
                        <div>
                        <button  className='styling-button'                                   
                            onClick={onLogin}                                        
                        > Login </button>
                                
                    </div>                               
                        </form>
                        <p >
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
       </div>
    </div>
  )
}

export default Login