import { Merienda, Josefin_Sans } from "next/font/google";
import "./globals.css";

const merienda = Merienda({ subsets: ["latin"] });
const josefin = Josefin_Sans({ subsets : ["latin"] })

export const metadata = {
  title: "Sam et Jaja",
  description: "Samantha et François se marient le 8 juin 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
