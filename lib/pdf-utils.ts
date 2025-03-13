/**
 * Verifica se um arquivo PDF existe e está acessível
 * @param pdfPath Caminho do arquivo PDF
 * @returns Promise<boolean> indicando se o arquivo existe
 */
export async function checkPDFExists(pdfPath: string): Promise<boolean> {
  try {
    const response = await fetch(pdfPath, { method: "HEAD" })
    return response.ok
  } catch (error) {
    console.error("Erro ao verificar PDF:", error)
    return false
  }
}

/**
 * Obtém informações sobre o PDF
 * @param pdfPath Caminho do arquivo PDF
 * @returns Objeto com informações do PDF ou null se não existir
 */
export async function getPDFInfo(pdfPath: string): Promise<{ exists: boolean; size?: string; lastModified?: string }> {
  try {
    const response = await fetch(pdfPath, { method: "HEAD" })

    if (!response.ok) {
      return { exists: false }
    }

    const size = response.headers.get("content-length")
    const lastModified = response.headers.get("last-modified")

    return {
      exists: true,
      size: size ? formatFileSize(Number.parseInt(size)) : undefined,
      lastModified: lastModified || undefined,
    }
  } catch (error) {
    console.error("Erro ao obter informações do PDF:", error)
    return { exists: false }
  }
}

/**
 * Formata o tamanho do arquivo em bytes para uma string legível
 * @param bytes Tamanho em bytes
 * @returns String formatada (ex: "1.5 MB")
 */
function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

