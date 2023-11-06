// create listing page
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Listagem(){

    fetch('http://localhost:8080/vendas',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    .then(response => response.json())
    .then(data => console.log(data))


    return (
        <div>
            <h1>Lista de Vendas</h1>
        </div>
    );
}

export default Listagem;