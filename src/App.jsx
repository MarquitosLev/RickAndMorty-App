import { useState, useEffect } from 'react'
import CharacterCard from './Components/CharacterCard'
import './App.css'

function App() {

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  function getApi(page = 1) {
    fetch("https://rickandmortyapi.com/api/character/?page=" + page)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setCharacters(data.results);
        setCurrentPage(page);
      })
      .catch((error) => console.log(error));
  }

  function prevPage() {
    if (currentPage > 1) {
      getApi(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < 42) {
      getApi(currentPage + 1);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className='bg-green-300'>

      {/* Header */}
      <div className='flex items-center justify-center '>

        <img
          src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
          alt="Rick and Morty"
          className='w-80 transform transition-transform hover:scale-105'
        />

      </div>

      {/* Selector de pagina */}
      <div className='flex justify-center gap-40'>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md'
          onClick={prevPage}
        >
          Previus
        </button>

        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md'
          onClick={nextPage}
        >
          Next
        </button>
      </div>



      {/* Cards */}
      <div className='grid grid-cols-3 gap-4 p-7'>

        {characters.map((dato) => (
          <CharacterCard dato={dato} key={dato.id} />
        ))}

      </div >

    </div>
  )
}

export default App
