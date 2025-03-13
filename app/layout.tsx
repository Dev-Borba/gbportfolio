import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gabriel Borba - Desenvolvedor Full Stack",
  description: "Portfólio de Gabriel Borba - Desenvolvedor Full Stack especializado em criar experiências digitais excepcionais",
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-black`}>
        {children}
      </body>
    </html>
  )
}