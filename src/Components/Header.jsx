import React from 'react'
import ButtonComponent from './FindCharacter'

function Header() {
    return (
        <div className='flex items-center justify-center '>
            <a href="">
                <img
                    src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
                    alt="Rick and Morty"
                    className='w-96 transform transition-transform hover:scale-105'
                />
            </a>
        </div>
    )
}

export default Header