"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CurriculoFallbackPage() {
  const [isDownloading, setIsDownloading] = useState(false)

  // Nome exato do arquivo PDF
  const pdfFileName = "curriculo-gabriel-borba.pdf"
  const pdfFilePath = `/curriculo/${pdfFileName}`

  const handleDownload = () => {
    setIsDownloading(true)

    try {
      const link = document.createElement("a")
      link.href = pdfFilePath
      link.setAttribute("download", pdfFileName)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Erro ao baixar PDF:", error)
    } finally {
      // Resetar o estado após um breve delay
      setTimeout(() => {
        setIsDownloading(false)
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm border-b border-zinc-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-emerald-500">GB</span>Portfolio
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o portfólio
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-emerald-500" />
            </div>

            <h1 className="text-3xl font-bold mb-4">Currículo de Gabriel Borba</h1>

            <p className="text-zinc-400 mb-8">
              O visualizador de PDF não está disponível no momento. Por favor, baixe o arquivo para visualizá-lo.
            </p>

            <div className="flex flex-col items-center gap-6">
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 px-8 py-6 text-lg w-full max-w-md"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                    Baixando...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Baixar Currículo (PDF)
                  </>
                )}
              </Button>

              <p className="text-sm text-zinc-500">Nome do arquivo: {pdfFileName}</p>

              <div className="mt-4 p-6 bg-zinc-800/50 rounded-lg border border-zinc-700 w-full">
                <h2 className="text-xl font-semibold mb-4 text-emerald-400">Informações do Documento</h2>
                <ul className="space-y-2 text-zinc-300 text-left">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Formato:</span>
                    <span>PDF</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Atualizado:</span>
                    <span>Março 2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Conteúdo:</span>
                    <span>
                      Experiência profissional, formação acadêmica, habilidades técnicas e projetos relevantes
                    </span>
                  </li>
                </ul>
              </div>

              <Link href="/curriculo" className="text-emerald-400 hover:underline">
                Tentar visualizar online novamente
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} GBPortfolio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

