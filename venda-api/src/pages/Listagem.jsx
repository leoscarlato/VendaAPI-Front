import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Listagem.css';

function Listagem() {
    // 1. Criar um estado para armazenar os dados
    const [dados, setDados] = useState([]);

    // 2. Mover a chamada da API para dentro do useEffect
    useEffect(() => {
        fetch('http://35.88.107.128:8080/vendas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': 'nvZPBV5Xu7SKQ8uXdiEJ'
            }
        })
        .then(response => response.json())
        .then(data => {
            // 3. Atualizar o estado com os dados recebidos
            setDados(data);
        })
        .catch(error => console.error('Erro ao buscar os dados:', error));
    }, []); // O array vazio como dependência significa que o useEffect será executado apenas uma vez, quando o componente for montado

    return (
        <div>
            <div className="header">
                <h1>Listagem de Vendas</h1>
            </div>

            <table>
                <thead className='labels'>
                    <tr>
                        <th>ID</th>
                        <th>Identificador do Imóvel</th>
                        <th>CPF do Cliente</th>
                        <th>CPF do Corretor</th>
                        <th>Status da Venda</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.imovelIdentifier}</td>
                            <td>{item.cpfCliente}</td>
                            <td>{item.cpfCorretor}</td>
                            <td>{item.vendaStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Listagem;
