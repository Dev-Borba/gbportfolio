import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gabriel Borba - Desenvolvedor Full Stack",
  description: "Portfólio pessoal de Gabriel Borba, desenvolvedor full stack especializado em criar experiências digitais excepcionais.",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}