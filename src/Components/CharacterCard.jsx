import React, { useEffect, useState } from 'react'
import ShowDetails from './ShowDetails'

function CharacterCard({ dato }) {

    const [abierto, setAbierto] = useState(false);

    const abrirModal = () => {
        setAbierto(!abierto);
    };

    // Scroll AVERIGUAR LUEGO
    useEffect(() => {
        // Aplicar el estilo al abrir el modal
        if (abierto) {
            document.body.style.overflow = 'hidden';
        } else {
            // Restaurar el estilo al cerrar el modal
            document.body.style.overflow = 'unset';
        }

        // Limpiar el efecto al desmontar el componente
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [abierto]);

    return (
        <>
            <div className="p-2 ">
                <div className="bg-blue-500 text-white rounded-md font-pangolin text-xl transform transition-transform hover:scale-105">
                    <a onClick={abrirModal}>
                        <h2 className="text-center p-1 font-bold">{dato.name}</h2>
                        <p className="text-center">{dato.species}</p>
                        <img src={dato.image} alt={dato.name} className="w-full h-auto object-cover rounded-md" />
                    </a>
                </div>
            </div>

            {/* Si Abierto es true, se renderiza ShowDetails */}
            {abierto && (
                <>
                    <ShowDetails dato={dato} abrirModal={abrirModal}/>
                </>
            )}
        </>

    )
}

export default CharacterCard    