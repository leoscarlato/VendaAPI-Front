import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


function CriaVenda() {
  const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  };
  return (
    <form onSubmit={handleSubmit}>
    <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={10}
      ml={100}

      justifyContent="flex-end"

      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        name = "cpfCliente"
        id="filled-hidden-label-normal"
        placeholder='CPF Cliente'
        variant="outlined"
      />

      <TextField
        hiddenLabel
        name = "cpfCorretor"
        id="filled-hidden-label-normal"
        placeholder="CPF Corretor"
        variant="outlined"
      />
      <TextField
        hiddenLabel
        name = "idImovel"
        id="filled-hidden-label-normal"
        placeholder="ID Imóvel"
        variant="outlined"
      />
      <button type="submit">Enviar</button>
    </Stack>
  </form>
  );
}

export default CriaVenda;