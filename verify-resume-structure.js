import { mkdir, access } from "node:fs/promises"
import { join } from "node:path"

async function verifyResumeStructure() {
  try {
    // Definir os caminhos
    const publicDir = "public"
    const resumeDir = join(publicDir, "resume") // Ensure using "resume" directory
    const pdfPath = join(resumeDir, "curriculo-gabriel-borba.pdf")

    console.log("🔍 Verificando estrutura de diretórios...\n")

    // Verificar se o diretório public existe
    try {
      await access(publicDir)
      console.log("✓ Diretório /public já existe")
    } catch {
      await mkdir(publicDir)
      console.log("✓ Diretório /public criado")
    }

    // Verificar se o diretório resume existe
    try {
      await access(resumeDir)
      console.log("✓ Diretório /public/resume já existe")
    } catch {
      await mkdir(resumeDir)
      console.log("✓ Diretório /public/resume criado")
    }

    // Verificar se o arquivo PDF existe
    try {
      await access(pdfPath)
      console.log("✓ Arquivo curriculo-gabriel-borba.pdf encontrado")
    } catch {
      console.log("\n⚠️  ATENÇÃO: O arquivo PDF não foi encontrado!")
      console.log("\nPara resolver isso:")
      console.log("1. Coloque seu arquivo PDF com o nome exato: curriculo-gabriel-borba.pdf")
      console.log("2. Mova o arquivo para a pasta: /public/resume/")
      console.log("\nEstrutura esperada:")
      console.log("public/")
      console.log("└── resume/")
      console.log("    └── curriculo-gabriel-borba.pdf")
    }
  } catch (error) {
    console.error("\n❌ Erro ao verificar estrutura:", error)
  }
}

// Executar a função
verifyResumeStructure()

