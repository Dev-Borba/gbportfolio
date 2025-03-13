"use client"

import { useState, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

// Configuração do worker do PDF.js
// Usando uma versão específica que sabemos que existe no unpkg
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`

interface PDFViewerProps {
  pdfUrl: string
  fileName?: string
}

export default function PDFViewer({ pdfUrl, fileName = "document.pdf" }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [scale, setScale] = useState<number>(1.0)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null)
  const [workerInitialized, setWorkerInitialized] = useState<boolean>(false)

  // Detectar largura da janela para responsividade
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Definir largura inicial
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Ajustar escala com base na largura da tela
  useEffect(() => {
    if (windowWidth < 640) {
      setScale(0.6) // Dispositivos móveis
    } else if (windowWidth < 1024) {
      setScale(0.8) // Tablets
    } else {
      setScale(1.0) // Desktop
    }
  }, [windowWidth])

  // Verificar se o worker foi inicializado corretamente
  useEffect(() => {
    const checkWorker = async () => {
      try {
        // Verificar se o worker está disponível
        await fetch(pdfjs.GlobalWorkerOptions.workerSrc, { method: "HEAD" })
        setWorkerInitialized(true)
      } catch (err) {
        console.error("Erro ao verificar o worker do PDF.js:", err)
        setError("Não foi possível inicializar o visualizador de PDF. Por favor, tente novamente mais tarde.")
      }
    }

    checkWorker()
  }, [])

  // Carregar o PDF como blob para evitar problemas de URL
  useEffect(() => {
    async function fetchPDF() {
      if (!workerInitialized) return

      try {
        setLoading(true)
        setError(null)

        const response = await fetch(pdfUrl)

        if (!response.ok) {
          throw new Error(`Erro ao carregar o PDF: ${response.status} ${response.statusText}`)
        }

        const blob = await response.blob()
        setPdfBlob(blob)
      } catch (err) {
        console.error("Erro ao buscar o PDF:", err)
        setError(err instanceof Error ? err.message : "Erro ao carregar o PDF")
      } finally {
        setLoading(false)
      }
    }

    if (workerInitialized) {
      fetchPDF()
    }
  }, [pdfUrl, workerInitialized])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
  }

  function onDocumentLoadError(error: Error) {
    console.error("Erro ao carregar o PDF:", error)
    setError(`Erro ao carregar o PDF: ${error.message}`)
    setLoading(false)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset
      return newPageNumber >= 1 && newPageNumber <= (numPages || 1) ? newPageNumber : prevPageNumber
    })
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.0))
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5))
  }

  function handleDownload() {
    // Se temos o blob, podemos criar um URL e fazer o download
    if (pdfBlob) {
      const url = URL.createObjectURL(pdfBlob)
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", fileName)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url) // Limpar o URL do objeto após o download
    } else {
      // Fallback para o método original
      const link = document.createElement("a")
      link.href = pdfUrl
      link.setAttribute("download", fileName)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  // Renderizar um indicador de carregamento enquanto o PDF está sendo buscado
  if (loading && !pdfBlob) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border border-zinc-700 rounded-lg bg-zinc-900/50 min-h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500 mb-4"></div>
        <p className="text-zinc-400">Carregando o PDF...</p>
      </div>
    )
  }

  // Renderizar uma mensagem de erro se o PDF não puder ser carregado
  if (error || !pdfBlob) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border border-zinc-700 rounded-lg bg-zinc-900/50 min-h-[500px]">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h3 className="text-xl font-semibold mb-2">Erro ao carregar o PDF</h3>
        <p className="text-zinc-400 text-center mb-6">{error || "Não foi possível carregar o arquivo PDF."}</p>
        <Button
          onClick={() => window.location.reload()}
          className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 mb-4"
        >
          Tentar novamente
        </Button>
        <Button onClick={handleDownload} variant="outline">
          <Download className="mr-2 h-5 w-5" />
          Baixar PDF
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full">
      {/* Controles do PDF */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
        <Button
          onClick={previousPage}
          disabled={pageNumber <= 1}
          variant="outline"
          size="sm"
          className="flex items-center"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Anterior
        </Button>

        <span className="flex items-center px-2 text-sm">
          Página {pageNumber} de {numPages || "?"}
        </span>

        <Button
          onClick={nextPage}
          disabled={pageNumber >= (numPages || 1)}
          variant="outline"
          size="sm"
          className="flex items-center"
        >
          Próxima
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>

        <Button onClick={zoomOut} variant="outline" size="sm" className="flex items-center">
          <ZoomOut className="h-4 w-4" />
        </Button>

        <Button onClick={zoomIn} variant="outline" size="sm" className="flex items-center">
          <ZoomIn className="h-4 w-4" />
        </Button>

        <Button
          onClick={handleDownload}
          variant="default"
          size="sm"
          className="flex items-center bg-emerald-600 hover:bg-emerald-700"
        >
          <Download className="h-4 w-4 mr-1" />
          Baixar PDF
        </Button>
      </div>

      {/* Container do PDF */}
      <div className="w-full overflow-auto border border-zinc-800 rounded-lg bg-zinc-900 p-4">
        <div className="flex justify-center min-h-[500px]">
          <Document
            file={pdfBlob}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex items-center justify-center h-[500px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
              </div>
            }
            error={
              <div className="flex items-center justify-center h-[500px] text-red-500">
                Não foi possível carregar o PDF.
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="shadow-lg"
            />
          </Document>
        </div>
      </div>
    </div>
  )
}

