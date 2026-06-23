import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Check, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import TechBadge from '@/components/shared/TechBadge'
import CategoryBadge from '@/components/shared/CategoryBadge'
import { heroTechTags, stats, aboutPoints } from '@/data/profile'
import { homeSkillsPreview } from '@/data/skills'
import { featuredProjects } from '@/data/projects'

const DIRECTION_TEXT = 'AI 应用开发方向'

export default function HomePage() {
  const [displayedDir, setDisplayedDir] = useState('')

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayedDir(DIRECTION_TEXT.slice(0, i))
      if (i >= DIRECTION_TEXT.length) clearInterval(id)
    }, 80)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative border-b border-border hero-grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            {/* Terminal prompt */}
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono-code text-xs text-muted-foreground select-none">$</span>
              <span className="font-mono-code text-xs text-muted-foreground">whoami</span>
              <span className="w-1.5 h-4 bg-primary/80 inline-block animate-pulse ml-1" />
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-3 leading-none">
              孔政
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-2 font-medium">
              前端开发工程师 /&nbsp;
              <span className="text-primary">
                {displayedDir}
                {displayedDir.length < DIRECTION_TEXT.length && (
                  <span className="inline-block w-0.5 h-5 bg-primary/80 ml-0.5 align-middle animate-pulse" />
                )}
              </span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-[520px]">
              4 年前端开发经验，熟悉 Vue 技术栈，具备企业级业务系统开发经验；
              近期围绕 FastAPI、SSE、LLM API、结构化输出与 RAG 方向完成 AI 应用开发实践。
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {heroTechTags.map((tag) => (
                <TechBadge key={tag} name={tag} size="md" />
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-medium">
                <Link to="/projects">
                  查看项目经历
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border text-muted-foreground hover:text-foreground">
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  下载 PDF 简历
                </a>
              </Button>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-card border-border text-center p-5 flex flex-col items-center gap-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-2xl font-bold text-foreground font-mono-code leading-none">{stat.value}</span>
                <span className="text-xs text-muted-foreground leading-snug">{stat.label}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
        {/* About + Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* About Preview */}
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-foreground">关于我</span>
                <Link to="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-0.5">
                  更多 <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                专注前端开发与 AI 应用落地，擅长 Vue 生态与 TypeScript 工程化开发，具备企业级系统从 0 到 1 的落地经验。
              </p>
              <ul className="space-y-2.5">
                {aboutPoints.map((point) => (
                  <li key={point.label} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <span className="w-4 h-4 rounded-full bg-emerald-950 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span><span className="text-foreground font-medium">{point.label}：</span>{point.desc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Skills Preview */}
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-foreground">技能栈</span>
                <Link to="/skills" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-0.5">
                  更多 <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="space-y-0">
                {homeSkillsPreview.map((row: { category: string; skills: string[] }, i: number) => (
                  <div key={row.category}>
                    <div className="flex items-start gap-4 py-2.5">
                      <span className="text-[11px] font-medium text-muted-foreground w-20 flex-shrink-0 pt-0.5">{row.category}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {row.skills.map((skill: string) => (
                          <TechBadge key={skill} name={skill} />
                        ))}
                      </div>
                    </div>
                    {i < homeSkillsPreview.length - 1 && <Separator className="bg-border/50" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Projects */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-sm">★</span>
              <span className="text-sm font-semibold text-foreground">精选项目</span>
            </div>
            <Link to="/projects" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-0.5">
              查看全部项目 <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group block"
              >
                <Card className="bg-card border-border h-full card-hover overflow-hidden">
                  {/* Thumb */}
                  <div className="h-28 bg-gradient-to-br from-blue-950/40 to-zinc-900 flex items-center justify-center border-b border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <span className="font-bold text-primary text-base font-mono-code">
                        {String(project.index).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">{project.title}</p>
                      <CategoryBadge category={project.category} label={project.categoryLabel} />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
