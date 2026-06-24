import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import TechBadge from '@/components/shared/TechBadge'
import CategoryBadge from '@/components/shared/CategoryBadge'
import { projects } from '@/data/projects'

function SectionTitle({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
      <span className="text-base">{icon}</span>
      {children}
    </h3>
  )
}

export default function ProjectDetailPage() {

  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 flex flex-col items-center gap-5 text-muted-foreground">
        <p className="text-lg">项目不存在</p>
        <Link to="/projects" className="text-sm text-primary hover:underline flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> 返回项目列表
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
      {/* Back link */}
      <Link to="/projects" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mt-6 mb-5">
        <ArrowLeft className="w-3.5 h-3.5" /> 返回项目列表
      </Link>

      {/* Hero card */}
      <Card className="bg-card border-border mb-4">
        <CardContent className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">{project.title}</h1>
              <CategoryBadge category={project.category} label={project.categoryLabel} />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} size="md" />
              ))}
            </div>
            <Separator className="bg-border mb-4" />
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">类型</span>
                <span className="text-foreground font-medium">{project.meta.type}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">时间</span>
                <span className="text-foreground font-medium">{project.meta.time}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">角色</span>
                <span className="text-foreground font-medium">{project.meta.role}</span>
              </div>
              {project.meta.github && (
                <a href={project.meta.github} target="_blank" rel="noopener" className="flex items-center gap-1.5 text-xs text-primary hover:underline">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> 查看源码
                </a>
              )}
              {project.meta.preview && (
                <a href={project.meta.preview} target="_blank" rel="noopener" className="flex items-center gap-1.5 text-xs text-primary hover:underline">
                  <ExternalLink className="w-3.5 h-3.5" /> 在线预览
                </a>
              )}
            </div>
          </div>
          {/* Right — placeholder visual */}
          <div className="h-44 rounded-lg bg-gradient-to-br from-blue-950/40 to-zinc-900 border border-border flex flex-col items-center justify-center gap-3 p-4">
            <span className="text-sm font-semibold text-primary text-center">{project.title}</span>
            <div className="space-y-2 w-full">
              {[70, 80, 60, 90].map((w, i) => (
                <div key={i} className="h-1.5 rounded-full bg-primary/20" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3-col info */}
      {(project.background || project.responsibilities?.length || project.coreFeatures?.length) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {project.background && (
            <Card className="bg-card border-border">
              <CardContent className="p-5">
                <SectionTitle icon="📋">项目背景</SectionTitle>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.background}</p>
              </CardContent>
            </Card>
          )}
          {project.responsibilities?.length && (
            <Card className="bg-card border-border">
              <CardContent className="p-5">
                <SectionTitle icon="✅">我的职责</SectionTitle>
                <ul className="space-y-2">
                  {project.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-950 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2 h-2" />
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
          {project.coreFeatures?.length && (
            <Card className="bg-card border-border">
              <CardContent className="p-5">
                <SectionTitle icon="⚡">核心功能</SectionTitle>
                <div className="space-y-2.5">
                  {project.coreFeatures.map((f) => (
                    <div key={f.title} className="flex items-start gap-2.5 bg-secondary/40 rounded px-2.5 py-2">
                      <span className="text-sm">{f.icon}</span>
                      <div>
                        <p className="text-[11px] font-semibold text-foreground">{f.title}</p>
                        <p className="text-[11px] text-muted-foreground">{f.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Challenges + Pitfalls */}
      {(project.challenges?.length || project.pitfalls?.length) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {project.challenges?.length && (
            <Card className="bg-card border-border">
              <CardContent className="p-5">
                <SectionTitle icon="🎯">难点与解决方案</SectionTitle>
                <div className="space-y-2.5">
                  {project.challenges.map((c) => (
                    <div key={c.title} className="border border-border rounded-md px-3 py-2.5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-xs font-semibold text-foreground">{c.title}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed pl-3.5">{c.solution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          <div className="space-y-4">
            {project.pitfalls?.length && (
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <SectionTitle icon="🪤">踩坑与解决方案</SectionTitle>
                  <ul className="space-y-2">
                    {project.pitfalls.map((p) => (
                      <li key={p} className="text-[11px] text-muted-foreground leading-relaxed pl-3 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-primary/60">
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}


      {/* Review */}
      {project.review && (
        <Card className="bg-card border-border border-l-2 border-l-primary">
          <CardContent className="p-5">
            <SectionTitle icon="📝">项目复盘</SectionTitle>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">{project.review}</p>
            {project.reviewTags?.length && (
              <div className="flex flex-wrap gap-1.5">
                {project.reviewTags.map((tag) => (
                  <TechBadge key={tag} name={tag} />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
