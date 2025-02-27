import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
      <footer className="bg-[#06265d] text-white text-center p-4 w-full mt-auto">
        <div className="flex justify-around flex-wrap items-center">
          {/* Setor Comercial */}
          <div className="flex flex-col items-center max-w-xs">
            <p className="mb-3 text-lg font-semibold">SETOR COMERCIAL</p>
            <a
              href="https://api.whatsapp.com/send/?phone=11935056614&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/whats.png"
                alt="WhatsApp"
                className="w-[40px] h-[40px] transition-transform duration-200 ease-in hover:scale-110 p-1"
              />
            </a>
          </div>
  
          {/* Redes Sociais */}
          <div className="flex flex-col items-center max-w-xs">
            <p className="mb-3 text-lg font-semibold">CONHEÇA NOSSAS REDES SOCIAIS</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/grupopowerinformatica/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/Instagram.png"
                  alt="Instagram"
                  className="w-[40px] h-[40px] transition-transform duration-200 ease-in hover:scale-110 p-1"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=1146780655&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/whats.png"
                  alt="WhatsApp"
                  className="w-[40px] h-[40px] transition-transform duration-200 ease-in hover:scale-110 p-1"
                />
              </a>
              <a href="https://pinformatica.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="/img/WhatsApp_Image_2025-02-03_at_13.26.47-removebg-preview.png"
                  alt="Site"
                  className="w-[40px] h-[40px] transition-transform duration-200 ease-in hover:scale-110 p-1"
                />
              </a>
              <a href="https://www.youtube.com/@pwpsys" target="_blank" rel="noopener noreferrer">
                <img
                  src="/img/youtube.png"
                  alt="YouTube"
                  className="w-[40px] h-[40px] transition-transform duration-200 ease-in hover:scale-110 p-1"
                />
              </a>
            </div>
          </div>
  
          {/* Setor Financeiro */}
          <div className="flex flex-col items-center max-w-xs">
            <p className="mb-3 text-lg font-semibold">SETOR FINANCEIRO</p>
            <a
              href="https://api.whatsapp.com/send/?phone=11940234777&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/whats.png"
                alt="WhatsApp"
                className="w-[40px] h-[40px] transition-transform duration-200 ease-in hover:scale-110 p-1"
              />
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  
