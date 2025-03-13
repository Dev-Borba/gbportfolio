"use client"

import type React from "react"

import { useEffect, useState, useRef, useCallback } from "react"
import { Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react"

type CommandResult = {
  output: string | React.ReactNode
  isError?: boolean
  isLink?: boolean
  url?: string
}

export default function Terminal() {
  const [history, setHistory] = useState<Array<{ command: string; result?: CommandResult }>>([])
  const [inputValue, setInputValue] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [initialLoad, setInitialLoad] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Apenas o comando help será executado automaticamente
  const initialCommands = ["help"]

  // Redes sociais
  const socialLinks = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/Dev-Borba",
      icon: <Github className="inline-block w-4 h-4 mr-1" />,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/in/gbdevelop",
      icon: <Linkedin className="inline-block w-4 h-4 mr-1" />,
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:grdborba@gmail.com",
      icon: <Mail className="inline-block w-4 h-4 mr-1" />,
    },
    {
      id: "resume",
      name: "Currículo",
      url: "/curriculo-temp", // Atualizado de /resume para /curriculo-temp
      icon: <FileText className="inline-block w-4 h-4 mr-1" />,
    },
  ]

  // Projetos disponíveis
  const projects = [
    {
      id: "ecommerce",
      name: "E-commerce Platform",
      url: "https://github.com/Dev-Borba/ecommerce",
      description: "Uma plataforma de comércio eletrônico completa com pagamentos",
    },
    {
      id: "taskapp",
      name: "Task Management App",
      url: "https://github.com/Dev-Borba/taskapp",
      description: "Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar",
    },
    {
      id: "portfolio",
      name: "Portfolio Website",
      url: "https://github.com/Dev-Borba/portfolio",
      description: "Site de portfólio minimalista e responsivo",
    },
  ]

  // Processar comandos
  const processCommand = useCallback((cmd: string): CommandResult => {
    const command = cmd.trim().toLowerCase()

    // Comando help
    if (command === "help" || command === "h") {
      return {
        output: (
          <div className="space-y-1">
            <p>Comandos disponíveis:</p>
            <p>
              <span className="text-yellow-400">help</span> - Mostra esta lista de comandos
            </p>
            <p>
              <span className="text-yellow-400">whoami</span> - Informações sobre Gabriel Borba
            </p>
            <p>
              <span className="text-yellow-400">skills</span> - Lista minhas habilidades técnicas
            </p>
            <p>
              <span className="text-yellow-400">education</span> - Minha formação acadêmica
            </p>
            <p>
              <span className="text-yellow-400">experience</span> - Minha experiência profissional
            </p>
            <p>
              <span className="text-yellow-400">certificates</span> - Meus cursos e certificados
            </p>
            <p>
              <span className="text-yellow-400">projects</span> - Lista meus projetos
            </p>
            <p>
              <span className="text-yellow-400">project [id]</span> - Abre um projeto específico
            </p>
            <p>
              <span className="text-yellow-400">social</span> - Lista minhas redes sociais
            </p>
            <p>
              <span className="text-yellow-400">open [rede]</span> - Abre uma rede social (github, linkedin, twitter,
              email)
            </p>
            <p>
              <span className="text-yellow-400">resume</span> - Baixa meu currículo em PDF
            </p>
            <p>
              <span className="text-yellow-400">clear</span> - Limpa o terminal
            </p>
          </div>
        ),
      }
    }

    // Comando whoami
    if (command === "whoami") {
      return {
        output: (
          <div className="space-y-1">
            <p>Gabriel Borba</p>
            <p>Desenvolvedor Full Stack</p>
            <p>São Paulo, SP - Brasil</p>
            <p className="mt-2">
              Busco oportunidades de crescimento profissional e novos desafios na área de tecnologia.
            </p>
            <p>Tenho facilidade em trabalhar em equipe e estou sempre aberto a novos aprendizados.</p>
            <p className="mt-2 text-zinc-400">
              Use o comando <span className="text-yellow-400">skills</span> para ver minhas habilidades técnicas.
            </p>
          </div>
        ),
      }
    }

    // Comando skills
    if (command === "skills") {
      return {
        output: (
          <div className="space-y-1">
            <p className="font-bold text-emerald-400">Linguagens & Frameworks:</p>
            <p>HTML5, CSS3, JavaScript, ReactJS, NodeJS, Python</p>

            <p className="font-bold text-emerald-400 mt-3">Ferramentas:</p>
            <p>Git & Github, Windows, Linux Ubuntu, Kali Linux</p>

            <p className="font-bold text-emerald-400 mt-3">Idiomas:</p>
            <p>Português (Nativo), Inglês, Espanhol</p>

            <p className="font-bold text-emerald-400 mt-3">Soft Skills:</p>
            <p>Focado, Dinâmico, Resiliente, Adaptabilidade, Pontualidade, Confiança</p>

            <p className="mt-2 text-zinc-400">
              Use o comando <span className="text-yellow-400">certificates</span> para ver meus cursos e certificados.
            </p>
          </div>
        ),
      }
    }

    // Comando education
    if (command === "education") {
      return {
        output: (
          <div className="space-y-1">
            <p className="font-bold text-emerald-400">Análise e Desenvolvimento de Sistemas</p>
            <p>Impacta, São Paulo</p>
            <p>Janeiro 2024 - atual</p>
          </div>
        ),
      }
    }

    // Comando experience
    if (command === "experience") {
      return {
        output: (
          <div className="space-y-1">
            <p className="font-bold text-emerald-400">Técnico de TI</p>
            <p>Prodam, São Paulo, Brasil</p>
            <p>Novembro 2022 - Novembro 2024</p>
            <p className="mt-2">
              Atividades e rotinas de microinformática em geral. Instalação, configuração e atualização dos Sistemas
              Operacionais Windows professional/ Linux e softwares. Instalação e configuração de impressoras
              departamentais. Suporte técnico ao cliente presencial e remoto.
            </p>
          </div>
        ),
      }
    }

    // Comando certificates
    if (command === "certificates" || command === "courses") {
      return {
        output: (
          <div className="space-y-2">
            <p className="font-bold text-emerald-400">Cursos e Certificados:</p>

            <div>
              <p>
                <span className="text-yellow-400">Go + React da Rocketseat</span> - Agosto 2024
              </p>
              <p className="text-sm text-zinc-400">
                Desenvolvimento full-stack com Go e React, WebSockets, TailwindCSS, TypeScript
              </p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">NLW Pocket: Javascript - Full-stack Intermediário</span> - Setembro
                2024
              </p>
              <p className="text-sm text-zinc-400">
                Node.js, TypeScript, Fastify, DrizzleORM, PostgreSQL, Docker, ReactJS, TailwindCSS
              </p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Segurança da Informação</span> - Julho 2024
              </p>
              <p className="text-sm text-zinc-400">Treinamento de Segurança da Informação</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Frontend Jr da Rocketseat</span> - Junho 2024
              </p>
              <p className="text-sm text-zinc-400">ReactJS, Vite, styled-components, rotas, navegação</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Backend Jr da Rocketseat</span> - Maio 2024
              </p>
              <p className="text-sm text-zinc-400">Node.js, Express, APIs, bancos de dados relacionais, SQL</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">NLW Unite - Python/Node.js/Fullstack da Rocketseat</span> - Abril 2024
              </p>
              <p className="text-sm text-zinc-400">
                Python, Flask, Node.js, TypeScript, Fastify, Prisma, HTML, CSS, JavaScript
              </p>
            </div>

            <p className="mt-2 text-zinc-400">E mais 10+ certificados em diversas áreas...</p>
            <p className="text-zinc-400">
              Digite <span className="text-yellow-400">certificates all</span> para ver a lista completa.
            </p>
          </div>
        ),
      }
    }

    // Comando certificates all
    if (command === "certificates all") {
      return {
        output: (
          <div className="space-y-2">
            <p className="font-bold text-emerald-400">Lista completa de cursos e certificados:</p>

            <div>
              <p>
                <span className="text-yellow-400">Go + React da Rocketseat</span> - Agosto 2024
              </p>
              <p className="text-sm text-zinc-400">
                Desenvolvimento de aplicações front-end em ReactJS e back-end em Go
              </p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">NLW Pocket: Javascript - Full-stack Intermediário</span> - Setembro
                2024
              </p>
              <p className="text-sm text-zinc-400">
                Node.js, TypeScript, Fastify, DrizzleORM, PostgreSQL, Docker, ReactJS, TailwindCSS
              </p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Segurança da Informação</span> - Julho 2024
              </p>
              <p className="text-sm text-zinc-400">Treinamento de Segurança da Informação</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Frontend Jr da Rocketseat</span> - Junho 2024
              </p>
              <p className="text-sm text-zinc-400">Fundamentos de ReactJS, Vite, styled-components, rotas, navegação</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Backend Jr da Rocketseat</span> - Maio 2024
              </p>
              <p className="text-sm text-zinc-400">Node.js, Express, APIs, bancos de dados relacionais, SQL</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Código de Conduta e Integridade PRODAM 2023</span> - Fevereiro 2024
              </p>
              <p className="text-sm text-zinc-400">Treinamento de CCI de 2023</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">NLW Unite - Python da Rocketseat</span> - Abril 2024
              </p>
              <p className="text-sm text-zinc-400">Python, Flask, Virtualenv, Pylint, Pytest</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">NLW Unite - Nodejs da Rocketseat</span> - Abril 2024
              </p>
              <p className="text-sm text-zinc-400">Node.js, TypeScript, Fastify, Prisma ORM, SQLite, Zod</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">NLW Unite - Fullstack da Rocketseat</span> - Abril 2024
              </p>
              <p className="text-sm text-zinc-400">HTML, CSS, JavaScript, Day.js, GitHub Pages</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Git e Github básico da Rocketseat</span> - Outubro 2023
              </p>
              <p className="text-sm text-zinc-400">Git, GitHub, controle de versão</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Javascript da Rocketseat</span> - Setembro 2023
              </p>
              <p className="text-sm text-zinc-400">JavaScript, DOM, Clean Code, SPA, POO, APIs</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">HTML e CSS da Rocketseat</span> - Junho 2023
              </p>
              <p className="text-sm text-zinc-400">HTML, CSS, semântica, acessibilidade, responsividade</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">AI for Devs</span> - Agosto 2023
              </p>
              <p className="text-sm text-zinc-400">Uso da inteligência artificial em programação</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">TOP365</span> - Agosto 2023
              </p>
              <p className="text-sm text-zinc-400">Planner, Power Apps, Power Automate, Power BI, Office 365</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Microsoft Excel Basic</span> - Março 2023
              </p>
              <p className="text-sm text-zinc-400">Excel, fórmulas, funções, formatação, gráficos</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Código de Conduta e Integridade PRODAM 2021</span> - Novembro 2022
              </p>
              <p className="text-sm text-zinc-400">Treinamento de CCI de 2022</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Segurança da Informação</span> - Novembro 2022
              </p>
              <p className="text-sm text-zinc-400">Treinamento de Segurança da Informação</p>
            </div>

            <div>
              <p>
                <span className="text-yellow-400">Lei Geral de Proteção de Dados</span> - Novembro 2022
              </p>
              <p className="text-sm text-zinc-400">Treinamento de LGPD</p>
            </div>
          </div>
        ),
      }
    }

    // Comando projects
    if (command === "projects" || command === "ls") {
      return {
        output: (
          <div className="space-y-1">
            <p>Projetos disponíveis:</p>
            {projects.map((project) => (
              <p key={project.id}>
                <span className="text-yellow-400">{project.id}</span> - {project.description}
              </p>
            ))}
            <p className="mt-2 text-zinc-400">
              Use o comando <span className="text-yellow-400">project [id]</span> para abrir um projeto
            </p>
          </div>
        ),
      }
    }

    // Comando project [id]
    if (command.startsWith("project ")) {
      const projectId = command.split(" ")[1]
      const project = projects.find((p) => p.id === projectId)

      if (project) {
        window.open(project.url, "_blank")
        return {
          output: (
            <p>
              Abrindo projeto: {project.name} <ExternalLink className="inline-block w-4 h-4 ml-1" />
            </p>
          ),
          isLink: true,
          url: project.url,
        }
      } else {
        return {
          output: `Projeto não encontrado: ${projectId}. Use o comando 'projects' para ver a lista de projetos disponíveis.`,
          isError: true,
        }
      }
    }

    // Comando social
    if (command === "social") {
      return {
        output: (
          <div className="space-y-1">
            <p>Redes sociais:</p>
            {socialLinks.map((link) => (
              <p key={link.id}>
                {link.icon} <span className="text-yellow-400">{link.id}</span> - {link.name}
              </p>
            ))}
            <p className="mt-2 text-zinc-400">
              Use o comando <span className="text-yellow-400">open [rede]</span> para abrir uma rede social
            </p>
          </div>
        ),
      }
    }

    // Comando open [rede]
    if (command.startsWith("open ")) {
      const socialId = command.split(" ")[1]
      const social = socialLinks.find((s) => s.id === socialId)

      if (social) {
        window.open(social.url, "_blank")
        return {
          output: (
            <p>
              Abrindo {social.name} {social.icon}
            </p>
          ),
          isLink: true,
          url: social.url,
        }
      } else {
        return {
          output: `Rede social não encontrada: ${socialId}. Use o comando 'social' para ver a lista de redes disponíveis.`,
          isError: true,
        }
      }
    }

    // Comando resume
    if (command === "resume" || command === "cv" || command === "curriculo") {
      // Nome exato do arquivo PDF
      const pdfFileName = "curriculo-gabriel-borba.pdf"
      const resumeUrl = `/curriculo-temp`

      window.open(resumeUrl, "_blank")
      return {
        output: (
          <p>
            Abrindo página do currículo <FileText className="inline-block w-4 h-4 ml-1" />
          </p>
        ),
        isLink: true,
        url: resumeUrl,
      }
    }

    // Comando clear
    if (command === "clear" || command === "cls") {
      setHistory([])
      return { output: "" }
    }

    // Comando não reconhecido
    return {
      output: `Comando não reconhecido: ${command}. Digite 'help' para ver a lista de comandos disponíveis.`,
      isError: true,
    }
  }, [])

  // Executar comando
  const executeCommand = useCallback(
    (cmd: string) => {
      if (!cmd.trim()) return

      const result = processCommand(cmd)
      setHistory((prev) => [...prev, { command: cmd, result }])
      setInputValue("")

      // Scroll para o final do terminal
      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
      }, 10)
    },
    [processCommand],
  )

  // Executar comandos iniciais
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false)

      let delay = 500
      initialCommands.forEach((cmd) => {
        setTimeout(() => {
          executeCommand(cmd)
        }, delay)
        delay += 1000
      })
    }
  }, [initialLoad, executeCommand])

  // Efeito de cursor piscante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Focar no input quando clicar no terminal
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Lidar com envio de comando
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    executeCommand(inputValue)
  }

  return (
    <div
      className="w-full max-w-md bg-zinc-900 rounded-lg border border-zinc-700 shadow-lg overflow-hidden cursor-pointer"
      onClick={focusInput}
    >
      {/* Terminal Header */}
      <div className="bg-zinc-800 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-center flex-1 text-sm text-zinc-400">gabriel@portfolio ~ </div>
      </div>

      {/* Terminal Content */}
      <div ref={terminalRef} className="p-4 font-mono text-sm h-80 overflow-y-auto">
        {/* Mensagem inicial para incentivar a interação */}
        {history.length === 0 && !initialLoad && (
          <div className="text-zinc-400 mb-4">
            Clique aqui e digite um comando. Use <span className="text-yellow-400">help</span> para ver os comandos
            disponíveis.
          </div>
        )}

        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="text-emerald-400">
              <span className="text-emerald-500">gabriel@portfolio</span>:<span className="text-blue-400">~</span>${" "}
              {item.command}
            </div>
            {item.result && (
              <div className={`ml-2 ${item.result.isError ? "text-red-400" : "text-zinc-300"}`}>
                {item.result.output}
              </div>
            )}
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-emerald-500">gabriel@portfolio</span>:<span className="text-blue-400">~</span>$
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white ml-1"
            autoFocus
          />
          {showCursor && inputValue.length === 0 && <span className="text-emerald-400 animate-pulse">▋</span>}
        </form>
      </div>
    </div>
  )
}

