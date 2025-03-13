"use client"

import { useState, useEffect } from "react"
import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface IframePDFViewerProps {
  pdfUrl: string
  fileName: string
}

export default function IframePDFViewer({ pdfUrl, fileName }: IframePDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pdfExists, setPdfExists] = useState<boolean | null>(null)

  // Verificar se o PDF existe
  useEffect(() => {
    async function checkPDF() {
      try {
        const response = await fetch(pdfUrl, { method: "HEAD" })
        setPdfExists(response.ok)
        if (!response.ok) {
          setError(`Não foi possível encontrar o arquivo PDF (${response.status})`)
        }
      } catch (err) {
        console.error("Erro ao verificar PDF:", err)
        setPdfExists(false)
        setError("Erro ao verificar o arquivo PDF")
      }
    }

    checkPDF()
  }, [pdfUrl])

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setError("Não foi possível carregar o PDF no iframe. Tente baixar o arquivo.")
    setIsLoading(false)
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.setAttribute("download", fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const openInNewTab = () => {
    window.open(pdfUrl, "_blank")
  }

  // Se ainda estamos verificando se o PDF existe
  if (pdfExists === null) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border border-zinc-700 rounded-lg bg-zinc-900/50 min-h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500 mb-4"></div>
        <p className="text-zinc-400">Verificando arquivo PDF...</p>
      </div>
    )
  }

  // Se o PDF não existe
  if (pdfExists === false) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border border-zinc-700 rounded-lg bg-zinc-900/50 min-h-[500px]">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h3 className="text-xl font-semibold mb-2">Arquivo PDF não encontrado</h3>
        <p className="text-zinc-400 text-center mb-6">{error || "Não foi possível encontrar o arquivo PDF."}</p>
        <p className="text-zinc-400 text-center mb-6">
          Verifique se o arquivo <code className="bg-zinc-800 px-2 py-1 rounded">{fileName}</code> está na pasta{" "}
          <code className="bg-zinc-800 px-2 py-1 rounded">public/curriculo/</code>
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full">
      {/* Controles do PDF */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
        <Button
          onClick={handleDownload}
          variant="default"
          size="sm"
          className="flex items-center bg-emerald-600 hover:bg-emerald-700"
        >
          <Download className="h-4 w-4 mr-1" />
          Baixar PDF
        </Button>

        <Button onClick={openInNewTab} variant="outline" size="sm" className="flex items-center">
          <ExternalLink className="h-4 w-4 mr-1" />
          Abrir em nova aba
        </Button>
      </div>

      {/* Loader */}
      {isLoading && (
        <div className="flex items-center justify-center p-8 border border-zinc-700 rounded-lg bg-zinc-900/50 min-h-[500px] w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        </div>
      )}

      {/* Error message */}
      {error && !isLoading && (
        <div className="w-full p-4 bg-red-500/10 border border-red-500 rounded-lg mb-4 text-center">
          <p className="text-red-400">{error}</p>
          <p className="text-zinc-400 mt-2">
            Tente{" "}
            <button onClick={openInNewTab} className="text-emerald-400 underline">
              abrir o PDF em uma nova aba
            </button>{" "}
            ou{" "}
            <button onClick={handleDownload} className="text-emerald-400 underline">
              baixar o arquivo
            </button>
            .
          </p>
        </div>
      )}

      {/* PDF Iframe - só mostrar quando não estiver carregando */}
      {!isLoading ? (
        <div
          className="w-full border border-zinc-800 rounded-lg bg-zinc-900 overflow-hidden relative"
          style={{ height: "600px" }}
        >
          <iframe src={pdfUrl} className="w-full h-full" onLoad={handleLoad} onError={handleError} title={fileName} />
        </div>
      ) : null}

      {/* Iframe oculto para pré-carregar e verificar se o PDF pode ser exibido */}
      <iframe src={pdfUrl} className="hidden" onLoad={handleLoad} onError={handleError} title="PDF Preload" />
    </div>
  )
}

