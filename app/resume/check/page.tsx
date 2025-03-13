"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, AlertTriangle, CheckCircle, RefreshCw, Download } from "lucide-react"

export default function CheckResumePDF() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [fileInfo, setFileInfo] = useState<any>(null)
  const [errorDetails, setErrorDetails] = useState<string>("")
  const pdfFileName = "curriculo-gabriel-borba.pdf"
  const pdfFilePath = `/resume/${pdfFileName}`

  const checkPDF = async () => {
    setStatus("loading")
    try {
      // Verificar via API
      const apiResponse = await fetch("/api/check-pdf")
      const apiData = await apiResponse.json()

      if (apiData.success) {
        setStatus("success")
        setFileInfo(apiData.fileInfo)
      } else {
        setStatus("error")
        setErrorDetails(apiData.message)
      }

      // Verificar também via fetch direto
      const directResponse = await fetch(pdfFilePath, {
        method: "HEAD",
        cache: "no-store",
      })

      if (!directResponse.ok && status !== "error") {
        setStatus("error")
        setErrorDetails(`Status HTTP: ${directResponse.status} ${directResponse.statusText}`)
      }
    } catch (error) {
      setStatus("error")
      setErrorDetails(error instanceof Error ? error.message : "Erro desconhecido")
      console.error("Erro ao verificar PDF:", error)
    }
  }

  useEffect(() => {
    checkPDF()
  }, [])

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfFilePath
    link.setAttribute("download", pdfFileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mr-4">
            <FileText className="h-6 w-6 text-emerald-500" />
          </div>
          <h1 className="text-2xl font-bold">Verificação de Arquivo PDF</h1>
        </div>

        {status === "loading" && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500 mb-4"></div>
            <p className="text-zinc-400">Verificando arquivo PDF...</p>
          </div>
        )}

        {status === "success" && (
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <p className="text-green-500 text-xl font-semibold mb-4">O arquivo PDF foi encontrado com sucesso!</p>

            <div className="bg-zinc-800 p-6 rounded-lg mb-6">
              <p className="mb-2">
                <span className="font-medium text-zinc-400">Nome do arquivo:</span>{" "}
                <span className="font-mono bg-zinc-700 px-2 py-1 rounded text-emerald-400">{pdfFileName}</span>
              </p>
              <p className="mb-2">
                <span className="font-medium text-zinc-400">Caminho:</span>{" "}
                <span className="font-mono bg-zinc-700 px-2 py-1 rounded text-emerald-400">{pdfFilePath}</span>
              </p>
              {fileInfo && (
                <>
                  <p className="mb-2">
                    <span className="font-medium text-zinc-400">Tamanho:</span>{" "}
                    <span className="font-mono bg-zinc-700 px-2 py-1 rounded text-emerald-400">
                      {formatFileSize(fileInfo.size)}
                    </span>
                  </p>
                  <p className="mb-2">
                    <span className="font-medium text-zinc-400">Última modificação:</span>{" "}
                    <span className="font-mono bg-zinc-700 px-2 py-1 rounded text-emerald-400">
                      {formatDate(fileInfo.lastModified)}
                    </span>
                  </p>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <a
                href={pdfFilePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-blue-600 rounded hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <FileText className="h-5 w-5 mr-2" />
                Abrir PDF
              </a>

              <Button
                onClick={handleDownload}
                className="bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Baixar PDF
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/resume"
                className="px-4 py-3 bg-purple-600 rounded hover:bg-purple-700 transition-colors flex items-center justify-center"
              >
                Ir para página do currículo
              </Link>

              <Link
                href="/"
                className="px-4 py-3 bg-zinc-600 rounded hover:bg-zinc-700 transition-colors flex items-center justify-center"
              >
                Voltar para o portfólio
              </Link>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-16 w-16 text-red-500" />
            </div>
            <p className="text-red-500 text-xl font-semibold mb-4">Não foi possível encontrar o arquivo PDF!</p>

            <div className="bg-zinc-800 p-6 rounded-lg mb-6">
              <p className="mb-2">
                <span className="font-medium text-zinc-400">Nome do arquivo:</span>{" "}
                <span className="font-mono bg-zinc-700 px-2 py-1 rounded text-red-400">{pdfFileName}</span>
              </p>
              <p className="mb-2">
                <span className="font-medium text-zinc-400">Caminho:</span>{" "}
                <span className="font-mono bg-zinc-700 px-2 py-1 rounded text-red-400">{pdfFilePath}</span>
              </p>
              {errorDetails && (
                <p className="mb-2">
                  <span className="font-medium text-zinc-400">Erro:</span>{" "}
                  <span className="font-mono bg-zinc-700 px-2 py-1 rounded text-red-400">{errorDetails}</span>
                </p>
              )}
            </div>

            <div className="mt-6 space-y-4 text-left bg-zinc-800 p-6 rounded-lg border border-zinc-700 mb-6">
              <h2 className="text-xl font-semibold text-center">Possíveis soluções:</h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Verifique se o arquivo <span className="font-mono bg-zinc-700 px-2 py-1 rounded">{pdfFileName}</span>{" "}
                  existe na pasta <span className="font-mono bg-zinc-700 px-2 py-1 rounded">public/resume/</span>
                </li>
                <li>
                  Certifique-se de que o nome do arquivo está escrito exatamente como{" "}
                  <span className="font-mono bg-zinc-700 px-2 py-1 rounded">{pdfFileName}</span> (incluindo letras
                  maiúsculas/minúsculas)
                </li>
                <li>Verifique se o arquivo não está corrompido</li>
                <li>Reinicie o servidor Next.js</li>
                <li>Limpe o cache do navegador</li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button onClick={checkPDF} className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                <RefreshCw className="h-5 w-5 mr-2" />
                Verificar novamente
              </Button>

              <Link
                href="/pdf-instructions"
                className="px-4 py-3 bg-emerald-600 rounded hover:bg-emerald-700 transition-colors flex items-center justify-center"
              >
                Ver instruções
              </Link>

              <Link
                href="/"
                className="px-4 py-3 bg-zinc-600 rounded hover:bg-zinc-700 transition-colors flex items-center justify-center"
              >
                Voltar para o portfólio
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

