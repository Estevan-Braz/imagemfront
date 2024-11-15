import React, { useState } from 'react';
   import axios from 'axios';
import ListagemUsuario from '../ListagemUsuario';

   const CadastroUsuario = () => {
     const [nome, setNome] = useState('');
     const [email, setEmail] = useState('');
     const [senha, setSenha] = useState('');
     const [foto, setFoto] = useState(null);

     const handleSubmit = async (e) => {
       e.preventDefault();
       const formData = new FormData();
       formData.append('nome', nome);
       formData.append('email', email);
       formData.append('senha', senha);
       formData.append('foto', foto);

       try {
         const response = await axios.post('http://localhost:8080/api/users', formData, {
           headers: {
             'Content-Type': 'multipart/form-data',
           },
         });
         console.log(response.data);
       } catch (error) {
         console.error('There was an error!', error);
       }
     };

     return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Nome:</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
            </div>
            <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
            <label>Senha:</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
            </div>
            <div>
            <label>Foto:</label>
            <input type="file" onChange={(e) => setFoto(e.target.files[0])} required />
            </div>
            <button type="submit">Cadastrar</button>
        </form>

        <ListagemUsuario />
       </>
     );
   };

   export default CadastroUsuario;