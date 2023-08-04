import { useState, useEffect } from 'react'
import CharacterCard from './Components/CharacterCard'
import Header from './Components/Header'
import './App.css'
import FindCharacter from './Components/FindCharacter'

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
      <Header />

      <FindCharacter />

      {/* Contenido principal a mostrar */}
      <div id='main-content'>
        {/* Selector de pagina */}
        <div className="flex justify-center space-x-4">
          <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full flex items-center justify-center" onClick={prevPage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>


          <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full flex items-center justify-center" onClick={nextPage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>

          </button>
        </div>

        {/*  
          CARDS
          DESAPARECE SI QUIERE BUSCAR PERSONAJES
        */}
        <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-7'>

          {characters.map((dato) => (
            <CharacterCard dato={dato} key={dato.id} />
          ))}

        </div>


      </div>
    </div>
  )
}

export default App
