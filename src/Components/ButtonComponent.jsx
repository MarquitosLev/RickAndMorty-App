// ButtonComponent.js
import React, { useState } from 'react';
import Search from './Search';

function showDiv() {
    let div = document.getElementById("main-content")
    div.style.display = "none"
}

const ButtonComponent = () => {
    const [showAdditional, setShowAdditional] = useState(false);

    const handleButtonClick = () => {
        // Aca se muestra el componente busqueda
        setShowAdditional(true);
        //Ocultamiento del contenido principal
        showDiv()
    };

    return (
        <div className='flex justify-center'>
            {!showAdditional ? (
                <button
                    onClick={handleButtonClick}
                    className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </button>
            ) : null}

            {showAdditional && <Search />}
        </div>
    );
};

export default ButtonComponent;
