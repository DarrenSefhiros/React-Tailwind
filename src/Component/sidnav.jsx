import React, { useState } from 'react'

function Sidnav() {
    const [open, setOpen] = useState(false);
    return(
        <div className="flex">
            <div className={`fixed top-0 left-0 h-full w-60 bg-gray-800 text-white ${open ? "translate-x-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out
            md:translate-x-0`}>

             <div className="text-2xl font-bold mb-8 text-center">
                Binus
                </div>
                <nav className="space-y-3">
                    <button className="hover:bg-gray-700 text-white font-bold py-1 rounded focus:shadow-outline my-2">
                    <a href="/" className="block mx-20 rounded">Tambah Data</a>
                    </button>
                    <button className="hover:bg-gray-700 text-white font-bold py-1 rounded focus:outline-none focus:shadow-outline my-2">
                    <a href="/Dashboard" className="block mx-20 rounded focus:outline-none">Dashboard</a>
                    </button>
                    <button className="hover:bg-gray-700 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline my-2">
                    <a href="/Tabeldata" className="block mx-20 rounded focus:outline-none">Tabel</a>
                    </button>
                </nav>
                
             </div>
             </div>
    )
}

export default Sidnav