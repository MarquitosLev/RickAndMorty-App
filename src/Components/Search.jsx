import React, { useState } from 'react'
import axios from 'axios';
import CharacterCard from './CharacterCard'

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
            setResults(response.data.results); // La API devuelve un arreglo de resultados dentro de 'results'
        } catch (error) {
            console.error('Error al realizar la búsqueda:', error);
        }
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        // Realizar búsqueda solo si el campo de búsqueda no está vacío
        if (e.target.value.trim() !== '') {
            handleSearch();
        } else {
            setResults([]); // Si el campo de búsqueda está vacío, reiniciar los resultados
        }
    };


    return (
        <div className="p-7">
            <div className='flex justify-center'>
                <input
                    type="text"
                    placeholder='Buscar personaje'
                    value={searchTerm}
                    onChange={handleChange}
                    className="rounded-md p-2 mb-4 "
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
                {results.map((character) => (
                    <CharacterCard dato={character} key={character.id} />
                ))}
            </div>
        </div>

    )
}

export default Search