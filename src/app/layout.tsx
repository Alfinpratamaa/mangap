import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Script from "next/script";
import { getKeywords } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const keywords = await getKeywords();

  return {
    title: 'mangapp',
    description: 'Mangapp adalah tempat terbaik untuk membaca komik manga, manhwa, dan manhua dalam bahasa Indonesia. Nikmati koleksi lengkap komik terbaru dan terpopuler seperti Naruto, Jujutsu Kaisen, Solo Leveling, dan banyak lagi. Baca komik online gratis dengan kualitas gambar terbaik dan update terbaru setiap hari. Temukan berbagai genre menarik dari aksi, petualangan, fantasi, hingga romantis hanya di Mangap. Dapatkan pengalaman membaca komik yang mudah dan menyenangkan hanya dengan beberapa klik. Bergabunglah dengan komunitas pembaca komik terbesar di Indonesia dan selalu update dengan komik favorit Anda.',
    keywords: keywords.join(', '),
    openGraph: {
      type: 'website',
      url: 'https://mangapp.me',
      countryName: 'Indonesia',
      description: 'Mangapp adalah tempat terbaik untuk membaca komik manga, manhwa, dan manhua dalam bahasa Indonesia. Nikmati koleksi lengkap komik terbaru dan terpopuler seperti Naruto, Jujutsu Kaisen, Solo Leveling, dan banyak lagi. Baca komik online gratis dengan kualitas gambar terbaik dan update terbaru setiap hari. Temukan berbagai genre menarik dari aksi, petualangan, fantasi, hingga romantis hanya di Mangap. Dapatkan pengalaman membaca komik yang mudah dan menyenangkan hanya dengan beberapa klik. Bergabunglah dengan komunitas pembaca komik terbesar di Indonesia dan selalu update dengan komik favorit Anda.',
      title: 'Mangapp',
      siteName: 'Mangapp',
      alternateLocale: 'id_ID',
    },
    authors: [{
      name: 'mangapp',
      url: 'https://mangapp.me'
    }],
    icons: {
      icon: '/favicon.ico',
    }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const url = `${process.env.API_URL}/popular`;
  return (
    <html lang="en">
      <head>
        <Script
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`} // Replace with your ID
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-8843731517333453" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <div className="">

            <Navbar />
          </div>
          <div className="flex flex-col lg:flex-row p-5">
            <main className="flex-1 min-h-screen">
              {children}
            </main>

          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
