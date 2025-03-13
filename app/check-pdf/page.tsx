"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, AlertTriangle, CheckCircle, RefreshCw } from "lucide-react"

export default function CheckPDF() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [errorDetails, setErrorDetails] = useState<string>("")
  // Atualizar o caminho do PDF
  const pdfFileName = "curriculo-gabriel-borba.pdf"
  const pdfFilePath = `/resume/${pdfFileName}` // Updated from /curriculo to /resume

  const checkPDF = async () => {
    setStatus("loading")
    try {
      const response = await fetch(pdfFilePath, {
        method: "HEAD",
        cache: "no-store", // Evitar cache para obter o status real
      })

      if (response.ok) {
        setStatus("success")
      } else {
        setStatus("error")
        setErrorDetails(`Status: ${response.status} ${response.statusText}`)
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

              <a
                href={pdfFilePath}
                download={pdfFileName}
                className="px-4 py-3 bg-green-600 rounded hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <FileText className="h-5 w-5 mr-2" />
                Baixar PDF
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/curriculo"
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

