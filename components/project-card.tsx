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
      className={`bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 h-full ${className}`}
    >
      <div className="relative h-[140px] overflow-hidden cursor-pointer">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-zinc-400 mb-3 text-sm line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-zinc-800 text-sm rounded-full text-zinc-300 
             transition-colors duration-300 hover:bg-emerald-500/10 hover:text-emerald-400"
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
              className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Código
              </a>
            </Button>
          )}

          {demoUrl && (
            <Button size="sm" asChild className="bg-zinc-700 hover:bg-zinc-600 transition-colors duration-300">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
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
