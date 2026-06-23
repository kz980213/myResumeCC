import { Clock, Tag } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { articles } from '@/data/profile'

export default function ArticlesPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
      <header className="pt-12 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">技术文章</h1>
        <p className="text-sm text-muted-foreground">记录技术思考与工程实践，持续更新中。</p>
      </header>

      {/* Draft notice */}
      <div className="flex items-center gap-2 px-4 py-3 bg-amber-950/30 border border-amber-900/40 rounded-md mb-8 text-xs text-amber-400">
        <span>📝</span>
        <span>以下文章整理中，近期会陆续发布至博客，敬请期待。</span>
      </div>

      {/* Articles list */}
      <div className="space-y-3">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="bg-card border-border card-hover cursor-default"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-base font-bold text-foreground hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <span className="text-xs text-muted-foreground px-2 py-0.5 bg-secondary rounded-full border border-border">草稿</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{article.summary}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Tag className="w-3 h-3" />
                      {article.tags.join(' · ')}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground flex-shrink-0 font-mono-code">{article.date}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Topic tags — auto-computed from article tags */}
      <div className="mt-10 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground mb-4">计划涉及话题</p>
        <div className="flex flex-wrap gap-2">
          {[...new Set(articles.flatMap(a => a.tags))].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-primary/5 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
