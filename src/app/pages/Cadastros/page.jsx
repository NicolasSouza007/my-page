import Banner from "@/components/Banner/banner2";

export default function Cadastro() {
  return (
    <div>
      <Banner />

      <div className="flex justify-center flex-wrap gap-6 p-12">
        <a
          href="/pages/Cadastros/Cadastro_Produtos"
          className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white "
        >
          Cadastro de Produto
        </a>
        <a
          href="/pages/Cadastros/Cadastro_PJ"
          className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          Cadastro de Pessoa Simples
        </a>
        <a
          href="/pages/Cadastros/Cadastro_PF"
          className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          Cadastro de Pessoa Física
        </a>
        <a
          href="/pages/Cadastros/Cadastro_PJ"
          className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          Cadastro de Pessoa Juridica
        </a>
      </div>
    </div>
  );
}
