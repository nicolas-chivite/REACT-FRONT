import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const monserrat = Montserrat({
  subsets: ["latin"],
  variable : "--font-montserrat",
});

export const metadata = {
  title: "Annuaire EMISA",
  description: "Développé par les DWWM 2024/2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monserrat.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
