import React, { useState } from 'react';
import axios from 'axios'; 

function Login(props) {

    const [credentials, setCredentials] = useState({ username:'', password:'' });

    const handleChange = event => {
        setCredentials({ ...credentials,
                [event.target.name]: event.target.value
            })
            //console.log(credentials); 
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                props.history.push('/friends');
            })
            // .then(response => console.log(response))
            .catch(error => {
                console.log(credentials); 
                console.log(error.response);
            })
            setCredentials({ username:'', password:'' })
    }   

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Username'
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input 
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login;