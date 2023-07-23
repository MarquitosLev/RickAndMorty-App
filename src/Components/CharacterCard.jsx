import React from 'react'

function CharacterCard({ dato }) {
    return (
        <div className="p-2 transform transition-transform hover:scale-105">
            <div className="bg-blue-500 text-white rounded-md font-pangolin text-xl">
                <h2 className="text-center p-1 font-bold">{dato.name}</h2>
                <p className="text-center">{dato.species}</p>
                <img src={dato.image} alt={dato.name} className="w-full h-auto object-cover rounded-md" />
            </div>
        </div>

    )
}

export default CharacterCard    