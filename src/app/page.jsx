import Banner from "@/components/Banner/banner2";

export default function Page() {

    return (
        <div>
            <Banner />
            <div className="flex justify-center flex-wrap gap-6 p-12">
                {/* Corrigindo o link para a página de cadastro de produtos */}
                <a href="/Cadastros" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">
                    Cadastros
                </a>
                <a href="/Financeiro" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">
                    Financeiro
                </a>
                <a href="/page4" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">
                    Estoque
                </a>
                <a href="/page5" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">
                    Dados da Empresa
                </a>
                <a href="/page6" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">
                    Faturamento
                </a>
                <a href="/page7" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">
                    Arquivos Fiscais
                </a>
            </div>
        </div>
    );
}
