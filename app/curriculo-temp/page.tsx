"use client"

import Link from "next/link"
import { ArrowLeft, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CurriculoTemp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-zinc-800 py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-emerald-500">GB</span>Portfolio
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-zinc-900/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-zinc-800">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Gabriel Borba</h1>
            <h2 className="text-xl text-emerald-400 mb-4">Desenvolvedor Full-Stack</h2>
            <div className="flex justify-center gap-2">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => window.print()}>
                <FileDown className="h-4 w-4 mr-2" />
                Baixar PDF
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-emerald-400 border-b border-zinc-700 pb-2">
                  Objetivo Profissional
                </h3>
                <p className="mb-2">Área de TI</p>
                <p className="mb-2 text-zinc-300">
                  Busco oportunidades de crescimento profissional e novos desafios na área de tecnologia.
                </p>
                <p className="text-zinc-300">
                  Busco o crescimento profissional, contribuindo para o sucesso da organização como um todo com
                  motivação, dedicação e sempre aberto a novos aprendizados. Tenho facilidade em trabalhar em equipe e
                  ficarei grato com a oportunidade de fazer parte dessa conceituada empresa.
                </p>
              </div>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700">
              <h3 className="text-lg font-bold mb-4 text-emerald-400">Contato</h3>
              <ul className="space-y-3">
                <li>
                  <div className="flex flex-col">
                    <span className="text-emerald-300 text-sm font-medium">Email:</span>
                    <a
                      href="mailto:grdborba@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-emerald-400 transition-colors"
                    >
                      grdborba@gmail.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col">
                    <span className="text-emerald-300 text-sm font-medium">Telefone:</span>
                    <span className="text-zinc-300">+55 (11) 9.5232-3070</span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col">
                    <span className="text-emerald-300 text-sm font-medium">Localização:</span>
                    <span className="text-zinc-300">São Paulo, SP</span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col">
                    <span className="text-emerald-300 text-sm font-medium">LinkedIn:</span>
                    <a
                      href="https://linkedin.com/in/gbdevelop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-emerald-400 transition-colors"
                    >
                      linkedin.com/in/gbdevelop
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col">
                    <span className="text-emerald-300 text-sm font-medium">GitHub:</span>
                    <a
                      href="https://github.com/Dev-Borba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-emerald-400 transition-colors"
                    >
                      github.com/Dev-Borba
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-emerald-400 border-b border-zinc-700 pb-2">Formação</h3>
              <div className="mb-4">
                <p className="font-bold">Análise e Desenvolvimento de Sistemas</p>
                <p className="text-emerald-300">Impacta, São Paulo</p>
                <p className="text-zinc-400">jan 2024 - atual</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-emerald-400 border-b border-zinc-700 pb-2">Experiência</h3>
              <div className="mb-4">
                <p className="font-bold">Técnico de TI</p>
                <p className="text-emerald-300">Prodam, São Paulo, Brasil</p>
                <p className="text-zinc-400">nov 2022 - nov 2024</p>
                <p className="mt-2 text-zinc-300">
                  Atividades e rotinas de microinformática em geral. Instalação, configuração e atualização dos Sistemas
                  Operacionais Windows professional/ Linux e softwares. Instalação e configuração de impressoras
                  departamentais. Suporte técnico ao cliente presencial e remoto.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-emerald-400 border-b border-zinc-700 pb-2">Habilidades</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-emerald-300">Linguagens</h4>
                <ul className="space-y-1 text-zinc-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    HTML5
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    CSS3
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    ReactJS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    NodeJS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Python
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-emerald-300">Software</h4>
                <ul className="space-y-1 text-zinc-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Windows
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Linux Ubuntu
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Kali Linux
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Git & Github
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-emerald-300">Idiomas</h4>
                <ul className="space-y-1 text-zinc-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Português (Nativo)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-emerald-300">Qualidades</h4>
                <ul className="space-y-1 text-zinc-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Focado
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Dinâmico
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Resiliente
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Adaptabilidade
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Pontualidade
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    Confiança
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-emerald-400 border-b border-zinc-700 pb-2">
              Cursos e Certificados
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">Go + React da Rocketseat</p>
                <p className="text-zinc-400 text-sm">ago 2024</p>
                <p className="mt-2 text-zinc-300 text-justify">
                  Desenvolvimento de uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades,
                  Estados e Componentes, actions do React19,tipagem com Typescript,tooling com Vite, interface
                  responsiva com TailwindCSS, consumo de API GO utilizando tanto métodos HTTP com TanStack Query
                  quanto comunicação em tempo real com WebSockets, notificação com Sonner. Criação de API back-end
                  web utilizando Go com Gorilla Websockets, migrations e Go-Chi como router.Boas práticas no
                  desenvolvimento de uma API, estrutura de aplicações, HTTP REST idiomático, exclusões mútuas e
                  programação concurrent-safe.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">NLW Pocket: Javascript - Full-stack Intermediário</p>
                <p className="text-zinc-400 text-sm">set 2024</p>
                <p className="mt-2 text-zinc-300 text-justify">
                  Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST,
                  utilizando TypeScript, Fastify como framework, integração do DrizzleORM + PostgreSQL, Docker
                  e Zod para validação de dados. Desenvolvimento de uma aplicação front-end em ReactJS, aplicação
                  dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, tooling com Vite,
                  interface responsiva com TailwindCSS, consumo de API Node.js, gerenciamento de dados assíncronos
                  com TanStack Query.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">Segurança da Informação</p>
                <p className="text-zinc-400 text-sm">jul 2024</p>
                <p className="mt-2 text-zinc-300">Participação do treinamento de Segurança da Informação.</p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">Frontend Jr da Rocketseat</p>
                <p className="text-zinc-400 text-sm">jun 2024</p>
                <p className="mt-2 text-zinc-300 text-justify">
                  Fundamentos de ReactJS; Vite; styled-components; Fragment; Adicionar fontes personalizadas;
                  Components; Props; Rotas; Navegação; Estruturar pastas e arquivos no ReactJS; Executar um projeto
                  ReactJS.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">Backend Jr da Rocketseat</p>
                <p className="text-zinc-400 text-sm">mai 2024</p>
                <p className="mt-2 text-zinc-300 text-justify">
                  Criação de APIs; Node.js; Express; rotas; métodos HTTP; Middlewares; bancos de dados relacionais;
                  comandos SQL; SQLite; comandos DML; comandos DDL; gerenciadores de dependências; criptografia de dados;
                  tratamento de erros.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">NLW Unite - Python</p>
                <p className="text-zinc-400 text-sm">abr 2024</p>
                <p className="mt-2 text-zinc-300 text-justify">
                  Desenvolvimento de uma aplicação de cadastro e gerenciamento de eventos. Utilizando Python como
                  linguagem de programação, Flask como framework web, preparação de ambiente e boas práticas de
                  projeto com Virtualenv, Pylint e versionamento de código usando pre-commit, boas práticas de
                  código com entidades, services e repositories + testes automatizados com Pytest.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">NLW Unite - Nodejs</p>
                <p className="text-zinc-400 text-sm">abr 2024</p>
                <p className="mt-2 text-zinc-300 text-justify">
                  Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST,
                  utilizando TypeScript, Fastify como framework, integração do Prisma ORM + SQLite e Zod para
                  validação de dados.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">NLW Unite - Fullstack</p>
                <p className="text-zinc-400 text-sm">abr 2024</p>
                <p className="mt-2 text-zinc-300 text-justify">
                  Desenvolvimento de uma aplicação front-end em HTML, CSS e JavaScript, conceitos teóricos dos
                  fundamentos da programação, criação de estrutura base com HTML, estilização com CSS, aplicação
                  de lógica de programação com o JavaScript , IA para gerar a lista dos participantes, Day.js para
                  lidar com datas e uso do GitHub e GitHub Pages para publicar a aplicação.
                </p>
              </div>


              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">Git e Github básico</p>
                <p className="text-zinc-400 text-sm">out 2023</p>
                <p className="mt-2 text-zinc-300 text-justify">
                  Introdução ao Git; sistemas de controle de versão; HEAD no git; comandos git básicos; git diff;
                  git --amend; git restore; GitHub; repositórios no GitHub; .gitignore e .gitkeep; git clone; git pull;
                  criação e atualização de README.md.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">Javascript</p>
                <p className="text-zinc-400 text-sm">set 2023</p>
                <p className="mt-2 text-zinc-300 text-justify">
                  Tipos de dados, operadores, estruturas de repetição, condicionais, funções, DOM, callback,
                  princípios de Clean Code, modularização, escopo, padrão factory, injeção de dependências,
                  manipulação de arquivos, SPA, eventos, rotas, assincronismo, conceitos da POO, desestruturação,
                  chamado de API, imutabilidade.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">HTML e CSS</p>
                <p className="text-zinc-400 text-sm">jun 2023</p>
                <p className="mt-2 text-zinc-300 text-justify">
                  Estrutura da web, estrutura do HTML, tags HTML, semântica, acessibilidade, conceitos de CSS,
                  seletores CSS, animações em CSS, grid e flexbox, formulários, inputs, variáveis em CSS,
                  responsividade.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">AI for Devs</p>
                <p className="text-zinc-400 text-sm">ago 2023</p>
                <p className="mt-2 text-zinc-300 text-justify">
                  Participação do evento de IA para Devs sobre o uso da inteligencia artificial em programação.
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">TOP365</p>
                <p className="text-zinc-400 text-sm">ago 2023</p>
                <p className="mt-2 text-zinc-300 text-justify whitespace-pre-line">
                  - Gestão de Demandas com Planner e To-Do;
                  - Low-Code de Formulários Personalizados (Power Apps);
                  - Low-Code Adotando Inteligência (Power Automate) / Aprovações e Assinaturas Digitais;
                  - Low-Code Insights (Power BI);
                  - Papel da Nuvem no cenário híbrido de trabalho e Visão geral sobre os aplicativos de produtividade,
                  comunicação e colaboração do Office 365;
                  - Visão geral sobre os aplicativos de produtividade, comunicação e colaboração do Office 365 [parte 2];
                  - Gestão Eletrônica de Documentos;
                  - Portais de Processos Sharepoint;
                </p>
              </div>

              <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <p className="font-bold text-emerald-300">Microsoft Excel Basic</p>
                <p className="text-zinc-400 text-sm">mar 2023</p>
                <p className="mt-2 text-zinc-300 text-justify whitespace-pre-line">
                  <>- Editar dados no Excel;</>
                  <br />
                  <>- Formatar dados no Excel;</>
                  <br />
                  <>- Reconhecer a diferença entre função e fórmula;</>
                  <br />
                  <>- Utilizar as fórmulas de soma, multiplicação, divisão e porcentagem;</>
                  <br />
                  <>- Aplicar as funções básicas do Excel;</>
                  <br />
                  <>- Formatar planilhas Excel a partir de condicionais;</>
                  <br />
                  <>- Criar gráficos.</>
                </p>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} Gabriel Borba. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Estilos para impressão */}
      <style jsx global>{`
        @media print {
          body {
            background: white;
            color: black;
          }
          header, footer, .no-print {
            display: none;
          }
          main {
            padding: 0;
          }
          .container {
            max-width: 100%;
            padding: 0;
          }
          .bg-zinc-900\/70, .bg-zinc-800\/50, .border {
            background: white !important;
            border-color: #ddd !important;
          }
          h1, h2, h3, h4, .text-emerald-400, .text-emerald-300 {
            color: #333 !important;
          }
          .text-zinc-300, .text-zinc-400 {
            color: #555 !important;
          }
          a {
            color: #0066cc !important;
            text-decoration: none;
          }
        }
      `}</style>
    </div>
  )
}

