import React from 'react'
import ButtonComponent from './ButtonComponent'

function Header() {
    return (
        <div className='flex items-center justify-center '>
            <img
                src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
                alt="Rick and Morty"
                className='w-80 transform transition-transform hover:scale-105'
            />
        </div>
    )
}

export default Header