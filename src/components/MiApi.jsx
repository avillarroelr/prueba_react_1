import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MiApi = ({ searchTerm = '' }) => {
    const [animals, setAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
  
    useEffect(() => {
      const fetchAnimals = async () => {
        try {
          const response = await fetch('https://huachitos.cl/api/animales');
          const data = await response.json();
          setAnimals(data.data);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
  
      fetchAnimals();
    }, []);
  
    useEffect(() => {
        const results = animals.filter(animal =>
            animal.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            animal.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            animal.genero.toLowerCase().includes(searchTerm.toLowerCase()) ||
            animal.edad.toString().includes(searchTerm) ||
            animal.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
            animal.comuna.toLowerCase().includes(searchTerm.toLowerCase())
          );
      setFilteredAnimals(results);
    }, [searchTerm, animals]);
  
    return (
      <div className='tablaMascotas'>
        <table className='table table-hover table-responsive thead-dark'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Especie</th>
              <th>Edad</th>
              <th>Genero</th>
              <th>Esterilizado</th>
              <th>Vacunas</th>
              <th>Región</th>
              <th>Comuna</th>
              <th>Imagen</th>
              <th>Ficha</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnimals.map((animal) => (
              <tr key={animal.id}>
                <td>{animal.nombre}</td>
                <td>{animal.tipo}</td>
                <td>{animal.edad}</td>
                <td>{animal.genero}</td>
                <td>{animal.esterilizado === 1 ? 'SI' : 'NO'}</td>
                <td>{animal.vacunas === 1 ? 'SI' : 'NO' }</td>
                <td>{animal.region}</td>
                <td>{animal.comuna}</td>
                <td>
                  <img src={animal.imagen} alt={animal.nombre} style={{ width: '100px' }} />
                </td>
                <td><a href={animal.url} target="_blank" rel="noopener noreferrer"><button className='btn btn-outline-info'>+</button></a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default MiApi;