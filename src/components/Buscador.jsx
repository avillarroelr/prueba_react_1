import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Buscador = ({ setSearchTerm }) => {
    return (
      <div className='headerBuscador'>
        <h1>Adopta a un Amigo</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  }
  
  export default Buscador;