import { Montserrat } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
