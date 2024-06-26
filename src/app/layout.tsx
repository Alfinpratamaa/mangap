import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import PopularList from "@/components/PopularList";
import Footer from "@/components/Footer";
import Script from "next/script";
import { keywords } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mangapp",
  description: "Mangap adalah tempat terbaik untuk membaca komik manga, manhwa, dan manhua dalam bahasa Indonesia. Nikmati koleksi lengkap komik terbaru dan terpopuler seperti Naruto, Jujutsu Kaisen, Solo Leveling, dan banyak lagi. Baca komik online gratis dengan kualitas gambar terbaik dan update terbaru setiap hari. Temukan berbagai genre menarik dari aksi, petualangan, fantasi, hingga romantis hanya di Mangap. Dapatkan pengalaman membaca komik yang mudah dan menyenangkan hanya dengan beberapa klik. Bergabunglah dengan komunitas pembaca komik terbesar di Indonesia dan selalu update dengan komik favorit Anda.",
  keywords: keywords,
};

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
        <meta name="description" content={metadata.description || ''} />
        <meta property="og:title" content={metadata.title?.toString() || ''} />
        <meta property="og:description" content={metadata.description || ''} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
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
            <aside className="hidden lg:block lg:w-1/4 mr-4">
              <PopularList url={url} />
            </aside>
          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
