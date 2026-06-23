interface TechBadgeProps {
  name: string
  size?: 'sm' | 'md'
}

export default function TechBadge({ name, size = 'sm' }: TechBadgeProps) {
  return (
    <code
      className={`inline-flex items-center font-mono-code font-medium text-cyan-400 bg-zinc-900 border border-zinc-700/60 rounded-sm whitespace-nowrap ${
        size === 'sm' ? 'px-1.5 py-0.5 text-[11px]' : 'px-2 py-1 text-xs'
      }`}
    >
      {name}
    </code>
  )
}
