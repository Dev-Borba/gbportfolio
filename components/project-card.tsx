import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  className?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  demoUrl,
  className = "",
}: ProjectCardProps) {
  return (
    <div
      className={`relative group bg-zinc-900 rounded-3xl border border-zinc-800 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 overflow-hidden ${className}`}
    >
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-[140px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-white/90">{title}</h3>
        <p className="text-zinc-400 mb-4 text-sm line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-zinc-800/80 text-sm rounded-full text-zinc-300 
              transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <Button
              size="sm"
              asChild
              className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 rounded-xl hover:scale-105"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-2 h-4 w-4" />
                Código
              </a>
            </Button>
          )}

          {demoUrl && (
            <Button 
              size="sm" 
              asChild 
              className="bg-zinc-700 hover:bg-zinc-600 transition-all duration-300 rounded-xl hover:scale-105"
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
