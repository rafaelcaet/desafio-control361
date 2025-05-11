import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { VehicleProvider } from "@/contexts/VehicleContext"; // ajuste o path conforme necessário

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desafio Control361",
  description: "Tela Desafio Control361",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#001622] antialiased`}>
        <VehicleProvider>
          <Header />
          <main className="pt-16">{children}</main>
        </VehicleProvider>
      </body>
    </html>
  );
}
