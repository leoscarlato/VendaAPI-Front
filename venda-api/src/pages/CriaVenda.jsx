// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';


// function CriaVenda() {
//   const handleSubmit = (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//     <Stack
//       component="form"
//       sx={{
//         width: '25ch',
//       }}
//       spacing={10}
//       ml={100}

//       justifyContent="flex-end"

//       noValidate
//       autoComplete="off"
//     >
//       <TextField
//         hiddenLabel
//         name = "cpfCliente"
//         id="filled-hidden-label-normal"
//         placeholder='CPF Cliente'
//         variant="outlined"
//       />

//       <TextField
//         hiddenLabel
//         name = "cpfCorretor"
//         id="filled-hidden-label-normal"
//         placeholder="CPF Corretor"
//         variant="outlined"
//       />
//       <TextField
//         hiddenLabel
//         name = "idImovel"
//         id="filled-hidden-label-normal"
//         placeholder="ID Imóvel"
//         variant="outlined"
//       />
//       <button type="submit">Enviar</button>
//     </Stack>
//   </form>
//   );
// }

// export default CriaVenda;


// import React, { useState } from 'react';

// function CriaVenda() {
//   const [dados, setDados] = useState([]);
//   const [formData, setFormData] = useState({
//     cpfCliente: '',
//     cpfCorretor: '',
//     idImovel: '',
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Realize uma solicitação POST para a API
//       const response = await fetch('http://35.88.107.128:8080/vendas', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'token': 'wTbeaPvEZ2hjhaCKWotr'
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Erro na solicitação da API');
//       }

//       // Atualize o estado com a resposta da API, se necessário
//       const data = await response.json();
//       setDados(data);

//     } catch (error) {
//       console.error('Erro ao criar a venda:', error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <h1>Criar Venda:</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>CPF Cliente:</label>
//           <input
//             type="text"
//             name="cpfCliente"
//             value={formData.cpfCliente}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>CPF Corretor:</label>
//           <input
//             type="text"
//             name="cpfCorretor"
//             value={formData.cpfCorretor}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>ID Imóvel:</label>
//           <input
//             type="text"
//             name="idImovel"
//             value={formData.idImovel}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// }

// export default CriaVenda;



import React, { useState } from 'react';
import './CriaVenda.css'; // Importe seu arquivo CSS

function CriaVenda() {
  const [dados, setDados] = useState([]);
  const [formData, setFormData] = useState({
    cpfCliente: '',
    cpfCorretor: '',
    idImovel: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Realize uma solicitação POST para a API
      const response = await fetch('http://35.88.107.128:8080/vendas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': 'nvZPBV5Xu7SKQ8uXdiEJ'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro na solicitação da API');
      }

      // Atualize o estado com a resposta da API, se necessário
      const data = await response.json();
      setDados(data);

    } catch (error) {
      console.error('Erro ao criar a venda:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="cria-venda-container">
      <h1>Criar Venda:</h1>
      <form className="venda-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cpfCliente">CPF Cliente:</label>
          <input
            type="text"
            id="cpfCliente"
            name="cpfCliente"
            value={formData.cpfCliente}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpfCorretor">CPF Corretor:</label>
          <input
            type="text"
            id="cpfCorretor"
            name="cpfCorretor"
            value={formData.cpfCorretor}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="idImovel">ID Imóvel:</label>
          <input
            type="text"
            id="idImovel"
            name="idImovel"
            value={formData.idImovel}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default CriaVenda;
