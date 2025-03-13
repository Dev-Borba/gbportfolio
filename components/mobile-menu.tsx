"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  scrollToSection: (sectionId: string) => void
}

export default function MobileMenu({ scrollToSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden relative">
      <Button
        variant="outline"
        size="sm"
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg z-50 animate-in fade-in slide-in-from-top-5">
          <div className="py-1">
            <button
              onClick={() => handleClick("projects")}
              className="block w-full px-4 py-2 text-left hover:bg-zinc-800 cursor-pointer text-zinc-300 hover:text-emerald-400"
            >
              Projetos
            </button>
            <button
              onClick={() => handleClick("about")}
              className="block w-full px-4 py-2 text-left hover:bg-zinc-800 cursor-pointer text-zinc-300 hover:text-emerald-400"
            >
              Sobre
            </button>
            <button
              onClick={() => handleClick("skills")}
              className="block w-full px-4 py-2 text-left hover:bg-zinc-800 cursor-pointer text-zinc-300 hover:text-emerald-400"
            >
              Habilidades
            </button>
            <button
              onClick={() => handleClick("contact")}
              className="block w-full px-4 py-2 text-left hover:bg-zinc-800 cursor-pointer text-zinc-300 hover:text-emerald-400"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

