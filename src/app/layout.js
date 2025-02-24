import "@/style/global.css";
import Header from "@/components/Header/header";

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />  {/* Mantém aqui se for um Server Component */}
                {children}

            </body>
        </html>
    );
}
