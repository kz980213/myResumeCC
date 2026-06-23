import { Link, useSearchParams } from 'react-router-dom'
import { Check, ArrowUpRight } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import TechBadge from '@/components/shared/TechBadge'
import CategoryBadge from '@/components/shared/CategoryBadge'
import { projects } from '@/data/projects'
import type { ProjectCategory } from '@/types'

type FilterValue = 'all' | ProjectCategory

const filters: { value: FilterValue; label: string }[] = [
  { value: 'all', label: `全部项目 ${projects.length}` },
  { value: 'ai', label: `AI 应用 ${projects.filter(p => p.category === 'ai').length}` },
  { value: 'enterprise', label: `企业系统 ${projects.filter(p => p.category === 'enterprise').length}` },
  { value: 'learning', label: `学习实践 ${projects.filter(p => p.category === 'learning').length}` },
]

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = (searchParams.get('tab') as FilterValue) || 'all'
  function setActive(v: FilterValue) {
    setSearchParams(v === 'all' ? {} : { tab: v })
  }

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
      {/* Header */}
      <header className="pt-12 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">项目经历</h1>
        <p className="text-sm text-muted-foreground">
          以下项目覆盖企业系统与 AI 应用实践，注重工程化落地与实际问题解决。
        </p>
      </header>

      {/* Filter tabs */}
      <Tabs value={active} onValueChange={(v) => setActive(v as FilterValue)}>
        <TabsList className="bg-card border border-border h-9 mb-6">
          {filters.map((f) => (
            <TabsTrigger
              key={f.value}
              value={f.value}
              className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
            >
              {f.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((project) => (
          <Card key={project.id} className="bg-card border-border card-hover flex flex-col">
            <CardContent className="p-6 flex flex-col gap-4 flex-1">
              {/* Header row */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 font-mono-code text-xs font-bold text-primary-foreground">
                  {String(project.index).padStart(2, '0')}
                </div>
                <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
                  <h3 className="text-base font-bold text-foreground leading-tight">{project.title}</h3>
                  <CategoryBadge category={project.category} label={project.categoryLabel} />
                </div>
              </div>

              {/* Desc */}
              <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>

              {/* Tech stack */}
              <div>
                <p className="text-[11px] font-semibold text-foreground mb-1.5">技术栈</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <p className="text-[11px] font-semibold text-foreground mb-1.5">项目亮点</p>
                <ul className="space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-950 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2 h-2" />
                      </span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result */}
              <div className="bg-secondary/50 rounded-md px-3 py-2.5">
                <p className="text-[11px] font-semibold text-muted-foreground mb-1">项目结果</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.result}</p>
              </div>

              {/* Footer */}
              <div className="mt-auto flex justify-end">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium border border-primary/30 rounded-md px-3 py-1.5 bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  查看详情 <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
