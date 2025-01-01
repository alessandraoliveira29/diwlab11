import './globals.css'; 
import Link from 'next/link';
import Header from '@/components/Header/Header'; 
import Footer from '@/components/Footer/Footer'; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <nav className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-center gap-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/produtos" className="hover:underline">Produtos</Link>
            <Link href="/tecnologias" className="hover:underline">Tecnologias</Link>
          </div>
        </nav>
        <Header /> 
        <main>{children}</main> 
        <Footer /> 
      </body>
    </html>
  );
}
