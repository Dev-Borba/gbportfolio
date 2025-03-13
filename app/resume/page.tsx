"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const resumeFileName = "curriculo-gabriel-borba.pdf"
  const resumeFilePath = `/resume/${resumeFileName}`

  // Iniciar download automaticamente quando a página carregar
  useEffect(() => {
    const timer = setTimeout(() => {
      handleDownload()
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleDownload = () => {
    setDownloading(true)

    try {
      const link = document.createElement("a")
      link.href = resumeFilePath
      link.setAttribute("download", resumeFileName)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Mostrar confirmação após download
      setTimeout(() => {
        setDownloading(false)
        setDownloaded(true)
      }, 1500)
    } catch (error) {
      console.error("Erro ao baixar PDF:", error)
      setDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-zinc-800 py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-emerald-500">GB</span>Portfolio
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-zinc-700">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Currículo de Gabriel Borba</h1>
              <p className="text-zinc-300">Seu currículo está pronto para download em formato PDF</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              {downloaded ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6 text-center w-full">
                  <FileText className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-emerald-400 mb-2">Download Concluído!</h2>
                  <p className="text-zinc-300 mb-4">Seu currículo foi baixado com sucesso.</p>
                  <Button onClick={handleDownload} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Novamente
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-6 px-8 text-lg w-full max-w-md flex items-center justify-center gap-2"
                >
                  {downloading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                      Baixando...
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5" />
                      Baixar Currículo
                    </>
                  )}
                </Button>
              )}

              <div className="bg-zinc-900/50 rounded-lg p-6 w-full">
                <h2 className="text-xl font-semibold mb-4 text-emerald-400">Informações do Documento</h2>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start">
                    <span className="font-medium mr-2 min-w-24">Nome:</span>
                    <span className="font-mono bg-zinc-800 px-2 py-1 rounded text-sm">{resumeFileName}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2 min-w-24">Formato:</span>
                    <span>PDF (Portable Document Format)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2 min-w-24">Atualizado:</span>
                    <span>Março 2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2 min-w-24">Conteúdo:</span>
                    <span>
                      Experiência profissional, formação acadêmica, habilidades técnicas e projetos relevantes
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center text-zinc-400 text-sm">
                <p>
                  Se o download não iniciar automaticamente,{" "}
                  <button onClick={handleDownload} className="text-emerald-400 hover:underline focus:outline-none">
                    clique aqui
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-zinc-900/50 border-t border-zinc-800 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} Gabriel Borba. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

