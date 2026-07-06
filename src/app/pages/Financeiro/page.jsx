import Banner from "@/components/Banner/banner2";

export default function Page3() {
  return (
    <div>
      <Banner />

      <div className="flex justify-center flex-wrap gap-6 p-12">
        <a
          href="/pages/Financeiro/ContaPagar"
          className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-[#C77DFF] hover:text-white "
        >
          Cadastrando uma conta a pagar
        </a>
        <a
          href="/pages/Financeiro/ContaReceber"
          className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-[#C77DFF] hover:text-white"
        >
          Cadastrando uma conta a receber
        </a>
        <a
          href="/pages/Financeiro/Crediario"
          className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-[#C77DFF] hover:text-white"
        >
          Como fazer uma venda no Crédiário
        </a>
      </div>
    </div>
  );
}
