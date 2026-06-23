import type { ProjectCategory } from '@/types'

interface CategoryBadgeProps {
  category: ProjectCategory
  label: string
}

const styles: Record<ProjectCategory, string> = {
  ai: 'bg-blue-950/60 text-blue-400 border-blue-800/60',
  enterprise: 'bg-violet-950/60 text-violet-400 border-violet-800/60',
  learning: 'bg-amber-950/60 text-amber-400 border-amber-800/60',
}

export default function CategoryBadge({ category, label }: CategoryBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-sm border text-xs font-medium ${styles[category]}`}>
      {label}
    </span>
  )
}
