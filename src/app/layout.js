import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blog Website",
  description: "Completed by Shaily Sarker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="lg:px-20 md:px-12 px-5 bg-slate-200">
      <Header />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>

      <Footer />
    </html>
  );
}
