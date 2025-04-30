import Banner from "@/components/Banner/banner2";


export default function Cadastro() {
    return (

        <div>
            <Banner />

            <div className="flex justify-center flex-wrap gap-6 p-12">
                <a href="/Cadastro_Produtos" className='border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white '>Cadastro de Produto</a>
                <a href="/Financeiro" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">Cadastro de Pessoa Física</a>
                <a href="/page4" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">Cadastro de Pessoa Juridica</a>
                <a href="/page5" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">Cadastro de contas a Pagar</a>
                <a href="/page6" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">Cadastro de conta a receber</a>    
            </div>

        </div>
        
    );
}