"use client"

import { useState } from "react"
import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SimplePDFViewerProps {
  pdfUrl: string
  fileName: string
}

export default function SimplePDFViewer({ pdfUrl, fileName }: SimplePDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="w-full p-4 bg-red-500/10 border border-red-500 rounded-lg mb-4 text-center">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {/* PDF Iframe */}
      <div
        className="w-full border border-zinc-800 rounded-lg bg-zinc-900 overflow-hidden relative"
        style={{ height: "600px" }}
      >
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0`}
          className="w-full h-full"
          onLoad={handleLoad}
          onError={handleError}
          title={fileName}
        />
      </div>
    </div>
  )
}

