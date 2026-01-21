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
    <div className="bg-[#676eaF] p-4 text-black py-[15px] px-[60px] text-center">
      <h1 className="text-5xl font-bold text-white">Central de Ajuda</h1>
      <h2 className="text-lg mt-4 text-white">
        Encontre as informações que você precisa.
      </h2>

      {/* Caixa de pesquisa centralizada */}
      <div className="mt-4 flex justify-center items-center ">
        <input
          id="search"
          className="px-4 py-2 text-black  rounded-lg border border-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-400 w-[700px] text-center"
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
