"use client";

import { useState } from "react";

const Banner = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (searchQuery.trim() !== "") {
            console.log(`Pesquisando por: ${searchQuery}`);
        }
    };

    console.log("Banner renderizado");

    return (
        <div className="bg-[#709ac9] p-4 text-white py-[15px] px-[60px] text-center">
            <h1 className="text-3xl font-bold">Central de Ajuda</h1>
            <h2 className="text-lg mt-2">Encontre as informações que você precisa.</h2>

            {/* Caixa de pesquisa centralizada */}
            <div className="mt-4 flex justify-center items-center">
                <input
                    id="search"
                    className="px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
                    type="text"
                    placeholder="Pesquise aqui"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            
            </div>
        </div>
    );
};

export default Banner;
