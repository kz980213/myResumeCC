import { Link } from 'react-router-dom'
import { Download, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { profile, aboutPoints } from '@/data/profile'

export default function AboutPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
      <header className="pt-12 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">关于我</h1>
        <p className="text-sm text-muted-foreground">专注前端开发与 AI 应用落地的工程师</p>
      </header>

      {/* Intro + Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Intro */}
        <Card className="bg-card border-border">
          <CardContent className="p-8 flex flex-col gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight mb-1">{profile.name}</h2>
              <p className="text-sm text-muted-foreground">
                {profile.title} / <span className="text-primary">{profile.direction}</span>
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio2}</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Button asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  下载简历
                </a>
              </Button>
              <Button asChild variant="outline" className="border-border text-muted-foreground hover:text-foreground">
                <Link to="/contact">联系我</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Core abilities */}
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <h3 className="text-sm font-bold text-foreground mb-5">核心能力</h3>
            <ul className="space-y-4">
              {aboutPoints.map((point) => (
                <li key={point.label} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-0.5">{point.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{point.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Work experience */}
      <Card className="bg-card border-border mb-4">
        <CardContent className="p-6">
          <h3 className="text-sm font-bold text-foreground mb-6">工作经历</h3>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-primary mt-1" />
              <div className="w-px flex-1 bg-border mt-2" />
            </div>
            <div className="pb-4">
              <p className="text-xs text-muted-foreground mb-1">2020.07 — 2024.03</p>
              <p className="text-sm font-semibold text-foreground mb-0.5">前端开发工程师</p>
              <p className="text-xs text-muted-foreground mb-3">某互联网公司（具体信息面谈）</p>
              <Separator className="bg-border mb-3" />
              <ul className="space-y-2">
                {[
                  '负责企业核心业务系统前端开发，使用 Vue2/Vue3 + TypeScript 构建复杂业务模块',
                  '主导权限控制、流程审批、复杂表单等核心功能的设计与实现',
                  '参与需求评审、技术方案制定、接口联调和上线验证全流程',
                  '推动前端工程化规范建设，提升团队开发效率',
                ].map((item) => (
                  <li key={item} className="text-xs text-muted-foreground leading-relaxed pl-3 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-primary/60">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h3 className="text-sm font-bold text-foreground mb-6">教育背景</h3>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-primary/50 mt-1" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">2016 — 2020</p>
              <p className="text-sm font-semibold text-foreground mb-0.5">本科 · 计算机相关专业</p>
              <p className="text-xs text-muted-foreground">某高等院校</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
