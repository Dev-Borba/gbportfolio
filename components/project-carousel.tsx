"use client"

import { useState, useEffect } from "react"
import ProjectCard from "./project-card"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
}

interface ProjectCarouselProps {
  projects: Project[]
  className?: string
}

type VisibleProject = Project | { project: Project; position: number }

export default function ProjectCarousel({ projects, className = "" }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const previousProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToProject = (index: number) => {
    if (isTransitioning || index === activeIndex) return
    setIsTransitioning(true)
    setActiveIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  const getVisibleProjects = () => {
    if (isMobile) {
      return [projects[activeIndex]]
    } else {
      const visibleProjects = []
      for (let i = -2; i <= 2; i++) {
        const index = (activeIndex + i + projects.length) % projects.length
        visibleProjects.push({ project: projects[index], position: i })
      }
      return visibleProjects
    }
  }

  const getProjectStyles = (position: number) => {
    const baseScale = position === 0 ? 1 : position === -1 || position === 1 ? 0.85 : 0.7
    const baseOpacity = position === 0 ? 1 : position === -1 || position === 1 ? 0.8 : 0.6
    const spacing = 320 // Espaçamento fixo entre os projetos
    const baseLeft = `calc(50% + ${position * spacing}px)`

    return {
      transform: `translate(-50%, -50%) scale(${baseScale})`,
      opacity: baseOpacity,
      left: baseLeft,
      zIndex: Math.abs(position) === 0 ? 10 : Math.abs(position) === 1 ? 5 : 0
    }
  }

  return (
    <div className={`relative w-full max-w-7xl mx-auto ${className}`}>
      <div className="relative h-[420px] overflow-visible">
        <div className="relative h-full perspective-1000">
          {isMobile ? (
            <div
              className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
              key={activeIndex}
            >
              <ProjectCard {...projects[activeIndex]} />
            </div>
          ) : (
            getVisibleProjects().map((item) => {
              const project = 'project' in item ? item.project : item
              const position = 'position' in item ? item.position : 0
              const index = (activeIndex + position + projects.length) % projects.length
              const styles = getProjectStyles(position)

              return (
                <div
                  key={index}
                  className="absolute top-1/2 w-[280px] transition-all duration-500 cursor-pointer"
                  style={{
                    transform: styles.transform,
                    opacity: styles.opacity,
                    left: styles.left,
                    zIndex: styles.zIndex
                  }}
                  onClick={() => position !== 0 && goToProject(index)}
                >
                  <ProjectCard
                    {...project}
                    className={position === 0 ? "border-emerald-500/50 shadow-lg shadow-emerald-500/10" : ""}
                  />
                </div>
              )
            })
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-8 bg-emerald-500" : "w-2 bg-zinc-600"
            }`}
            onClick={() => goToProject(index)}
            aria-label={`Ver projeto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
