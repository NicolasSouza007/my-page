import Banner from "@/components/Banner/banner2";

export default function Cadastro() {
  return (
    <div>
      <Banner />

      <div className="flex justify-center flex-wrap gap-6 p-12">
        <a
          href="/pages/Estoque/Entrada_Estoque"
          className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-[#C77DFF] hover:text-white "
        >
          Entrada de Estoque
        </a>
        <a
          href="/pages/Cadastros/Cadastro_SP"
          className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-[#C77DFF] hover:text-white"
        >
          Entrada de Estoque com Nota Fiscal
        </a>
        <a
          href="/pages/Cadastros/Cadastro_PF"
          className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-[#C77DFF] hover:text-white"
        >
          Saida de Estoque
        </a>
      </div>
    </div>
  );
}
