"use client"

import Link from "next/link"
import { Github, Mail, FileText } from "lucide-react"
import SkillBadge from "@/components/skill-badge"
import Terminal from "@/components/terminal"
import { Linkedin } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"
import ProjectCarousel from "@/components/project-carousel"
import ContactForm from "@/components/contact-form"

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-emerald-500">GB</span>Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-zinc-400 hover:text-emerald-400 transition-all duration-300 
             relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
             after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-zinc-400 hover:text-emerald-400 transition-all duration-300 
             relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
             after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-zinc-400 hover:text-emerald-400 transition-all duration-300 
             relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
             after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-zinc-400 hover:text-emerald-400 transition-all duration-300 
             relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
             after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contato
            </button>
          </nav>
          <MobileMenu scrollToSection={scrollToSection} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Olá, sou o <span className="text-emerald-500">Gabriel Borba</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8">
              Desenvolvedor Full Stack especializado em criar experiências digitais excepcionais
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg
       transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25
       active:scale-95 font-medium"
              >
                Ver Projetos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-transparent border border-emerald-500/50 text-emerald-400 rounded-lg
       transition-all duration-300 ease-out hover:bg-emerald-500/10 hover:border-emerald-500
       active:scale-95 font-medium flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contato
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Terminal />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-zinc-950 relative">
        {/* Code Background for Projects Section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1702823605654-YtsTdCGgU15wNd8GJu0jlLYDTyWL6d.jpeg"
            alt="Code background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-2">Projetos</h2>
          <p className="text-zinc-400 mb-12 max-w-2xl">
            Uma seleção dos meus trabalhos recentes em desenvolvimento web e aplicações
          </p>

          <ProjectCarousel
            projects={[
              {
                title: "Portfolio Website",
                description:
                  "Site de portfólio minimalista e responsivo para designers e desenvolvedores.",
                image: "/portfolio.png?height=400&width=600",
                tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Zod"],
                githubUrl: "https://github.com/Dev-Borba/gbportfolio",
                demoUrl: "https://gbportfolio-beige.vercel.app/",
              },
              {
                title: "Task Management App",
                description:
                  "Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, notificações e colaboração em equipe.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["Vue.js", "Firebase", "Tailwind CSS"],
                githubUrl: "https://github.com/username/taskapp",
                demoUrl: "https://demo-taskapp.vercel.app",
              },
              {
                title: "Test",
                description: "Site de portfólio minimalista e responsivo para designers e desenvolvedores.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
                githubUrl: "https://github.com/username/portfolio",
                demoUrl: "https://demo-portfolio.vercel.app",
              },
              {
                title: "AI Chat Application",
                description:
                  "Aplicação de chat em tempo real com recursos de IA para respostas automáticas e análise de sentimentos.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["React", "OpenAI", "Socket.io", "Express"],
                githubUrl: "https://github.com/username/ai-chat",
                demoUrl: "https://demo-ai-chat.vercel.app",
              },
              {
                title: "Social Media Dashboard",
                description:
                  "Dashboard para análise e gerenciamento de redes sociais com visualizações de dados em tempo real.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
                githubUrl: "https://github.com/username/social-dashboard",
                demoUrl: "https://demo-social-dashboard.vercel.app",
              },
            ]}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Sobre Mim</h2>
              <div className="space-y-4 text-zinc-300 text-justify">
                <p>
                  Sou um desenvolvedor full stack apaixonado por criar soluções digitais elegantes e funcionais.
                  Atualmente estou tentando me tornar um desenvolvedor back-end, mas ainda estou aprendendo muito sobre o assunto.
                </p>
                <p>
                  Estou cursando Análise e Desenvolvimento de Sistemas na Impacta e tenho investido constantemente em
                  minha formação através de cursos especializados da Rocketseat e outras plataformas.
                </p>
                <p>
                  Busco o crescimento profissional, contribuindo para o sucesso da organização como um todo com
                  motivação, dedicação e sempre aberto a novos aprendizados. Tenho facilidade em trabalhar em equipe e
                  estou sempre em busca de novos desafios na área de tecnologia.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-emerald-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/user-perfil-VGfJm2Pz27iwI93YJeoKVU83EQeTsx.png"
                  alt="Gabriel Borba - Desenvolvedor Full Stack"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Habilidades</h2>
          <p className="text-zinc-400 mb-12 max-w-2xl">Tecnologias e ferramentas com as quais trabalho</p>

          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Desenvolvimento Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="HTML5" />
                <SkillBadge name="CSS3" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="React" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="TailwindCSS" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Desenvolvimento Backend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Node.js" />
                <SkillBadge name="Express" />
                <SkillBadge name="Python" />
                <SkillBadge name="Flask" />
                <SkillBadge name="Go" />
                <SkillBadge name="REST API" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Banco de Dados</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="SQLite" />
                <SkillBadge name="PostgreSQL" />
                <SkillBadge name="MySQL" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">DevOps & Ferramentas</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Git" />
                <SkillBadge name="GitHub" />
                <SkillBadge name="Docker" />
                <SkillBadge name="Windows" />
                <SkillBadge name="Linux" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Contato</h2>
          <p className="text-zinc-400 mb-12 max-w-2xl">Interessado em trabalhar juntos? Entre em contato comigo</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a
                  href="mailto:grdborba@gmail.com"
                  className="text-emerald-400 hover:underline flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  grdborba@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <a
                  href="https://github.com/Dev-Borba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  github.com/Dev-Borba
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/gbdevelop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  linkedin.com/in/gbdevelop
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Currículo</h3>
                <Link href="/curriculo-temp" className="text-emerald-400 hover:underline flex items-center gap-2 group">
                  <FileText className="h-4 w-4 group-hover:text-emerald-500 transition-colors" />
                  Visualizar Currículo
                </Link>
                <p className="text-xs text-zinc-500 mt-1">(curriculo-gabriel-borba.pdf)</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="text-zinc-300">+55 (11) 9.5232-3070</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Localização</h3>
                <p className="text-zinc-300">São Paulo, SP - Brasil</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">© {new Date().getFullYear()} GBPortfolio. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

