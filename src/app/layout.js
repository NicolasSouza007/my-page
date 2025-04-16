import "../style/global.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";


export default function RootLayout({ children }) {
    return (
        
                
                <html lang="pt-BR">
                        <body className="flex flex-col min-h-screen">
                            <Header />  
                                <main className="flex-grow">{children}</main>
                            <Footer />
                        </body>
                </html>
        
    );
}
