import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Caminho para o arquivo PDF
    const pdfPath = path.join(process.cwd(), "public", "resume", "curriculo-gabriel-borba.pdf")

    // Verificar se o arquivo existe
    const fileExists = fs.existsSync(pdfPath)

    if (!fileExists) {
      return NextResponse.json(
        {
          success: false,
          message: "O arquivo PDF não foi encontrado",
          path: pdfPath,
        },
        { status: 404 },
      )
    }

    // Obter informações do arquivo
    const stats = fs.statSync(pdfPath)

    return NextResponse.json({
      success: true,
      message: "O arquivo PDF está disponível para download",
      fileInfo: {
        size: stats.size,
        lastModified: stats.mtime,
        path: "/resume/curriculo-gabriel-borba.pdf",
      },
    })
  } catch (error) {
    console.error("Erro ao verificar PDF:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao verificar o arquivo PDF",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 },
    )
  }
}

