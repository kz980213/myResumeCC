import { useState } from 'react'
import { Download, Copy, Check, Link, Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { profile, interestTopics, interestBanner, hiringRoles } from '@/data/profile'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
      <header className="pt-12 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">简历下载 / 联系方式</h1>
        <p className="text-sm text-muted-foreground">期待与优秀的团队一起探索技术，创造价值。</p>
      </header>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-4 mb-6">
        {/* Resume card */}
        <Card className="bg-card border-border">
          <CardContent className="p-8 flex flex-col gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground">下载我的简历</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              一份完整的个人介绍，包含技能、经验与项目经历，期待与您进一步沟通。
            </p>
            <div className="flex flex-col gap-2.5">
              <Button asChild className="w-full">
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  下载 PDF 简历
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-border text-muted-foreground hover:text-foreground">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  立即联系
                </a>
              </Button>
            </div>
            <Separator className="bg-border" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className="text-xs text-muted-foreground">
                当前可接受面试机会 &nbsp;|&nbsp; {profile.expectedCities}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-950/60 text-blue-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">邮箱</h4>
              <p className="text-xs text-muted-foreground break-all">{profile.email}</p>
              <button
                onClick={copyEmail}
                className="mt-auto inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 font-medium transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? '已复制' : '复制邮箱'}
              </button>
            </CardContent>
          </Card>

          {/* GitHub */}
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </div>
              <h4 className="text-base font-bold text-foreground">GitHub</h4>
              <p className="text-xs text-muted-foreground">{profile.github}</p>
              <a href={profile.githubUrl} target="_blank" rel="noopener" className="mt-auto inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 font-medium transition-colors">
                <Link className="w-3.5 h-3.5" />
                访问主页
              </a>
            </CardContent>
          </Card>

          {/* Blog */}
          <Card className="bg-card border-border card-hover">
            <CardContent className="p-6 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-950/60 text-emerald-400 flex items-center justify-center">
                <Link className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">博客</h4>
              <p className="text-xs text-muted-foreground">{profile.blog}</p>
              <a href={profile.blogUrl} target="_blank" rel="noopener" className="mt-auto inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 font-medium transition-colors">
                <Link className="w-3.5 h-3.5" />
                访问博客
              </a>
            </CardContent>
          </Card>

          {/* WeChat */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-green-950/60 text-green-400 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-foreground">微信</h4>
              <p className="text-xs text-muted-foreground">面试沟通可通过邮件获取</p>
              <div className="mt-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-3.5 h-3.5 text-emerald-500">🔒</span>
                隐私保护，安全可靠
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interest Banner */}
      <Card className="bg-card border-border mb-4">
        <CardContent className="p-5 flex flex-col sm:flex-row items-start gap-5">
          <div className="w-10 h-10 rounded-full bg-amber-950/60 text-amber-400 flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-foreground mb-1.5">{interestBanner.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{interestBanner.desc}</p>
          </div>
          <div className="flex flex-wrap sm:flex-col gap-2 flex-shrink-0">
            {interestTopics.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-secondary text-muted-foreground border border-border">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hire banner */}
      <p className="text-center text-xs text-muted-foreground pb-4 leading-relaxed">
        如果你正在招聘&nbsp;
        {hiringRoles.map((role, i) => (
          <span key={role}>
            <span className="text-primary font-medium">{role}</span>
            {i < hiringRoles.length - 1 ? (i === hiringRoles.length - 2 ? '或' : '、') : ''}
          </span>
        ))}
        ，欢迎联系我。
      </p>
    </div>
  )
}
