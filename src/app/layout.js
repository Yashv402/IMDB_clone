import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "@/app/Provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Movie data base clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header/>
          <Navbar/>
          {children}
        </Provider>
        
        </body>
    </html>
  );
}
