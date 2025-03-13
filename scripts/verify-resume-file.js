import { access } from "node:fs/promises"
import { join } from "node:path"

async function verifyResumeFile() {
  try {
    // Definir os caminhos
    const publicDir = "public"
    const resumeDir = join(publicDir, "resume")
    const pdfPath = join(resumeDir, "curriculo-gabriel-borba.pdf")

    console.log("🔍 Verificando arquivo do currículo...\n")

    // Verificar se o arquivo PDF existe
    try {
      await access(pdfPath)
      console.log("✅ Arquivo curriculo-gabriel-borba.pdf encontrado em public/resume/")
      console.log("✅ O download do currículo está pronto para funcionar!")
    } catch {
      console.log("❌ Arquivo curriculo-gabriel-borba.pdf NÃO encontrado!")
      console.log("\nPara resolver isso:")
      console.log("1. Certifique-se de que o arquivo existe em: public/resume/curriculo-gabriel-borba.pdf")
      console.log(
        "2. Verifique se o nome do arquivo está escrito exatamente como mostrado (incluindo letras minúsculas e hífens)",
      )
      console.log("\nEstrutura esperada:")
      console.log("public/")
      console.log("└── resume/")
      console.log("    └── curriculo-gabriel-borba.pdf")
    }
  } catch (error) {
    console.error("\n❌ Erro ao verificar arquivo:", error)
  }
}

// Executar a função
verifyResumeFile()

