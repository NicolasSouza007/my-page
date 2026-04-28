import Banner from "@/components/Banner/banner2";

import {
  FaRegFolder,
  FaRegMoneyBillAlt,
  FaBoxes,
  FaBuilding,
  FaFileInvoiceDollar,
  FaFileAlt,
} from "react-icons/fa";

export default function Page() {
  return (
    <div>
      <Banner />

      <div className="flex justify-center flex-wrap gap-10 p-12">
        {/* Cadastros */}
        <a
          href="/pages/Cadastros"
          className="border-2 border-black rounded-xl p-6 w-72 text-black no-underline 
                     flex items-center gap-4 hover:bg-blue-600 hover:text-white 
                     transition-all duration-300 "
        >
          <FaRegFolder size={32} className="min-w-[32px]" />
          <span className="text-lg font-medium ml-9">Cadastros</span>
        </a>

        {/* Financeiro */}
        <a
          href="/pages/Financeiro"
          className="border-2 border-black rounded-xl p-6 w-72 text-black no-underline 
                     flex items-center gap-4 hover:bg-blue-600 hover:text-white 
                     transition-all duration-300"
        >
          <FaRegMoneyBillAlt size={32} className="min-w-[32px]" />
          <span className="text-lg font-medium ml-9">Financeiro</span>
        </a>

        {/* Estoque */}
        <a
          href="/pages/Estoque"
          className="border-2 border-black rounded-xl p-6 w-72 text-black no-underline 
                     flex items-center gap-4 hover:bg-blue-600 hover:text-white 
                     transition-all duration-300"
        >
          <FaBoxes size={32} className="min-w-[32px]" />
          <span className="text-lg font-medium ml-11">Estoque</span>
        </a>

        {/* Dados da Empresa */}
        <a
          href="/page5"
          className="border-2 border-black rounded-xl p-6 w-72 text-black no-underline 
                     flex items-center gap-4 hover:bg-blue-600 hover:text-white 
                     transition-all duration-300"
        >
          <FaBuilding size={32} className="min-w-[32px]" />
          <span className="text-lg font-medium ml-6">Dados da Empresa</span>
        </a>

        {/* Faturamento */}
        <a
          href="/page6"
          className="border-2 border-black rounded-xl p-6 w-72 text-black no-underline 
                     flex items-center gap-4 hover:bg-blue-600 hover:text-white 
                     transition-all duration-300"
        >
          <FaFileInvoiceDollar size={32} className="min-w-[32px]" />
          <span className="text-lg font-medium ml-8">Faturamento</span>
        </a>

        {/* Arquivos Fiscais */}
        <a
          href="/page7"
          className="border-2 border-black rounded-xl p-6 w-72 text-black no-underline 
                     flex items-center gap-4 hover:bg-blue-600 hover:text-white 
                     transition-all duration-300"
        >
          <FaFileAlt size={32} className="min-w-[32px]" />
          <span className="text-lg font-medium ml-6">Arquivos Fiscais</span>
        </a>
      </div>
    </div>
  );
}
