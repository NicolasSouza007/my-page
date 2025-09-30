import Banner from "@/components/Banner/banner2";


export default function Page3() {
    return (

        <div>
            <Banner />

            <div className="flex justify-center flex-wrap gap-6 p-12">
                <a href="/Cadastros" className='border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white '>Cadastro de Conta a Pagar</a>
                <a href="/Financeiro" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">Cadastro de Conta a Receber</a>
                <a href="/page4" className="border-2 border-black rounded-xl px-10 py-4 w-72 text-center text-black no-underline transition-all duration-300 hover:bg-blue-600 hover:text-white">Como Cadastrar um Crediário</a>
                    
            </div>

        </div>
        
    );
}