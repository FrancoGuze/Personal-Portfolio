import type { ReactNode } from "react"
import { cn } from "../../lib/utils"

interface SkillItemProps {
  icon: ReactNode
  name: string
  className?: string
}

export function SkillItem({ icon, name, className }: SkillItemProps) {
  return (
    <div
      className={cn(
        "group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-detail/70 hover:bg-secondary",
        className
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        {icon}
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  )
}
