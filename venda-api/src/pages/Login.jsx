import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

   UseEffect(() => {
        fetch('http://localhost:8080/vendas',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => setToken(data.token))
    }
    , [email, password]);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode realizar ações adicionais antes de enviar a solicitação, se necessário.
        // O useEffect será acionado automaticamente devido à mudança em 'email' e 'password'.
    }
    
   
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="text" name="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>

            <div>
                <h2>Token</h2>
                <p>{token}</p>
            </div>
        </div>
    );
}

export default Login;
