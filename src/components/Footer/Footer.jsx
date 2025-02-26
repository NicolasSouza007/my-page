import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#06265D] w-full mt-auto text-white py-4 text-center">
            <p>© {new Date().getFullYear()} Seu Site. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;

