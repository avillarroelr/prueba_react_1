import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div>
        <Buscador setSearchTerm={setSearchTerm} />
        <MiApi searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;

