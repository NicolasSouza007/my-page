import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#240046] w-full h-24">
      <div className="flex justify-between items-center py-6 max-w-screen-xl mx-auto px-4">
        {/* Logo no canto esquerdo com link para a página inicial */}
        <div className="relative w-20 h-12">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Logo"
              fill
              priority
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Menu no canto direito */}
        <nav className="flex gap-6 text-white text-sm mr-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/topics" className="hover:text-gray-300">
            Tópicos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
