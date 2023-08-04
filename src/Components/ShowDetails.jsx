function ShowDetails({ dato, abrirModal }) {
    return (
        <>
            {/* Capa de fondo desenfocada */}
            <div
                className="fixed inset-0 z-40 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm"
                onClick={abrirModal}
            />

            {/* Modal */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-md z-50 border border-black">
                <div className='grid sm:grid-cols-1 gap-3 font-pangolin text-xl'>
                    <img src={dato.image} alt={dato.name} className="w-full h-auto object-cover rounded-lg border border-black" />
                    <div className='flex flex-col gap-3 pt-1'>
                        <h1 className='font-bold text-center text-2xl'>{dato.name}</h1>
                        <p>Species: {dato.species}</p>
                        <p>Gender: {dato.gender}</p>
                        <p>Origin: {dato.origin.name}</p>
                        <p>Actual Location: {dato.location.name}</p>
                        <p>Status: {dato.status}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowDetails