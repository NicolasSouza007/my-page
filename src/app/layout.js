import "@/style/global.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";


export default function RootLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
         
                <html lang="pt-BR">
                    <body>
                        <Header />  {/* Mantém aqui se for um Server Component */}
                        {/*  Exibe o conteúdo dinâmico aqui */}
                        {/* Mantém aqui se for um Server Component */}
                        <div className="min-h-screen flex flex-col">
                            <main className="flex-grow">{children}</main>
                            <Footer />
                        </div>   
                    </body>
                    
                </html>
        </div>
    );
}
