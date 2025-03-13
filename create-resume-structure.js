import { mkdir, access } from "node:fs/promises"
import { join } from "node:path"

async function createResumeStructure() {
  try {
    // Definir os caminhos
    const publicDir = "public"
    const curriculoDir = join(publicDir, "curriculo")
    const pdfPath = join(curriculoDir, "curriculo-gabriel-borba.pdf")

    console.log("🔍 Verificando estrutura de diretórios...\n")

    // Verificar se o diretório public existe
    try {
      await access(publicDir)
      console.log("✓ Diretório /public já existe")
    } catch {
      await mkdir(publicDir)
      console.log("✓ Diretório /public criado")
    }

    // Verificar se o diretório curriculo existe
    try {
      await access(curriculoDir)
      console.log("✓ Diretório /public/curriculo já existe")
    } catch {
      await mkdir(curriculoDir)
      console.log("✓ Diretório /public/curriculo criado")
    }

    // Verificar se o arquivo PDF existe
    try {
      await access(pdfPath)
      console.log("✓ Arquivo curriculo-gabriel-borba.pdf encontrado")
    } catch {
      console.log("\n⚠️  ATENÇÃO: O arquivo PDF não foi encontrado!")
      console.log("\nPara resolver isso:")
      console.log("1. Coloque seu arquivo PDF com o nome exato: curriculo-gabriel-borba.pdf")
      console.log("2. Mova o arquivo para a pasta: /public/curriculo/")
      console.log("\nEstrutura esperada:")
      console.log("public/")
      console.log("└── curriculo/")
      console.log("    └── curriculo-gabriel-borba.pdf")
    }
  } catch (error) {
    console.error("\n❌ Erro ao criar estrutura:", error)
  }
}

// Executar a função
createResumeStructure()

