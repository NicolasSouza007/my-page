import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-[#06265D] w-full">
            <div className="flex justify-between items-center py-4 max-w-screen-xl w-full mx-auto px-0">
                {/* Logo no canto esquerdo */}
                <div className="w-20 ml-0"> 
                    <Image src="/Logo1.png" width={80} height={50} alt="Logo" priority className="w-full h-auto" />
                </div>

                {/* Menu no canto direito */}
                <nav className="flex gap-6 text-white text-sm mr-6">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">Tópicos</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
