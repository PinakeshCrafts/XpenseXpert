import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import './signup.css';

function Signup() {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
            const url = `http://localhost:8080/auth/signup`;;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <div className='signup-container'>
            <div className='signup-card'>
                <h1 className='signup-title'>Create Account</h1>
                <form onSubmit={handleSignup} className='signup-form'>
                    <div className='form-group'>
                        <label htmlFor='name'>Full Name</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            id='name'
                            name='name'
                            autoFocus
                            placeholder='Your full name'
                            value={signupInfo.name}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={handleChange}
                            type='email'
                            id='email'
                            name='email'
                            placeholder='you@example.com'
                            value={signupInfo.email}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={handleChange}
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Min. 6 characters'
                            value={signupInfo.password}
                        />
                    </div>
                    <button type='submit' className='signup-button'>Create Account</button>
                </form>
                <div className='login-link'>
                    Already have an account? 
                    <Link to="/login"> Sign in</Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Signup
