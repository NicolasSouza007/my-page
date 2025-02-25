import "@/style/global.css";
import Header from "@/components/Header/header";
// import Banner from "@/components/Banner/Banner2";


export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />  {/* Mantém aqui se for um Server Component */}
                {children}

                {/* <Banner /> */}

            </body>
        </html>
    );
}
