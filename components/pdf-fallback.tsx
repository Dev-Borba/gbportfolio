"use client"

import { Download, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PDFFallbackProps {
  pdfUrl: string
  fileName: string
  errorMessage?: string
}

export default function PDFFallback({ pdfUrl, fileName, errorMessage }: PDFFallbackProps) {
  function handleDownload() {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.setAttribute("download", fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 border border-zinc-700 rounded-lg bg-zinc-900/50">
      <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />

      <h3 className="text-xl font-semibold mb-2">Visualização não disponível</h3>

      <p className="text-zinc-400 text-center mb-6 max-w-md">
        {errorMessage || "Não foi possível carregar a visualização do PDF. Você ainda pode baixar o arquivo."}
      </p>

      <Button onClick={handleDownload} className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300">
        <Download className="mr-2 h-5 w-5" />
        Baixar PDF
      </Button>
    </div>
  )
}

