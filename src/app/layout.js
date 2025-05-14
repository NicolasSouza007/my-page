import "../style/global.css"; // ajuste se for 'styles/global.css'

import Header from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={nunito.variable}> {/* <-- Aqui está o ajuste! */}
      <body className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

