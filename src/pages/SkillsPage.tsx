import { useState } from 'react'
import { Search } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { skillGroups, skillSummaries } from '@/data/skills'
import type { SkillLevel } from '@/types'

const levelConfig: Record<SkillLevel, { label: string; color: string; dot: string }> = {
  expert: { label: '熟悉', color: 'text-blue-400', dot: 'bg-blue-400' },
  practiced: { label: '实践过', color: 'text-emerald-400', dot: 'bg-emerald-400' },
  learning: { label: '学习拓展', color: 'text-amber-400', dot: 'bg-amber-400' },
}

const groupColors = [
  'bg-blue-950/60 text-blue-400',
  'bg-emerald-950/60 text-emerald-400',
  'bg-amber-950/60 text-amber-400',
  'bg-orange-950/60 text-orange-400',
  'bg-violet-950/60 text-violet-400',
]

export default function SkillsPage() {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? skillGroups
        .map(g => ({ ...g, skills: g.skills.filter(s => s.name.toLowerCase().includes(query.toLowerCase())) }))
        .filter(g => g.skills.length > 0)
    : skillGroups

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
      {/* Header */}
      <header className="pt-12 pb-2">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">技能栈</h1>
          {/* Legend */}
          <div className="flex items-center gap-4 bg-card border border-border rounded-md px-4 py-2">
            {(Object.entries(levelConfig) as [SkillLevel, typeof levelConfig[SkillLevel]][]).map(([, cfg]) => (
              <div key={cfg.label} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                <span className="text-xs text-muted-foreground">{cfg.label}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-1">
          全栈工程能力，聚焦 <span className="text-primary font-medium">AI 应用开发方向</span>
        </p>
        <p className="text-xs text-muted-foreground pb-6">
          从前端到后端，从 AI 应用开发到工程化落地，具备构建可用、可扩展、可维护产品的能力。
        </p>

        {/* Search */}
        <div className="relative pb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="搜索技能..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full sm:w-72 bg-card border border-border rounded-md pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
          />
        </div>
      </header>

      {/* Skill Groups */}
      <div className="space-y-3 mb-8">
        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground py-8 text-center">没有匹配的技能</p>
        )}
        {filtered.map((group, i) => (
          <Card key={group.id} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-9 h-9 rounded-md flex items-center justify-center text-sm font-bold flex-shrink-0 ${groupColors[i % groupColors.length]}`}>
                  {group.id}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-0.5">{group.title}</h3>
                  <p className="text-xs text-muted-foreground">{group.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const cfg = levelConfig[skill.level]
                  return (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 bg-secondary/50 border border-border rounded-full px-3 py-1"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.dot}`} />
                      <span className="text-[12px] text-foreground/80 font-medium">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summaries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillSummaries.map((summary) => (
          <Card key={summary.title} className="bg-card border-border card-hover">
            <CardContent className="p-6 flex flex-col gap-2">
              <span className="text-3xl mb-1">{summary.icon}</span>
              <h4 className="text-sm font-bold text-foreground">{summary.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{summary.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
