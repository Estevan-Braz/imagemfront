import React, { useEffect, useState } from 'react';
   import axios from 'axios';

   const ListagemUsuario = () => {
     const [usuarios, setUsuarios] = useState([]);

     useEffect(() => {
       const fetchUsers = async () => {
         try {
           const response = await axios.get('http://localhost:8080/api/users');
           setUsuarios(response.data);
         } catch (error) {
           console.error('There was an error fetching the users!', error);
         }
       };

       fetchUsers();
     }, []);

     return (
       <div>
         <h1>Lista de Usuários</h1>
         <ul style={{ listStyleType: 'none', padding: 0 }}>
           {usuarios.map(usuario => (
             <li key={usuario.id} style={{ marginBottom: '20px' }}>
               <img
                 src={`http://localhost:8080/uploads/${usuario.caminhoFoto.split('/').pop()}`}
                 alt={usuario.nome}
                 style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
               />
               <div>
                 <strong>Nome:</strong> {usuario.nome}
               </div>
               <div>
                 <strong>Email:</strong> {usuario.email}
               </div>
             </li>
           ))}
         </ul>
       </div>
     );
   };

   export default ListagemUsuario;