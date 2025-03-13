interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div
      className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-sm 
   hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400 
   transition-all duration-300 cursor-pointer"
    >
      {name}
    </div>
  )
}

