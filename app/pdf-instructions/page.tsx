export default function PDFInstructions() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Instruções para Configurar o PDF do Currículo</h1>

        <div className="space-y-6">
          <section className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">1. Verifique o nome do arquivo</h2>
            <p className="mb-4">
              O arquivo PDF do currículo deve ser nomeado{" "}
              <span className="font-mono bg-zinc-800 px-2 py-1 rounded">curriculo-gabriel-borba.pdf</span> exatamente
              como mostrado (incluindo letras minúsculas e hífens).
            </p>
          </section>

          <section className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">2. Coloque o arquivo no local correto</h2>
            <p className="mb-4">
              O arquivo PDF deve estar na pasta{" "}
              <span className="font-mono bg-zinc-800 px-2 py-1 rounded">public/curriculo/</span> do seu projeto Next.js.
            </p>
            <p className="mb-4">A estrutura de pastas deve ser:</p>
            <pre className="bg-zinc-800 p-4 rounded overflow-x-auto">
              {`public/
├── images/
│   └── user-perfil.png
└── resume/
    └── curriculo-gabriel-borba.pdf`}
            </pre>
          </section>

          <section className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">3. Verifique o arquivo</h2>
            <p className="mb-4">
              Certifique-se de que o arquivo PDF não está corrompido tentando abri-lo diretamente no seu computador.
            </p>
          </section>

          <section className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">4. Reinicie o servidor</h2>
            <p className="mb-4">
              Após colocar o arquivo no local correto, reinicie o servidor Next.js para garantir que ele reconheça o
              novo arquivo.
            </p>
            <pre className="bg-zinc-800 p-4 rounded overflow-x-auto">
              {`# Parar o servidor atual (Ctrl+C)
# Iniciar novamente
npm run dev`}
            </pre>
          </section>

          <section className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">5. Teste o acesso ao arquivo</h2>
            <p className="mb-4">Acesse a página de verificação para testar se o arquivo está acessível:</p>
            <a
              href="/check-pdf"
              className="inline-block px-4 py-2 bg-emerald-600 rounded hover:bg-emerald-700 transition-colors"
            >
              Verificar arquivo PDF
            </a>
          </section>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="inline-block px-4 py-2 bg-zinc-700 rounded hover:bg-zinc-600 transition-colors">
            Voltar para o portfólio
          </a>
        </div>
      </div>
    </div>
  )
}

