import "@/style/global.css";
import Header from "@/components/Header/header";
import Banner from "@/components/Banner/banner2";

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />  {/* Mantém aqui se for um Server Component */}
                {children}  {/* Exibe o conteúdo dinâmico aqui */}
                <Banner />  Mantém aqui se for um Server Component
            </body>
        </html>
    );
}
